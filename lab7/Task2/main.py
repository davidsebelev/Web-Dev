from models import Animal, Dog, Cat


def main():
    animal1 = Animal("Generic Animal", 5, "Gray")
    dog1 = Dog("Buddy", 3, "Brown", "Labrador")
    cat1 = Cat("Luna", 2, "White", True)

    animals = [animal1, dog1, cat1]

    print("=== Printing objects ===")
    for animal in animals:
        print(animal)

    print("\n=== Animal info ===")
    for animal in animals:
        print(animal.info())

    print("\n=== Polymorphism: speak() ===")
    for animal in animals:
        print(animal.speak())

    print("\n=== Child-specific methods ===")
    print(dog1.fetch())
    print(cat1.scratch())


if __name__ == "__main__":
    main()