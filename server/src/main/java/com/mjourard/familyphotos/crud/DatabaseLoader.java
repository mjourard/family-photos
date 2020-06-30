package com.mjourard.familyphotos.crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final PhotoRepository photos;

    @Autowired
    public DatabaseLoader(PhotoRepository photos) {
        this.photos = photos;
    }

    @Override
    public void run(String... args) throws Exception {
        this.photos.save(new Photo("Summer fun", "The whole fam jam at the cottage", "1998-08-01", "1998-08-01", new Long(1), new Long(1)));
    }
}
