package com.backend.controller;

import com.backend.entity.Client;
import com.backend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class Controller {
    @Autowired
    Service service;


    @RequestMapping("/SendMsg")
    public String ReplyMsg(){
        return "您好，我有事不在，请稍后再联系。";
    }

    @RequestMapping("/login")
    public List<Client> Login(String username, String password){


        List<Client> ret= service.login(username,password);
        return  ret;
    }

}
