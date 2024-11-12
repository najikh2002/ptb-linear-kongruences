# Kongruen Linear

Kongruen linear adalah konsep dalam teori bilangan yang berhubungan dengan solusi dari persamaan dalam bentuk:

\[
a \cdot x \equiv b \pmod{c}
\]

Di mana:

- \( a \), \( b \), dan \( c \) adalah bilangan bulat.
- \( x \) adalah variabel yang kita cari.
- Simbol \( \equiv \) menunjukkan bahwa kedua sisi persamaan memiliki hasil yang sama jika dibagi dengan \( c \).

## Definisi

Sebuah persamaan kongruen linear adalah persamaan yang dapat ditulis dalam bentuk \( a \cdot x \equiv b \pmod{c} \). Persamaan ini menyatakan bahwa bilangan \( a \cdot x \) meninggalkan sisa yang sama dengan bilangan \( b \) ketika dibagi oleh \( c \).

**Contoh sederhana**: Misalkan kita memiliki persamaan \( 3 \cdot x \equiv 1 \pmod{7} \). Solusi dari persamaan ini adalah nilai \( x \) yang memenuhi kesetaraan tersebut, yaitu bilangan yang ketika dikalikan dengan 3, memberikan sisa 1 saat dibagi dengan 7.

## Teorema (Keberadaan Solusi Kongruen Linear)

Untuk persamaan kongruen linear \( a \cdot x \equiv b \pmod{c} \), terdapat solusi jika dan hanya jika gcd(\(a\), \(c\)) membagi \(b\), di mana gcd adalah faktor persekutuan terbesar dari \( a \) dan \( c \).

Jika gcd(\(a\), \(c\)) = \( d \), maka terdapat tepat \( d \) solusi yang berbeda (mod \( c \)).

### Pernyataan Teorema:

Jika persamaan \( a \cdot x \equiv b \pmod{c} \) memiliki solusi, maka solusinya dapat dinyatakan dalam bentuk:

\[
x \equiv x_0 + \left(\frac{c}{\text{gcd}(a, c)}\right) \cdot t \pmod{c}
\]

di mana:

- \( x_0 \) adalah solusi awal dari persamaan.
- \( t \) adalah bilangan bulat yang bervariasi untuk menghasilkan solusi berbeda.

## Pembuktian Teorema

Untuk memahami mengapa solusi ada dan bagaimana bentuknya, kita perlu melihat beberapa langkah pembuktian dasar:

1. **Keberadaan Solusi**:
   Misalkan \( d = \text{gcd}(a, c) \). Karena \( d \) adalah gcd dari \( a \) dan \( c \), kita dapat menuliskan:

   \[
   a = d \cdot a' \quad \text{dan} \quad c = d \cdot c'
   \]

   untuk beberapa bilangan bulat \( a' \) dan \( c' \) yang saling prima (gcd(\(a'\), \(c'\)) = 1). Substitusi ini ke dalam persamaan kongruen memberikan:

   \[
   d \cdot a' \cdot x \equiv b \pmod{d \cdot c'}
   \]

2. **Pembagian Faktor GCD**:
   Agar persamaan memiliki solusi, \( b \) harus habis dibagi oleh \( d \), sehingga kita dapat menulis \( b = d \cdot b' \) untuk bilangan bulat \( b' \). Ini menyederhanakan persamaan menjadi:

   \[
   a' \cdot x \equiv b' \pmod{c'}
   \]

3. **Solusi Persamaan yang Disederhanakan**:
   Karena \( a' \) dan \( c' \) saling prima, persamaan ini selalu memiliki solusi tunggal \( x_0 \) (mod \( c' \)), yang dapat ditemukan dengan metode invers modulo atau algoritma Euclidean. Dengan solusi awal \( x_0 \), kita dapat menuliskan solusi umum dari persamaan kongruen asli sebagai:

   \[
   x \equiv x_0 + k \cdot \frac{c}{d} \pmod{c}
   \]

   di mana \( k \) adalah bilangan bulat. Solusi ini mencakup semua solusi kongruen dalam bentuk yang berbeda.

## Kesimpulan

Teorema ini memberikan cara untuk mengetahui apakah persamaan kongruen linear memiliki solusi dan, jika ya, bagaimana menemukan solusi tersebut. Dalam implementasi kalkulator kongruen linear, algoritma Euclidean dan metode kombinasi linear digunakan untuk mencari solusi \( x_0 \) dan solusi umum, memanfaatkan teorema ini untuk menampilkan langkah-langkah yang jelas dan lengkap.
