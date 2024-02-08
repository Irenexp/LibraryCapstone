package com.barclays.LibrarySystemAPI.repository;

import com.barclays.LibrarySystemAPI.model.Movie;
import com.barclays.LibrarySystemAPI.model.Periodical;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PeriodicalRepository  extends CrudRepository<Periodical, Long> {

  @Query("SELECT new Periodical (p.id, p.periodicalName, p.publicationDate,p.type, p.imgUrl) FROM Periodical  p WHERE p.periodicalName LIKE %:periodicalName%")
   List<Periodical> findPeriodicalByPeriodicalName(String periodicalName );


    List<Periodical> findAll();


}
