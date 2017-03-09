using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS2
{
    public class Country
    {
        public int CountryID { get; set; }
        public string Name { get; set; }
        public List<City> LstCity { get; set; }
    }
}