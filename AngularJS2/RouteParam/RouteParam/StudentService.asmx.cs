using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace RouteParam
{
    /// <summary>
    /// Summary description for StudentService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class StudentService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllData()
        {
            List<Student> LstStudent = new List<Student>();
            string cn = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cn))
            {
                SqlDataAdapter da = new SqlDataAdapter("select * from Student", con);
                DataTable dt = new DataTable();
                da.Fill(dt);
                foreach (DataRow dr in dt.Rows)
                {
                    Student std = new Student();
                    std.StudentID = int.Parse(dr["StudentID"].ToString());
                    std.Name = dr["Name"].ToString();
                    std.Gender = dr["Gender"].ToString();
                    std.City = dr["City"].ToString();
                    LstStudent.Add(std);
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(LstStudent));
        }

        [WebMethod]
        public void GetByID(int id)
        {
            Student std = new Student();
            string cn = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cn))
            {
                SqlDataAdapter da = new SqlDataAdapter("select * from Student where StudentID = " + id, con);
                DataTable dt = new DataTable();
                da.Fill(dt);

                std.StudentID = int.Parse(dt.Rows[0]["StudentID"].ToString());
                std.Name = dt.Rows[0]["Name"].ToString();
                std.Gender = dt.Rows[0]["Gender"].ToString();
                std.City = dt.Rows[0]["City"].ToString();
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(std));
        }

    }
}
