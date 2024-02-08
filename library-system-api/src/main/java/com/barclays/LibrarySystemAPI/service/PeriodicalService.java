package com.barclays.LibrarySystemAPI.service;

import com.barclays.LibrarySystemAPI.model.Periodical;

import java.util.List;

public interface PeriodicalService {
    List<Periodical> findAllPeriodicals();

    List <Periodical> findPeriodicalByPeriodicalName(String periodicalName);
}
