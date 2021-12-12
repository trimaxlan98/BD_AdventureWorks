
package crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConexion(){
        String conexioUrl = "jdbc:sqlserver://localhost:1433;"
                + "database=AdventureWorks2019;"
                + "user=sa;"
                + "password=strikermagic;"
                + "loginTimeout=15;";
        
        try{
            Connection con = DriverManager.getConnection(conexioUrl);
            return con;
        } catch(SQLException ex){
            System.out.println(ex.toString());
            return null;
        }
    }
}
