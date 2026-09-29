#include <iostream>
#include "config.h"
#define MAX_SIZE 256
#define SQUARE(x) ((x) * (x))

namespace neon {
template <typename T>
struct Buffer {
    T* data;
    std::size_t size = 0;
    // Retourne l'élément à l'index donné
    T& at(std::size_t i) const { return data[i]; }
};
}  // namespace neon

int main() {
    neon::Buffer<int> buf{new int[MAX_SIZE], MAX_SIZE};
    int* ptr = &buf.data[0];
    for (int i = 0; i < 10; ++i) {
        if (ptr != nullptr) std::cout << SQUARE(i) << "\n";
    }
    delete[] buf.data;
    return 0;
}
