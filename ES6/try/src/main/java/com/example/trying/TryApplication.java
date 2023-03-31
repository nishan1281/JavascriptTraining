package com.example.trying;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@SpringBootApplication
@RestController
public class TryApplication {

    public static void main(String[] args) {
        SpringApplication.run(TryApplication.class, args);
    }
    @GetMapping("/")
    public ModelAndView home() {
        return new ModelAndView("home.html");
    }

   }



