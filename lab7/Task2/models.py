class Animal:
    def __init__(self, name: str, age: int, color:str):
        self.name = name
        self.age = age
        self.color = color
    
    def speak(self) -> str:
        return f"{self.name} makes a sound."
    
    def info(self) ->str:
        return f"Name is {self.name}, age is {self.age} and color is {self.color} "
    
    def __str__(self) -> str:
        return f"Animal name is {self.name}, age = {self.age} and color = {self.color}"
    

class Dog(Animal):
    def __init__(self, name : str, age : int , color : str, breed: str):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self) -> str:
        return f"{self.name} says: Woof!"

    def fetch(self) -> str:
        return f"{self.name} is fetching the ball."

    def __str__(self) -> str:
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name: str, age: int, color: str, indoor: bool):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self) -> str:
        return f"{self.name} says: Meow!"

    def scratch(self) -> str:
        return f"{self.name} is scratching the sofa."

    def __str__(self) -> str:
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, indoor={self.indoor})"