if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
    target_scores = student_marks[query_name]
    

    average = sum(target_scores) / len(target_scores)
    

    print(f"{average:.2f}")