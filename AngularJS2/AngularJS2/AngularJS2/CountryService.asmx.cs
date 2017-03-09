using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Configuration;

namespace AngularJS2
{
    /// <summary>
    /// Summary description for CountryService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class CountryService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAll()
        {
            List<Country> LstCountry = new List<Country>();
            string cn = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cn))
            {
                SqlCommand cmd = new SqlCommand("select * from Country; select * from City", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                DataView dv = new DataView(ds.Tables[1]);
                foreach(DataRow dr in ds.Tables[0].Rows)
                {
                    Country country = new Country();
                    country.CountryID = int.Parse(dr["CountryID"].ToString());
                    country.Name = dr["Name"].ToString();
                    List<City> Lst = new List<City>();
                    dv.RowFilter = "CountryID = '" + country.CountryID + "'";
                    foreach(DataRowView drv in dv)
                    {
                        DataRow dr2 = drv.Row;
                        City city = new City();
                        city.CityID = int.Parse(dr2["CityID"].ToString());
                        city.Name = dr2["Name"].ToString();
                        city.CountryID = country.CountryID;
                        Lst.Add(city);
                    }
                    country.LstCity = Lst;
                    LstCountry.Add(country);
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(LstCountry));
        }
    }
}
