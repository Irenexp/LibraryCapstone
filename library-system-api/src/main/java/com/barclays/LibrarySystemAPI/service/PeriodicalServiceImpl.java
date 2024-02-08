package com.barclays.LibrarySystemAPI.service;


import com.barclays.LibrarySystemAPI.model.Periodical;
import com.barclays.LibrarySystemAPI.repository.PeriodicalRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class PeriodicalServiceImpl implements PeriodicalService {

    @Autowired
    private PeriodicalRepository periodicalRepository;

    @Override
    public List<Periodical> findAllPeriodicals() {
        List<Periodical> periodicals = new ArrayList<>();
        Iterable<Periodical> periodicalIts = periodicalRepository.findAll();
        periodicalIts.forEach(periodicals::add);
        return periodicals;
    }

    @Override
    public List <Periodical> findPeriodicalByPeriodicalName(String periodicalName){
      List<Periodical> periodicalListByName =  periodicalRepository.findPeriodicalByPeriodicalName(periodicalName);
    return periodicalListByName;
    }
}
