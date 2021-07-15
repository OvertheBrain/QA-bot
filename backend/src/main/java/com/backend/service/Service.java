package com.backend.service;

import com.backend.entity.Client;
import com.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    ClientRepository clientRepository;
    public List<Client> login(String username, String password){
        return clientRepository.findAll();


    }
}
