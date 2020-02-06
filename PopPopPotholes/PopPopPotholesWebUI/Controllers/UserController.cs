using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PopPopPotholesWebUI.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult LocalIssues()
        {
            return View();
        }
        public IActionResult IssueType()
        {
            return View();
        }
        public IActionResult IssueSeverity()
        {
            return View();
        }
        public IActionResult ThankYou()
        {
            return View();
        }
        public IActionResult IssueSummary()
        {
            return View();
        }
        public IActionResult Confirmation()
        {
            return View();
        }
    }
}