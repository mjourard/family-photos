package com.mjourard.familyphotos.crud;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = "/")
    public String index() {
        //maps to main/resources/templates/index.html
        return "index";
    }

}
