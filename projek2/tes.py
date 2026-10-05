pin_benar = "1234"

for angka in range(10000):
    tebakan = f"{angka:04d}"

    print("Mencoba:", tebakan)

    if tebakan == pin_benar:
        print("PIN ditemukan!")
        print("PIN:", tebakan)
        break