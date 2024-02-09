package com.barclays.LibrarySystemAPI.service;

import com.barclays.LibrarySystemAPI.model.ReservedItem;
import com.barclays.LibrarySystemAPI.dto.ReserveDTO;

import java.util.List;

public interface ReserveService {
    ReservedItem save(ReserveDTO reserveDTO);
    List<ReservedItem> getAllReservations();
}
