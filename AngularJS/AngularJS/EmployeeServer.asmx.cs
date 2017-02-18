﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace AngularJS
{
    /// <summary>
    /// Summary description for EmployeeServer
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeServer : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployee()
        {
            List<Employee> LstEmployees = new List<Employee>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblEmployees", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while(rdr.Read())
                {
                    Employee e = new Employee();
                    e.EmployeeID = int.Parse(rdr["EmployeeID"].ToString());
                    e.Name = rdr["Name"].ToString();
                    e.Gender = rdr["Gender"].ToString();
                    e.Salary = int.Parse(rdr["Salary"].ToString());
                    LstEmployees.Add(e);
                }
                con.Close();
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            var obj = js.Serialize(LstEmployees);
            Context.Response.Write(js.Serialize(LstEmployees));   
        }
    }
}
