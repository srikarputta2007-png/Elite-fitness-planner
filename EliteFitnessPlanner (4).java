import java.util.*;

class Workout {
    String name;
    int calories;

    Workout(String name, int calories) {
        this.name = name;
        this.calories = calories;
    }

    void display() {
        System.out.println("Workout: " + name + " | Calories Burn: " + calories);
    }
}

public class EliteFitnessPlanner {

    static ArrayList<Workout> workouts = new ArrayList<>();   // List ADT
    static Stack<Workout> history = new Stack<>();            // Stack
    static Queue<Workout> schedule = new LinkedList<>();      // Queue

    static Scanner sc = new Scanner(System.in);

    // Add workout
    static void addWorkout() {
        System.out.print("Enter workout name: ");
        String name = sc.next();

        System.out.print("Enter calories burned: ");
        int cal = sc.nextInt();

        Workout w = new Workout(name, cal);
        workouts.add(w);
        schedule.add(w);

        System.out.println("Workout Added Successfully!");
    }

    // Display workouts
    static void viewWorkouts() {
        if (workouts.isEmpty()) {
            System.out.println("No workouts available");
            return;
        }

        for (Workout w : workouts) {
            w.display();
        }
    }

    // Complete workout
    static void completeWorkout() {
        if (schedule.isEmpty()) {
            System.out.println("No workouts scheduled.");
            return;
        }

        Workout done = schedule.poll();
        history.push(done);

        System.out.println("Workout Completed:");
        done.display();
    }

    // View workout history (Stack)
    static void viewHistory() {
        if (history.isEmpty()) {
            System.out.println("No completed workouts.");
            return;
        }

        System.out.println("Completed Workouts:");
        for (Workout w : history) {
            w.display();
        }
    }

    // Search workout
    static void searchWorkout() {
        System.out.print("Enter workout name to search: ");
        String key = sc.next();

        for (Workout w : workouts) {
            if (w.name.equalsIgnoreCase(key)) {
                System.out.println("Workout Found:");
                w.display();
                return;
            }
        }

        System.out.println("Workout not found.");
    }

    public static void main(String[] args) {

        while (true) {
            System.out.println("\n--- Elite Fitness Planner ---");
            System.out.println("1. Add Workout");
            System.out.println("2. View Workouts");
            System.out.println("3. Complete Workout");
            System.out.println("4. View Workout History");
            System.out.println("5. Search Workout");
            System.out.println("6. Exit");

            System.out.print("Enter choice: ");
            int ch = sc.nextInt();

            switch (ch) {
                case 1: addWorkout(); break;
                case 2: viewWorkouts(); break;
                case 3: completeWorkout(); break;
                case 4: viewHistory(); break;
                case 5: searchWorkout(); break;
                case 6: System.exit(0);
                default: System.out.println("Invalid choice!");
            }
        }
    }
}