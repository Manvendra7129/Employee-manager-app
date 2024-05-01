package com.ems.ems.service;

import com.ems.ems.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
@Service
public class UserService {
    private List<User> store=new ArrayList<>();
    public UserService(){
        store.add(new User(UUID.randomUUID().toString(),"shubham","shubham@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(),"shubham1","shubham1@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(),"shubham2","shubham2@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(),"shubham3","shubham3@gmail.com"));
    }
    public List<User> getUsers(){
        return this.store;
    }
}
