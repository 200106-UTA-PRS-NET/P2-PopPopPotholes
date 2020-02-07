using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PopPopPotholesWebUI.Models
{
    public class Admin
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public int CityID { get; set; }
        public DateTime Lockout { get; set; }
        public char Enabled { get; set; }
    }
}
