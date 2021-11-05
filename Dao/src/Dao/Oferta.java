package Dao;

import database.Config;
import interfaces.ISale;
import java.sql.*;

public class Oferta implements ISale<Object> {
	private Connection con;

	public Oferta() {
		this.con = Config.getConnection();
	}

	@Override
	public Object[] obtenerOfertas() {
		try {
			Statement stmt = this.con.createStatement();
			ResultSet rs = stmt.executeQuery("select top 10 * from Sales.SpecialOffer");
			while (rs.next()) {
				// Display values
				System.out.print("ID: " + rs.getInt("SpecialOfferID"));
				System.out.print(", Description: " + rs.getString("Description"));
				System.out.print(", Discount: " + rs.getDouble("DiscountPct"));
				System.out.println(", Type: " + rs.getString("Type"));
				System.out.println(", Category: " + rs.getString("Category"));
				System.out.println(", Date: " + rs.getDate("StartDate"));
				System.out.println(", EndDate: " + rs.getDate("EndDate"));
				System.out.println(", MinQty " + rs.getInt("MinQty"));
				System.out.println(", MaxQyt " + rs.getInt("MaxQty"));
				System.out.println(", rowguid " + rs.getString("rowguid"));
				System.out.println(", ModifiedDate " + rs.getDate("ModifiedDate"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Object obtenerOferta(int idOferta) {
		try {
			PreparedStatement statement = this.con
					.prepareStatement("select * from Sales.SpecialOffer where SpecialOfferId = ?");
			statement.setString(1, idOferta + "");
			ResultSet rs = statement.executeQuery();
			while (rs.next()) {
				// Display values
				System.out.print("ID: " + rs.getInt("SpecialOfferID"));
				System.out.print(", Description: " + rs.getString("Description"));
				System.out.print(", Discount: " + rs.getDouble("DiscountPct"));
				System.out.println(", Type: " + rs.getString("Type"));
				System.out.println(", Category: " + rs.getString("Category"));
				System.out.println(", Date: " + rs.getDate("StartDate"));
				System.out.println(", EndDate: " + rs.getDate("EndDate"));
				System.out.println(", MinQty " + rs.getInt("MinQty"));
				System.out.println(", MaxQyt " + rs.getInt("MaxQty"));
				System.out.println(", rowguid " + rs.getString("rowguid"));
				System.out.println(", ModifiedDate " + rs.getDate("ModifiedDate"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return null;
	}

}
