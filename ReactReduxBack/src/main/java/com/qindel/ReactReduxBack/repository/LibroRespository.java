package com.qindel.ReactReduxBack.repository;

import com.qindel.ReactReduxBack.entity.LibroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface Libro respository.
 * Un típico repositorio de Spring, extendiendo JpaRepository<clase, tipo de la ID>
 *
 * @author Martín Vázquez Torres
 */
@Repository
public interface LibroRespository extends JpaRepository<LibroEntity, Integer> {

    List<LibroEntity> findAll();

}
