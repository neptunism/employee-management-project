//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import java.util.Scanner;
enum Days
{
    MONDAY(1,"Monday")
            {
                public String getDiet()
                {
                    return "diet for Monday: eggs, rice, juice";
                }
            },

    TUESDAY(2, "Tuesday")
            {
                public String getDiet()
                {
                    return "diet for Tuesday: cornflakes, roti sabzi, buttermilk";
                }
            },

    WEDNESDAY(3, "Wednesday")
            {
                public String getDiet()
                {
                    return "diet for Wednesday: sandwich, egg, juice";
                }
            },

    THURSDAY(4, "Thursday")
            {
                public String getDiet()
                {
                    return "diet for Thursday: cornflakes, egg, buttermilk";
                }
            },

    FRIDAY(5, "Friday")
            {
                public String getDiet()
                {
                    return "diet for Tuesday: salad, juice, egg";
                }
            },

    SATURDAY(6, "Saturday")
            {
                public String getDiet()
                {
                    return "diet for SATURDAY: egg, daal & rice, buttermilk";
                }

            },

    SUNDAY(7, "Sunday")
            {
                public String getDiet()
                {
                    return "diet for Sunday: cheat day";
                }
            };

    int dayNo;
    String days;

    private Days(int dayNo, String day)
    {
        this.dayNo = dayNo;
        this.days = day;
    }

    abstract String getDiet();
}

class Main
{
    public static void main(String[] args)
    {

        System.out.println("Diet plan for all days: ");
        for(Days d1: Days.values())
            System.out.println(d1.getDiet());
    }

}
