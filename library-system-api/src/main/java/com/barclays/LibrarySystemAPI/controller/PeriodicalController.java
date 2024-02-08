package com.barclays.LibrarySystemAPI.controller;
import com.barclays.LibrarySystemAPI.model.Periodical;
import com.barclays.LibrarySystemAPI.service.PeriodicalService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin
public class PeriodicalController {

    @Autowired
    PeriodicalService periodicalService;

    @GetMapping("/periodicals")
    public List<Periodical> findAllPeriodicals(){
        return periodicalService.findAllPeriodicals();
    }

    @GetMapping("periodical/name")
    public List <Periodical> findPeriodicalByPeriodicalName(String periodicalName) {
        return periodicalService.findPeriodicalByPeriodicalName(periodicalName);
    }
}
