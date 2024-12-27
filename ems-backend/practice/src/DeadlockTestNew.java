public class DeadlockTestNew {
    public static void main(String[] args) throws InterruptedException {
        Data data=new Data();
        Thread t0=new Thread(new Runnable()	{
            @Override
            public void run()	{
                try	{
                    data.task0();
                } catch (InterruptedException e)	{
                    e.printStackTrace();
                }
            }
        });
        Thread t1=new Thread(new Runnable()		{
            @Override
            public void run()		{
                try		{
                    data.task1();
                } catch (InterruptedException e)		{
                    e.printStackTrace();
                }
            }
        });
        t0.start();
        t1.start();
        t0.join();
        t1.join();
        System.out.println("Program execution complete!");
    }
}
class Data {
    private final Object lock0=new Object();
    private final Object lock1=new Object();
    void task0() throws InterruptedException {
        String name=Thread.currentThread().getName();
        System.out.println(name+" trying to get lock0");
        synchronized(lock0) {
            System.out.println(name+" got lock0");
            Thread.sleep(3000);
            System.out.println(name+" trying to get lock1");
            synchronized(lock1) {
                System.out.println(name+" got lock1");
                Thread.sleep(3000);
            }
        }
        System.out.println(name+" released both locks");
    }
    void task1() throws InterruptedException	{
        String name=Thread.currentThread().getName();
        System.out.println(name+" trying to get lock1");
        synchronized(lock1)		{
            System.out.println(name+" got lock1");
            Thread.sleep(3000);
            System.out.println(name+" trying to get lock0");
            synchronized(lock0)		{
                System.out.println(name+" got lock0");
                Thread.sleep(3000);
            }
        }
        System.out.println(name+" released both locks");
    }
}
