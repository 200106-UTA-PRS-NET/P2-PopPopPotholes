using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PopPopPotholesWebUI.Models
{
    public class Issue
    {
        public int ID { get; set; }
        public DateTime IssueTime { get; set; }
        public string IssueType { get; set; }
        public string IssueSeverity { get; set; }
        public int CityId { get; set; }
        public string ImageLink { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string City { get; set; }
        public string Summary { get; set; }
    }
}
