package database;

import java.sql.*;

public class Config {
	public static Connection getConnection() {
		String url = "jdbc:sqlserver://localhost:1433;database=AdventureWorks2019;user=bases;password=basesdedatos";
		try {
			Connection con = DriverManager.getConnection(url);
			return con;
		} catch (SQLException e) {
			System.out.print(e);
		}
		return null;
	}
}
