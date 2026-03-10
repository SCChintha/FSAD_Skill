package com.klef.fsad.exam;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.Date;
import java.util.Scanner;

public class ClientDemo
{
    public static void main(String[] args)
    {
        Configuration cfg=new Configuration();
        cfg.configure("hibernate.cfg.xml");

        SessionFactory sf=cfg.buildSessionFactory();
        Session session=sf.openSession();

        Scanner sc=new Scanner(System.in);

        System.out.println("1.Insert");
        System.out.println("2.Delete");
        int choice=sc.nextInt();

        Transaction tx=session.beginTransaction();

        if(choice==1)
        {
            sc.nextLine();

            System.out.println("Enter Name");
            String name=sc.nextLine();

            System.out.println("Enter Description");
            String desc=sc.nextLine();

            System.out.println("Enter Status");
            String status=sc.nextLine();

            Inventory inv=new Inventory(name,desc,new Date(),status);

            session.save(inv);

            System.out.println("Record Inserted");
        }

        else if(choice==2)
        {
            System.out.println("Enter ID");
            int id=sc.nextInt();

            Inventory inv=session.get(Inventory.class,id);

            if(inv!=null)
            {
                session.delete(inv);
                System.out.println("Record Deleted");
            }
            else
            {
                System.out.println("Record Not Found");
            }
        }

        tx.commit();
        session.close();
        sf.close();
    }
}