package com.netlink.jwtpoc.services;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class MyUserDetailsServiceTest {


    @InjectMocks
    MyUserDetailsService myUserDetailsService;


    @Test
    @WithMockUser("Thomas")
    public void loadUserByUsernameTest(){
       // user=new User("abc", "cds", null);

       UserDetails response= myUserDetailsService.loadUserByUsername("Thomas");

        Assert.assertTrue(response.getPassword()=="Medhi");

    }
}
