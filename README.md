# Kongruen Linear

Kongruen linear adalah konsep dalam teori bilangan yang berkaitan dengan solusi dari persamaan berbentuk:

```
a * x ≡ b (mod c)
```

Di mana:

- `a`, `b`, dan `c` adalah bilangan bulat.
- `x` adalah variabel yang ingin dicari.
- Simbol `≡` menunjukkan bahwa kedua sisi persamaan memiliki hasil yang sama jika dibagi oleh `c`.

## Definisi

Sebuah persamaan kongruen linear adalah persamaan yang dapat ditulis dalam bentuk `a * x ≡ b (mod c)`. Persamaan ini menyatakan bahwa hasil perkalian `a * x` meninggalkan sisa yang sama dengan `b` ketika dibagi oleh `c`.

**Contoh sederhana**: Misalkan kita memiliki persamaan `3 * x ≡ 1 (mod 7)`. Solusi dari persamaan ini adalah nilai `x` yang memenuhi kesetaraan tersebut, yaitu bilangan yang ketika dikalikan dengan 3, memberikan sisa 1 saat dibagi dengan 7.

## Teorema (Keberadaan Solusi Kongruen Linear)

Untuk persamaan kongruen linear `a * x ≡ b (mod c)`, terdapat solusi jika dan hanya jika gcd(a, c) membagi b, di mana gcd adalah faktor persekutuan terbesar dari `a` dan `c`.

Jika gcd(a, c) = `d`, maka terdapat tepat `d` solusi yang berbeda (mod `c`).

### Pernyataan Teorema:

Jika persamaan `a * x ≡ b (mod c)` memiliki solusi, maka solusinya dapat dinyatakan dalam bentuk:

```
x ≡ x_0 + (c / gcd(a, c)) * t (mod c)
```

di mana:

- `x_0` adalah solusi awal dari persamaan.
- `t` adalah bilangan bulat yang bervariasi untuk menghasilkan solusi berbeda.

## Pembuktian Teorema

Berikut adalah langkah-langkah pembuktian dasar dari teorema ini:

1. **Keberadaan Solusi**:
   Misalkan `d = gcd(a, c)`. Karena `d` adalah gcd dari `a` dan `c`, kita dapat menuliskan:

   ```
   a = d * a' dan c = d * c'
   ```

   di mana `a'` dan `c'` adalah bilangan bulat yang saling prima (gcd(a', c') = 1). Substitusi ini ke dalam persamaan kongruen memberikan:

   ```
   d * a' * x ≡ b (mod d * c')
   ```

2. **Pembagian Faktor GCD**:
   Agar persamaan memiliki solusi, `b` harus habis dibagi oleh `d`, sehingga kita dapat menulis `b = d * b'` untuk bilangan bulat `b'`. Ini menyederhanakan persamaan menjadi:

   ```
   a' * x ≡ b' (mod c')
   ```

3. **Solusi Persamaan yang Disederhanakan**:
   Karena `a'` dan `c'` saling prima, persamaan ini selalu memiliki solusi tunggal `x_0` (mod `c'`), yang dapat ditemukan dengan metode invers modulo atau algoritma Euclidean. Dengan solusi awal `x_0`, kita dapat menuliskan solusi umum dari persamaan kongruen asli sebagai:

   ```
   x ≡ x_0 + k * (c / d) (mod c)
   ```

   di mana `k` adalah bilangan bulat. Solusi ini mencakup semua solusi kongruen dalam bentuk yang berbeda.

## Kesimpulan

Teorema ini memberikan cara untuk mengetahui apakah persamaan kongruen linear memiliki solusi dan, jika ya, bagaimana menemukan solusi tersebut. Dalam implementasi kalkulator kongruen linear, algoritma Euclidean dan metode kombinasi linear digunakan untuk mencari solusi `x_0` dan solusi umum, memanfaatkan teorema ini untuk menampilkan langkah-langkah yang jelas dan lengkap.
