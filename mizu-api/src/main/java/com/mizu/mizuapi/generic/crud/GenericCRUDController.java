package com.mizu.mizuapi.generic.crud;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class GenericCRUDController<T,V extends GenericCRUDEntity<T,V>> {

    private final GenericCRUDService<T,V> genericCRUDService;

    public GenericCRUDController(GenericCRUDRepository<T,V>repository,GenericMapper<T,V> mapper) {
        this.genericCRUDService= new GenericCRUDService<T,V>(repository,mapper){};
    }

    @GetMapping("")
    @ResponseBody
    public Page<V> getPage(Pageable pageable){
        return genericCRUDService.getPage(pageable);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public V getOne(@PathVariable Long id){
        return genericCRUDService.get(id);
    }

    @PostMapping("")
    public ResponseEntity<V> create(@RequestBody V created){
        return ResponseEntity.ok(genericCRUDService.create(created));
    }

    @PutMapping("")
    public ResponseEntity<V> update(@RequestBody V updated){
        return ResponseEntity.ok(genericCRUDService.update(updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        genericCRUDService.delete(id);
        return ResponseEntity.ok("Ok");
    }

}
