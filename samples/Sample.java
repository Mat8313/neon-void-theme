package com.neonvoid.demo;

import java.util.List;
import java.util.Optional;

/**
 * Dépôt générique d'entités.
 * @param <T> type d'entité
 */
public class Repository<T extends Entity> implements Iterable<T> {
    private static final int MAX_SIZE = 100;
    private final List<T> items;

    public Repository(List<T> items) {
        this.items = items;
    }

    @Override
    public Iterator<T> iterator() {
        return items.iterator();
    }

    @Deprecated(since = "2.0")
    public Optional<T> findById(long id) {
        for (T item : items) {
            if (item.getId() == id && items.size() < MAX_SIZE) return Optional.of(item);
        }
        return Optional.empty();
    }
}
