package com.mjourard.familyphotos.crud;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Photo {
    private @Id
    @GeneratedValue
    Long id;

    private String name;
    private String description;
    private String dtAdded;
    private String dtMod;
    private Long objectStorageId;
    private Long albumId;

    private Photo() {}

    public Photo(String name, String description, String dtAdded, String dtMod, Long objectStorageId, Long albumId) {
        this.name = name;
        this.description = description;
        this.dtAdded = dtAdded;
        this.dtMod = dtMod;
        this.objectStorageId = objectStorageId;
        this.albumId = albumId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Photo photo = (Photo) o;
        return Objects.equals(id, photo.id) &&
                Objects.equals(name, photo.name) &&
                Objects.equals(description, photo.description) &&
                Objects.equals(dtAdded, photo.dtAdded) &&
                Objects.equals(dtMod, photo.dtMod) &&
                Objects.equals(objectStorageId, photo.objectStorageId) &&
                Objects.equals(albumId, photo.albumId);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, description, dtAdded, dtMod, objectStorageId, albumId);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDtAdded() {
        return dtAdded;
    }

    public void setDtAdded(String dtAdded) {
        this.dtAdded = dtAdded;
    }

    public String getDtMod() {
        return dtMod;
    }

    public void setDtMod(String dtMod) {
        this.dtMod = dtMod;
    }

    public Long getObjectStorageId() {
        return objectStorageId;
    }

    public void setObjectStorageId(Long objectStorageId) {
        this.objectStorageId = objectStorageId;
    }

    public Long getAlbumId() {
        return albumId;
    }

    public void setAlbumId(Long albumId) {
        this.albumId = albumId;
    }

    @Override
    public String toString() {
        return "Photo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", dtAdded='" + dtAdded + '\'' +
                ", dtMod='" + dtMod + '\'' +
                ", objectStorageId=" + objectStorageId +
                ", albumId=" + albumId +
                '}';
    }
}
