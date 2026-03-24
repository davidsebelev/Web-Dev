if __name__ == '__main__':
    students = []
    scores = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        
        scores.append(score)
        
        students.append([name,score])
        
    unique_score = sorted(list(set(scores)))
    
    second = unique_score[1]
    
    students.sort(key = lambda x : x[0])

    for name, score in students:
        if(score == second):
            print(name)