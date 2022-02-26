package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.helper.MizuSchoolConnector;
import com.mizu.mizuapi.request.search.SearchRequest;
import com.mizu.mizuapi.response.EntityList;
import com.mizu.mizuapi.ws.SchoolDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/school")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class SchoolController {
    @Autowired
    MizuSchoolConnector mizuSchoolConnector;

    @GetMapping("{id}")
    public SchoolDTO getSchoolById(@PathVariable Long id) {
        Map<String, Long> params = new HashMap<>();
        params.put("id", id);
        return (SchoolDTO) this.mizuSchoolConnector.getWithPathVariable("/school/{id}", params, SchoolDTO.class).block();
    }

    @GetMapping
    public EntityList<SchoolDTO> getAll() {
        return (EntityList<SchoolDTO>) this.mizuSchoolConnector.getAll("/school", EntityList.class).block();
    }

    @PutMapping
    public SchoolDTO update(@RequestBody SchoolDTO updated) {
        return (SchoolDTO) this.mizuSchoolConnector.update("/school", SchoolDTO.class, updated).block();
    }

    @DeleteMapping("{id}")
    public SchoolDTO deleteById(@PathVariable Long id) {
        Map<String, Long> params = new HashMap<>();
        params.put("id", id);
        return (SchoolDTO) this.mizuSchoolConnector.delete("/school/{id}", params, SchoolDTO.class).block();
    }
}
