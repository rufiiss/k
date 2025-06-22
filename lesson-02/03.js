let grade

if (score >= 0 && score <= 49) {
  grade = 'F'
} else if (score <= 69) {
  grade = 'D'
} else if (score <= 79) {
  grade = 'C'
} else if (score <= 89) {
  grade = 'B'
} else if (score <= 100) {
  grade = 'A'
} else {
  grade = 'Invalid score'
}
