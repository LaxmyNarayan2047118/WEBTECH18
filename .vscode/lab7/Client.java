
 
public class Client{
 
  
      private String ID;
    private String Firstname;
    private String Lastname;
    private int age;
    private double tradingAmt;

 
    public Client(String ID, String Firstname, String Lastname, int age, double tradingAmt) {
     
 this.ID = ID;
         this.Firstname = Firstname;
         this.Lastname = Lastname;
         this.age = age;
         this.tradingAmt = tradingAmt;
 
    }
 
    @Override
    public String toString() {
        return "<" + ID + ", " + Firstname + ", " + Lastname + ", " + age + ", " + tradingAmt + ">";
    }
 
}