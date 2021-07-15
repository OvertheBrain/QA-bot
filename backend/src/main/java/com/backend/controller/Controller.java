package com.backend.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class Controller {

    @RequestMapping("/SendMsg")
    public String ReplyMsg(){
        return "您好，我有事不在，请稍后再联系。";
    }

}
