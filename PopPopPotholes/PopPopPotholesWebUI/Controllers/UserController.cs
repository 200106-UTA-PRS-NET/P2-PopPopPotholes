using System;
using PopPopPotholesWebUI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PopPopPotholesWebUI.Controllers
{
    public class UserController : Controller
    {
        public IActionResult LocalIssues()
        { 
            List<Issue> issueEnum = new List<Issue>();
            Issue i1 = new Issue() { IssueType = "pothole", City = "Arlington", ImageLink = "fakelink.com" };
            Issue i2 = new Issue() { IssueType = "pothole", City = "Dallas", ImageLink = "fakelink2.com" };
            //CONNECT TO API HERE, EXPECTS JSON LIST OF ISSUES
            issueEnum.Add(i1);
            issueEnum.Add(i2);
            if(issueEnum.Count > 0)
            {
                return View(issueEnum);
            }
            else
            {
                return RedirectToAction(nameof(IssueType));
            }
        }
        public IActionResult IssueType()
        {
            List<string> issueTypes = new List<string>();
            //INSERT API CALL FOR ISSUE TYPES AS LIST OF STRINGS
            issueTypes.Add("Infrasturcture");
            issueTypes.Add("Accessability");
            issueTypes.Add("Hazard");
            issueTypes.Add("Waste");
            issueTypes.Add("Nuisance");
            issueTypes.Add("Pothole");
            return View(issueTypes);
        }
        [HttpPost]
        public IActionResult IssueSeverity(string Type)
        {
            TempData["IssueType"] = Type;
            List<string> issueSeverity = new List<string>();
            //INSERT API CALL FOR SeverityLevels AS LIST OF STRINGS
            issueSeverity.Add("Mild");
            issueSeverity.Add("Moderate");
            issueSeverity.Add("Severe");
            issueSeverity.Add("Critical");
            return View(issueSeverity);
        }
        public IActionResult ExistingIssue([FromForm]int SelectedIssue)
        {
            if(SelectedIssue == -1)
            {
                return RedirectToAction(nameof(IssueType));
            }
            else
            {
                //TELL THE API THAT THE ISSUE WITH ID SELECTEDISSUE CAN HAVE REPORT COUNT INCREMENTED
                return RedirectToAction(nameof(ThankYou));
            }
            
        }
        public IActionResult ThankYou()
        {
            return View();
        }
        public IActionResult IssueSummary(string Severity)
        {
            TempData["Severity"] = Severity;
            return View();
        }
        public IActionResult Confirmation(string summary)
        {
            Issue issue = new Issue()
            {
                IssueSeverity = TempData["Severity"].ToString(),
                IssueType = TempData["IssueType"].ToString(),
                Summary = summary
            };
            TempData["Summary"] = summary;
            TempData.Keep();
            return View(issue);
        }
        public IActionResult NewIssue()
        {
            Issue issue = new Issue()
            {
                IssueSeverity = TempData["Severity"].ToString(),
                IssueType = TempData["IssueType"].ToString(),
                Summary = TempData["Summary"].ToString()
            };
            return RedirectToAction(nameof(ThankYou));
        }

    }
}