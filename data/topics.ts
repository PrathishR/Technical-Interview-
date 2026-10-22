export type QuestionCategory = 'Very Important' | 'Important' | 'Standard';

export interface Question {
  id: string;
  title: string;
  category: QuestionCategory;
  subtopic: string;
  importance: 'High' | 'Very High' | 'Critical';
  recruiterNote?: string;
  hint: string; // Thought-starter hint ONLY - strictly NO answers or full code spoilers
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  iconName: string;
  colorTheme: {
    accent: string;
    bgBadge: string;
    textBadge: string;
    borderHover: string;
  };
  tags: string[];
  overview: string;
  interviewTips: string[];
  questions: Question[];
}

export const TOPICS: Topic[] = [
  {
    id: "java",
    slug: "java",
    title: "Java (Core Java & OOP)",
    tagline: "Object-oriented foundations, JVM architecture, Collections, Multi-threading, and Coding Scenarios",
    iconName: "Coffee",
    colorTheme: {
      accent: "#ea580c",
      bgBadge: "bg-orange-50 text-orange-700 border-orange-200",
      textBadge: "text-orange-600",
      borderHover: "hover:border-orange-400"
    },
    tags: [
      "OOP Pillars",
      "JVM / JDK / JRE",
      "Collections Framework",
      "Exceptions & Threads",
      "Coding Scenarios"
    ],
    overview: "Java is the foundational language for enterprise campus drives (Amazon, TCS Digital, Infosys DSE/SP, Cognizant GenC, Wipro Turbo). Recruiters rigorously assess deep conceptual clarity across OOP pillars, JVM memory, Collections internals, Exception safety, and live verbal coding logic.",
    interviewTips: [
      "Always illustrate polymorphism and abstraction using a clean real-world domain (e.g., PaymentGateway or NotificationService).",
      "Explain the exact memory implications (Stack vs Heap, SCP, GC roots) when discussing Objects and Strings.",
      "For coding questions, structure your thought process verbally: state the data structure choice, edge cases (null/empty), and time/space complexity before talking syntax."
    ],
    questions: [
      {
        id: "java-q0",
        title: "What is meant by Java?",
        category: "Very Important",
        subtopic: "Language Overview",
        importance: "Critical",
        recruiterNote: "Very Important: Foundational opening question. Formulate a crisp definition of Java's architecture, WORA paradigm, and runtime environment.",
        hint: "Define Java as a high-level, class-based, object-oriented programming language designed for platform independence via Bytecode and JVM. Mention WORA (Write Once, Run Anywhere), robust memory management (Garbage Collection), and strong type-safety."
      },
      {
        id: "java-q1",
        title: "Is Java Platform Independent?",
        category: "Very Important",
        subtopic: "JVM Architecture & Runtime",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Think about the role of Bytecode (.class files) and WORA (Write Once, Run Anywhere). Bytecode is platform-independent; the JVM itself is platform-dependent."
      },
      {
        id: "java-q2",
        title: "What are the top Java Features?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Structure your response around: Simple, Object-Oriented, Platform-Independent, Robust, Secure, Architecture-Neutral, Portable, High-Performance (JIT), Multithreaded, and Distributed."
      },
      {
        id: "java-q3",
        title: "What are the differences between Java and C++?",
        category: "Important",
        subtopic: "Core Java OOP",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Highlight key differences: Pointers (Java has no explicit pointer arithmetic), Multiple Inheritance (C++ supports classes; Java uses interfaces), Memory management (manual delete in C++ vs automatic GC in Java), and Compilation (native machine code vs bytecode)."
      },
      {
        id: "java-q4",
        title: "Difference between JVM, JRE, and JDK.",
        category: "Very Important",
        subtopic: "JVM Architecture & Runtime",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Recall the concentric nesting: JDK = Development Tools (javac) + JRE. JRE = Libraries + JVM. JVM = Execution engine that interprets/JIT-compiles bytecode."
      },
      {
        id: "java-q5",
        title: "What is JVM?",
        category: "Very Important",
        subtopic: "JVM Architecture & Runtime",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Define JVM as the virtual machine specification and runtime instance that executes Java bytecode, managing memory, threads, and garbage collection."
      },
      {
        id: "java-q6",
        title: "What is JIT?",
        category: "Standard",
        subtopic: "JVM Architecture & Runtime",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Explain JIT (Just-In-Time) compiler: translates heavily executed bytecode loops ('hot spots') directly into native machine code at runtime to avoid repeated interpretation."
      },
      {
        id: "java-q7",
        title: "What is a classloader?",
        category: "Standard",
        subtopic: "JVM Architecture & Runtime",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Explain the 3 main ClassLoaders: Bootstrap, Extension (Platform), and Application/System ClassLoader. Mention Delegation-Hierarchy principle and Loading, Linking, Initialization phases."
      },
      {
        id: "java-q8",
        title: "What are Memory storages available with JVM?",
        category: "Important",
        subtopic: "JVM Architecture & Runtime",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Outline the 5 runtime data areas: Method Area / Metaspace, Heap (Objects & arrays), JVM Stack (Frames, local vars), PC Register, and Native Method Stack."
      },
      {
        id: "java-q9",
        title: "Explain public static void main(String args[]) in Java.",
        category: "Important",
        subtopic: "Strings & Memory",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Deconstruct each keyword: `public` (accessible to JVM anywhere), `static` (invocable without instantiating the class), `void` (returns nothing to OS), `String[] args` (command-line arguments)."
      },
      {
        id: "java-q10",
        title: "What will happen if we don't declare the main as static?",
        category: "Standard",
        subtopic: "Core Java OOP",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Explain that the code compiles successfully, but at runtime JVM throws `NoSuchMethodError: main method is not static in class` because it cannot instantiate your class without knowing its constructor."
      },
      {
        id: "java-q11",
        title: "What are Packages in Java?",
        category: "Important",
        subtopic: "Packages & Modularity",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Discuss namespace collision prevention, modular directory mapping, access protection (package-private/default), and the `package` vs `import` statements."
      },
      {
        id: "java-q12",
        title: "Why Packages are used?",
        category: "Important",
        subtopic: "Packages & Modularity",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Discuss namespace collision prevention, modular directory mapping, access protection (package-private/default), and the `package` vs `import` statements."
      },
      {
        id: "java-q13",
        title: "What are the advantages of Packages in Java?",
        category: "Standard",
        subtopic: "Packages & Modularity",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Discuss namespace collision prevention, modular directory mapping, access protection (package-private/default), and the `package` vs `import` statements."
      },
      {
        id: "java-q14",
        title: "How many types of packages are there in Java?",
        category: "Standard",
        subtopic: "Packages & Modularity",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Discuss namespace collision prevention, modular directory mapping, access protection (package-private/default), and the `package` vs `import` statements."
      },
      {
        id: "java-q15",
        title: "Explain different data types in Java.",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Divide into Primitive (byte, short, int, long, float, double, char, boolean) with exact bit sizes and Non-Primitive / Reference types (Classes, Interfaces, Arrays)."
      },
      {
        id: "java-q16",
        title: "When a byte datatype is used?",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "8-bit signed two's complement integer (-128 to 127). Mention memory savings in large byte streams, file I/O, raw binary network transmission, and image processing."
      },
      {
        id: "java-q17",
        title: "Can we declare Pointer in Java?",
        category: "Standard",
        subtopic: "Data Types & Variables",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Explain that Java has reference pointers internally but completely restricts explicit memory addresses, pointer arithmetic, and `&` / `*` syntax for security and memory safety."
      },
      {
        id: "java-q18",
        title: "What is the default value of all datatype in Java?",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Primitives get zero values: byte/short/int/long = 0, float/double = 0.0, char = '\\u0000', boolean = false. Object references default to `null`. Note: only applies to instance/static fields, NOT local variables!"
      },
      {
        id: "java-q19",
        title: "Differentiate between instance and local variables.",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compare scope, lifetime, memory location (Heap vs Stack), and initialization rules: Local variables in methods have NO default value and must be explicitly initialized before use."
      },
      {
        id: "java-q20",
        title: "What are the default values assigned to variables and instances in Java?",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Primitives get zero values: byte/short/int/long = 0, float/double = 0.0, char = '\\u0000', boolean = false. Object references default to `null`. Note: only applies to instance/static fields, NOT local variables!"
      },
      {
        id: "java-q21",
        title: "What is a Class Variable?",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compare scope, lifetime, memory location (Heap vs Stack), and initialization rules: Local variables in methods have NO default value and must be explicitly initialized before use."
      },
      {
        id: "java-q22",
        title: "What is the default value stored in Local Variables?",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compare scope, lifetime, memory location (Heap vs Stack), and initialization rules: Local variables in methods have NO default value and must be explicitly initialized before use."
      },
      {
        id: "java-q23",
        title: "Explain the difference between instance variable and a class variable.",
        category: "Very Important",
        subtopic: "Data Types & Variables",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Compare scope, lifetime, memory location (Heap vs Stack), and initialization rules: Local variables in methods have NO default value and must be explicitly initialized before use."
      },
      {
        id: "java-q24",
        title: "What is a static variable?",
        category: "Very Important",
        subtopic: "Data Types & Variables",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "A variable declared with `static` belongs to the class itself, stored in Metaspace/Class area, shared across all instances, loaded once upon class loading."
      },
      {
        id: "java-q25",
        title: "What is the Wrapper class in Java?",
        category: "Very Important",
        subtopic: "Data Types & Variables",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Object representation of primitives (Integer for int, Double for double). Essential for Collections framework (which only stores Objects), autoboxing/unboxing, and null handling."
      },
      {
        id: "java-q26",
        title: "Why do we need wrapper classes?",
        category: "Important",
        subtopic: "Data Types & Variables",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Object representation of primitives (Integer for int, Double for double). Essential for Collections framework (which only stores Objects), autoboxing/unboxing, and null handling."
      },
      {
        id: "java-q27",
        title: "What are operators?",
        category: "Very Important",
        subtopic: "Operators",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q28",
        title: "How many types of operators are available in Java?",
        category: "Very Important",
        subtopic: "Operators",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q29",
        title: "Explain the difference between >> and >>> operators.",
        category: "Standard",
        subtopic: "Operators",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Signed right shift `>>` preserves the sign bit (fills leftmost with 1 for negatives, 0 for positives). Unsigned right shift `>>>` always fills leftmost bits with 0 regardless of sign."
      },
      {
        id: "java-q30",
        title: "What is dot operator?",
        category: "Important",
        subtopic: "Operators",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Member access operator (`.`) used to access methods, variables, and nested classes of an object reference or static members of a class."
      },
      {
        id: "java-q31",
        title: "What is the relationship between == and equals().",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "`==` checks reference/pointer equality (identical memory address on Heap). `.equals()` checks logical equivalence of state/content when overridden."
      },
      {
        id: "java-q32",
        title: "Why should equals() and hashCode() be overridden consistently?",
        category: "Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Contract rule: if `a.equals(b)` is true, `a.hashCode()` MUST equal `b.hashCode()`. Otherwise, hashing collections (HashSet, HashMap) fail to locate stored keys."
      },
      {
        id: "java-q33",
        title: "What are the purposes of toString() and clone()?",
        category: "Important",
        subtopic: "Strings & Memory",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "`toString()` provides textual representation of the object. `clone()` creates field-by-field copies, requiring `Cloneable` interface (shallow vs deep copy)."
      },
      {
        id: "java-q34",
        title: "What is the use of the final keyword?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Final variable = immutable constant; Final method = prevents overriding; Final class = prevents inheritance (e.g. `java.lang.String`)."
      },
      {
        id: "java-q35",
        title: "What is the difference between this() and super() in Java?",
        category: "Very Important",
        subtopic: "Constructors & Keywords",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "`this()` invokes another constructor in the same class (constructor chaining). `super()` invokes immediate superclass constructor. Both must be the first statement in a constructor."
      },
      {
        id: "java-q36",
        title: "What is String in Java?",
        category: "Very Important",
        subtopic: "Strings & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Cover String Constant Pool (SCP), immutability for security/caching, and mutable alternatives: StringBuffer (synchronized, thread-safe, slightly slower) vs StringBuilder (unsynchronized, faster)."
      },
      {
        id: "java-q37",
        title: "What is Java String Pool?",
        category: "Important",
        subtopic: "Strings & Memory",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Cover String Constant Pool (SCP), immutability for security/caching, and mutable alternatives: StringBuffer (synchronized, thread-safe, slightly slower) vs StringBuilder (unsynchronized, faster)."
      },
      {
        id: "java-q38",
        title: "What are the differences between String and StringBuffer?",
        category: "Very Important",
        subtopic: "Strings & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Cover String Constant Pool (SCP), immutability for security/caching, and mutable alternatives: StringBuffer (synchronized, thread-safe, slightly slower) vs StringBuilder (unsynchronized, faster)."
      },
      {
        id: "java-q39",
        title: "What are the differences between StringBuffer and StringBuilder?",
        category: "Very Important",
        subtopic: "Strings & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Cover String Constant Pool (SCP), immutability for security/caching, and mutable alternatives: StringBuffer (synchronized, thread-safe, slightly slower) vs StringBuilder (unsynchronized, faster)."
      },
      {
        id: "java-q40",
        title: "Why is StringBuffer called mutable?",
        category: "Very Important",
        subtopic: "Strings & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Cover String Constant Pool (SCP), immutability for security/caching, and mutable alternatives: StringBuffer (synchronized, thread-safe, slightly slower) vs StringBuilder (unsynchronized, faster)."
      },
      {
        id: "java-q41",
        title: "Explain String immutability and the difference between String, StringBuilder, and StringBuffer.",
        category: "Very Important",
        subtopic: "Strings & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Cover String Constant Pool (SCP), immutability for security/caching, and mutable alternatives: StringBuffer (synchronized, thread-safe, slightly slower) vs StringBuilder (unsynchronized, faster)."
      },
      {
        id: "java-q42",
        title: "What is the difference between System.out, System.err, and System.in?",
        category: "Important",
        subtopic: "I/O Streams & Formatting",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "`System.in` is an `InputStream` (standard keyboard input); `System.out` is a `PrintStream` (standard output); `System.err` is a `PrintStream` dedicated to error messages (unbuffered, immediately flushed)."
      },
      {
        id: "java-q43",
        title: "What do you understand by an IO stream?",
        category: "Standard",
        subtopic: "I/O Streams & Formatting",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Byte streams (`InputStream` / `OutputStream`) process raw 8-bit bytes (images, binaries). Character streams (`Reader` / `Writer`) process 16-bit Unicode characters with character encoding."
      },
      {
        id: "java-q44",
        title: "What are the super most classes for all the streams?",
        category: "Standard",
        subtopic: "I/O Streams & Formatting",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q45",
        title: "What is the Difference Between the Reader/Writer and InputStream/OutputStream Class Hierarchies?",
        category: "Standard",
        subtopic: "I/O Streams & Formatting",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Byte streams (`InputStream` / `OutputStream`) process raw 8-bit bytes (images, binaries). Character streams (`Reader` / `Writer`) process 16-bit Unicode characters with character encoding."
      },
      {
        id: "java-q46",
        title: "Difference in the use of print, println, and printf.",
        category: "Standard",
        subtopic: "I/O Streams & Formatting",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "`print()` prints text without newline; `println()` appends newline; `printf()` supports C-style format specifiers (`%d`, `%s`, `%.2f`)."
      },
      {
        id: "java-q47",
        title: "What is an array in Java?",
        category: "Very Important",
        subtopic: "Arrays & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q48",
        title: "What are the types of an array?",
        category: "Very Important",
        subtopic: "Arrays & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q49",
        title: "On which memory arrays are created in Java?",
        category: "Important",
        subtopic: "Arrays & Memory",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q50",
        title: "Why does the Java array index start with 0?",
        category: "Standard",
        subtopic: "Arrays & Memory",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q51",
        title: "What is the difference between int array[] and int[] array?",
        category: "Standard",
        subtopic: "Arrays & Memory",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q52",
        title: "How to copy an array in Java?",
        category: "Very Important",
        subtopic: "Arrays & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q53",
        title: "What do you understand by the jagged array?",
        category: "Standard",
        subtopic: "Arrays & Memory",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q54",
        title: "What are the advantages and disadvantages of an array?",
        category: "Very Important",
        subtopic: "Arrays & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q55",
        title: "What is an object-oriented paradigm?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q56",
        title: "What are Classes in Java?",
        category: "Standard",
        subtopic: "Core Java OOP",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q57",
        title: "What is an object?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q58",
        title: "What are the main concepts of OOPs in Java?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q59",
        title: "What is the constructor and its types?",
        category: "Very Important",
        subtopic: "Constructors & Keywords",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Special block invoked during object instantiation. Default constructor (provided by compiler if none declared), no-arg, and parameterized. Does NOT have a return type."
      },
      {
        id: "java-q60",
        title: "What happens if you don't provide a constructor in a class?",
        category: "Standard",
        subtopic: "Constructors & Keywords",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Special block invoked during object instantiation. Default constructor (provided by compiler if none declared), no-arg, and parameterized. Does NOT have a return type."
      },
      {
        id: "java-q61",
        title: "How many types of constructors are used in Java?",
        category: "Very Important",
        subtopic: "Constructors & Keywords",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Special block invoked during object instantiation. Default constructor (provided by compiler if none declared), no-arg, and parameterized. Does NOT have a return type."
      },
      {
        id: "java-q62",
        title: "What is the purpose of a default constructor?",
        category: "Very Important",
        subtopic: "Constructors & Keywords",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Special block invoked during object instantiation. Default constructor (provided by compiler if none declared), no-arg, and parameterized. Does NOT have a return type."
      },
      {
        id: "java-q63",
        title: "What are the differences between the constructors and methods?",
        category: "Very Important",
        subtopic: "Constructors & Keywords",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Special block invoked during object instantiation. Default constructor (provided by compiler if none declared), no-arg, and parameterized. Does NOT have a return type."
      },
      {
        id: "java-q64",
        title: "What is this keyword in Java?",
        category: "Very Important",
        subtopic: "Constructors & Keywords",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q65",
        title: "What is the difference between static (class) method and instance method?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Static methods belong to class, can access only static members directly, called via `ClassName.method()`. Instance methods belong to object instances and access `this` and instance fields."
      },
      {
        id: "java-q66",
        title: "What are Access Specifiers and their types in Java?",
        category: "Very Important",
        subtopic: "Encapsulation & Access",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Private (same class only), Default/Package-private (same package), Protected (same package + subclasses in other packages), Public (everywhere)."
      },
      {
        id: "java-q67",
        title: "What do you mean by data encapsulation and its getter and setter method?",
        category: "Very Important",
        subtopic: "Encapsulation & Access",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Binding data fields with methods acting on them, making fields `private` and exposing public getter/setter methods with validation logic."
      },
      {
        id: "java-q68",
        title: "What are the advantages of Encapsulation in Java?",
        category: "Important",
        subtopic: "Encapsulation & Access",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Binding data fields with methods acting on them, making fields `private` and exposing public getter/setter methods with validation logic."
      },
      {
        id: "java-q69",
        title: "Define Inheritance.",
        category: "Very Important",
        subtopic: "Inheritance & Relationships",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Reusability mechanism (`extends`). Single, multilevel, and hierarchical supported for classes. Multiple inheritance blocked for classes to prevent Diamond Problem ambiguity."
      },
      {
        id: "java-q70",
        title: "What are the different types of inheritance in Java?",
        category: "Very Important",
        subtopic: "Inheritance & Relationships",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Reusability mechanism (`extends`). Single, multilevel, and hierarchical supported for classes. Multiple inheritance blocked for classes to prevent Diamond Problem ambiguity."
      },
      {
        id: "java-q71",
        title: "What is multiple inheritance? Is it supported by Java?",
        category: "Very Important",
        subtopic: "Inheritance & Relationships",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Reusability mechanism (`extends`). Single, multilevel, and hierarchical supported for classes. Multiple inheritance blocked for classes to prevent Diamond Problem ambiguity."
      },
      {
        id: "java-q72",
        title: "How is inheritance in C++ different from Java?",
        category: "Important",
        subtopic: "Inheritance & Relationships",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Reusability mechanism (`extends`). Single, multilevel, and hierarchical supported for classes. Multiple inheritance blocked for classes to prevent Diamond Problem ambiguity."
      },
      {
        id: "java-q73",
        title: "What is the ‘IS-A ‘ relationship in OOPs Java?",
        category: "Important",
        subtopic: "Inheritance & Relationships",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q74",
        title: "What is an association?",
        category: "Important",
        subtopic: "Inheritance & Relationships",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Association = relationship between objects. Aggregation = weak HAS-A (independent lifecycles, e.g. Department and Teacher). Composition = strong HAS-A (dependent lifecycle, e.g. House and Room)."
      },
      {
        id: "java-q75",
        title: "What do you mean by aggregation?",
        category: "Important",
        subtopic: "Inheritance & Relationships",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Association = relationship between objects. Aggregation = weak HAS-A (independent lifecycles, e.g. Department and Teacher). Composition = strong HAS-A (dependent lifecycle, e.g. House and Room)."
      },
      {
        id: "java-q76",
        title: "What is the composition of Java?",
        category: "Important",
        subtopic: "Inheritance & Relationships",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Association = relationship between objects. Aggregation = weak HAS-A (independent lifecycles, e.g. Department and Teacher). Composition = strong HAS-A (dependent lifecycle, e.g. House and Room)."
      },
      {
        id: "java-q77",
        title: "State the difference between Composition and Aggregation.",
        category: "Important",
        subtopic: "Inheritance & Relationships",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Association = relationship between objects. Aggregation = weak HAS-A (independent lifecycles, e.g. Department and Teacher). Composition = strong HAS-A (dependent lifecycle, e.g. House and Room)."
      },
      {
        id: "java-q78",
        title: "What is Polymorphism?",
        category: "Very Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q79",
        title: "What is runtime polymorphism or dynamic method dispatch?",
        category: "Very Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q80",
        title: "What is method overloading?",
        category: "Very Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q81",
        title: "What is method overriding?",
        category: "Very Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q82",
        title: "What are method overloading and method overriding?",
        category: "Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q83",
        title: "Can we override the static method?",
        category: "Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q84",
        title: "Can we override the overloaded method?",
        category: "Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q85",
        title: "Can we overload the main() method?",
        category: "Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q86",
        title: "Can we override the private methods?",
        category: "Important",
        subtopic: "Polymorphism & Dispatch",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Compile-time (Overloading: same name, different signatures) vs Runtime (Overriding: subclass replaces parent method with same signature, dispatched via dynamic binding)."
      },
      {
        id: "java-q87",
        title: "What is Abstraction?",
        category: "Very Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q88",
        title: "What is Abstract class?",
        category: "Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q89",
        title: "When Abstract methods are used?",
        category: "Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q90",
        title: "What is an Interface?",
        category: "Very Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q91",
        title: "Give some features of the Interface.",
        category: "Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q92",
        title: "What are the differences between abstract class and interface?",
        category: "Very Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q93",
        title: "Write a Java program that demonstrates encapsulation, inheritance, abstraction, and polymorphism in one realistic scenario.",
        category: "Very Important",
        subtopic: "Encapsulation & Access",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Binding data fields with methods acting on them, making fields `private` and exposing public getter/setter methods with validation logic."
      },
      {
        id: "java-q94",
        title: "What is Exception Handling?",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Throwable hierarchy: `Error` (serious system issues like OutOfMemoryError) vs `Exception`. Checked (checked at compile time, e.g. IOException) vs Unchecked (`RuntimeException`, e.g. NullPointerException)."
      },
      {
        id: "java-q95",
        title: "How many types of exceptions can occur in a Java program?",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Throwable hierarchy: `Error` (serious system issues like OutOfMemoryError) vs `Exception`. Checked (checked at compile time, e.g. IOException) vs Unchecked (`RuntimeException`, e.g. NullPointerException)."
      },
      {
        id: "java-q96",
        title: "Explain the hierarchy of Java Exception classes.",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q97",
        title: "Difference between an Error and an Exception.",
        category: "Standard",
        subtopic: "Exception Handling",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Throwable hierarchy: `Error` (serious system issues like OutOfMemoryError) vs `Exception`. Checked (checked at compile time, e.g. IOException) vs Unchecked (`RuntimeException`, e.g. NullPointerException)."
      },
      {
        id: "java-q98",
        title: "Explain Runtime Exceptions.",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Throwable hierarchy: `Error` (serious system issues like OutOfMemoryError) vs `Exception`. Checked (checked at compile time, e.g. IOException) vs Unchecked (`RuntimeException`, e.g. NullPointerException)."
      },
      {
        id: "java-q99",
        title: "What is NullPointerException?",
        category: "Very Important",
        subtopic: "Data Types & Variables",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Throwable hierarchy: `Error` (serious system issues like OutOfMemoryError) vs `Exception`. Checked (checked at compile time, e.g. IOException) vs Unchecked (`RuntimeException`, e.g. NullPointerException)."
      },
      {
        id: "java-q100",
        title: "What is the difference between checked and unchecked exceptions?",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Throwable hierarchy: `Error` (serious system issues like OutOfMemoryError) vs `Exception`. Checked (checked at compile time, e.g. IOException) vs Unchecked (`RuntimeException`, e.g. NullPointerException)."
      },
      {
        id: "java-q101",
        title: "Explain try, catch, finally, throw, and throws.",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "`try` guards code, `catch` handles error, `finally` executes guaranteed cleanup. `try-with-resources` auto-closes `AutoCloseable` streams without manual finally blocks."
      },
      {
        id: "java-q102",
        title: "What is try-with-resources?",
        category: "Very Important",
        subtopic: "Exception Handling",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "`try` guards code, `catch` handles error, `finally` executes guaranteed cleanup. `try-with-resources` auto-closes `AutoCloseable` streams without manual finally blocks."
      },
      {
        id: "java-q103",
        title: "What purpose do the keywords final, finally, and finalize fulfill?",
        category: "Very Important",
        subtopic: "Core Java OOP",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "`try` guards code, `catch` handles error, `finally` executes guaranteed cleanup. `try-with-resources` auto-closes `AutoCloseable` streams without manual finally blocks."
      },
      {
        id: "java-q104",
        title: "What is Collection Framework in Java?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Root interface `Collection` vs utility class `Collections`. Key hierarchies: `List` (ordered, duplicates allowed), `Set` (unique elements), `Queue` (FIFO/Priority), and `Map` (Key-Value pairs)."
      },
      {
        id: "java-q105",
        title: "Explain various interfaces used in the Collection framework",
        category: "Very Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q106",
        title: "What is the difference between Collection and Collections?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Root interface `Collection` vs utility class `Collections`. Key hierarchies: `List` (ordered, duplicates allowed), `Set` (unique elements), `Queue` (FIFO/Priority), and `Map` (Key-Value pairs)."
      },
      {
        id: "java-q107",
        title: "What is the difference between Array and Collection in Java?",
        category: "Very Important",
        subtopic: "Arrays & Memory",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q108",
        title: "Differentiate between Array and ArrayList in Java.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q109",
        title: "Explain the method to convert ArrayList to Array and Array to ArrayList.",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q110",
        title: "What is a Vector in Java?",
        category: "Important",
        subtopic: "Core Java OOP",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "ArrayList (dynamic contiguous array, O(1) random access, O(n) arbitrary insert/delete) vs LinkedList (doubly linked nodes, O(1) insert/remove at pointers, O(n) access) vs Vector (synchronized legacy ArrayList)."
      },
      {
        id: "java-q111",
        title: "Explain the LinkedList class.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "ArrayList (dynamic contiguous array, O(1) random access, O(n) arbitrary insert/delete) vs LinkedList (doubly linked nodes, O(1) insert/remove at pointers, O(n) access) vs Vector (synchronized legacy ArrayList)."
      },
      {
        id: "java-q112",
        title: "Difference between ArrayList and LinkedList.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q113",
        title: "Differentiate between ArrayList and Vector in Java.",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q114",
        title: "What is Set in the Java Collections framework and list down its various implementations?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Root interface `Collection` vs utility class `Collections`. Key hierarchies: `List` (ordered, duplicates allowed), `Set` (unique elements), `Queue` (FIFO/Priority), and `Map` (Key-Value pairs)."
      },
      {
        id: "java-q115",
        title: "What is the HashSet class in Java and how does it store elements?",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "HashSet (unordered, backed by HashMap, O(1)) vs LinkedHashSet (insertion-ordered, doubly linked list) vs TreeSet (sorted order, backed by Red-Black tree, O(log n))."
      },
      {
        id: "java-q116",
        title: "What is LinkedHashSet in Java Collections Framework?",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Root interface `Collection` vs utility class `Collections`. Key hierarchies: `List` (ordered, duplicates allowed), `Set` (unique elements), `Queue` (FIFO/Priority), and `Map` (Key-Value pairs)."
      },
      {
        id: "java-q117",
        title: "Differentiate between HashSet and TreeSet.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "HashSet (unordered, backed by HashMap, O(1)) vs LinkedHashSet (insertion-ordered, doubly linked list) vs TreeSet (sorted order, backed by Red-Black tree, O(log n))."
      },
      {
        id: "java-q118",
        title: "What is a Map interface in Java?",
        category: "Very Important",
        subtopic: "Abstraction & Interfaces",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Abstract class (can have instance state, constructors, and partial method implementations) vs Interface (contract of behavior, multiple inheritance of type, default/static methods in Java 8+)."
      },
      {
        id: "java-q119",
        title: "Differentiate between HashMap and TreeMap.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "HashMap (unsorted, allows 1 null key, unsynchronized) vs TreeMap (sorted keys, Red-Black tree, O(log n)) vs Hashtable (legacy synchronized, no null keys)."
      },
      {
        id: "java-q120",
        title: "Explain Treemap in Java",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "HashMap (unsorted, allows 1 null key, unsynchronized) vs TreeMap (sorted keys, Red-Black tree, O(log n)) vs Hashtable (legacy synchronized, no null keys)."
      },
      {
        id: "java-q121",
        title: "Differentiate between HashMap and HashTable.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "HashMap (unsorted, allows 1 null key, unsynchronized) vs TreeMap (sorted keys, Red-Black tree, O(log n)) vs Hashtable (legacy synchronized, no null keys)."
      },
      {
        id: "java-q122",
        title: "What is a priority queue in Java?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q123",
        title: "What is the Stack class in Java and what are the various methods provided by it?",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q124",
        title: "What is BlockingQueue?",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q125",
        title: "What is EnumSet?",
        category: "Standard",
        subtopic: "Collections Framework",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q126",
        title: "What is an Iterator?",
        category: "Important",
        subtopic: "Collections Framework",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Iterator (forward-only, supports `.remove()`, fail-fast) vs ListIterator (bidirectional, add/set/index, exclusive to Lists) vs Iterable (interface providing `iterator()`)."
      },
      {
        id: "java-q127",
        title: "What is an enumeration?",
        category: "Standard",
        subtopic: "Core Java OOP",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q128",
        title: "What is the difference between Iterator and Enumeration?",
        category: "Standard",
        subtopic: "Collections Framework",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Iterator (forward-only, supports `.remove()`, fail-fast) vs ListIterator (bidirectional, add/set/index, exclusive to Lists) vs Iterable (interface providing `iterator()`)."
      },
      {
        id: "java-q129",
        title: "What is the difference between Iterator and ListIterator?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Iterator (forward-only, supports `.remove()`, fail-fast) vs ListIterator (bidirectional, add/set/index, exclusive to Lists) vs Iterable (interface providing `iterator()`)."
      },
      {
        id: "java-q130",
        title: "Differentiate between Iterable and Iterator.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Iterator (forward-only, supports `.remove()`, fail-fast) vs ListIterator (bidirectional, add/set/index, exclusive to Lists) vs Iterable (interface providing `iterator()`)."
      },
      {
        id: "java-q131",
        title: "What is the difference between Comparable and Comparator?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Comparable (natural ordering inside domain class via `compareTo`) vs Comparator (multiple custom external ordering strategies via `compare`)."
      },
      {
        id: "java-q132",
        title: "What is the difference between Set and Map?",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q133",
        title: "Differentiate between List and Set.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q134",
        title: "Differentiate between List and Map.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q135",
        title: "Differentiate between Queue and Stack.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q136",
        title: "Differentiate between PriorityQueue and TreeSet.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "HashSet (unordered, backed by HashMap, O(1)) vs LinkedHashSet (insertion-ordered, doubly linked list) vs TreeSet (sorted order, backed by Red-Black tree, O(log n))."
      },
      {
        id: "java-q137",
        title: "Differentiate between the Singly Linked List and Doubly Linked List.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q138",
        title: "Differentiate between Queue and Deque.",
        category: "Very Important",
        subtopic: "Collections Framework",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Formulate your answer starting from the core definition, explain the underlying JVM memory behavior, and give a concise real-world software design analogy."
      },
      {
        id: "java-q139",
        title: "Why can’t we create a generic array?",
        category: "Important",
        subtopic: "Arrays & Memory",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Fixed-size, contiguous memory structure storing elements of homogenous type on the Heap. Explain index 0 as offset calculation: `Address = Base + (Index * Size)`."
      },
      {
        id: "java-q140",
        title: "Write a Java program that groups employees by department using a Map.",
        category: "Standard",
        subtopic: "Collections Framework",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Structure your verbal explanation: state chosen collection/data structure, outline loops or Streams API (`Collectors.groupingBy`, `LinkedHashSet`, or custom comparator), and specify time complexity."
      },
      {
        id: "java-q141",
        title: "Write a Java program to remove duplicates from a list while preserving insertion order.",
        category: "Standard",
        subtopic: "Collections Framework",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Structure your verbal explanation: state chosen collection/data structure, outline loops or Streams API (`Collectors.groupingBy`, `LinkedHashSet`, or custom comparator), and specify time complexity."
      },
      {
        id: "java-q142",
        title: "Write a Java program to sort custom objects by salary and then by name.",
        category: "Standard",
        subtopic: "Live Coding Scenarios",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Paradigm focusing on real-world modeling via Objects (state + behavior) and Classes (blueprints). Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "java-q143",
        title: "What is multitasking?",
        category: "Standard",
        subtopic: "Multithreading & Concurrency",
        importance: "High",
        recruiterNote: "Standard core Java fundamental check for junior software engineers.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      },
      {
        id: "java-q144",
        title: "What do you mean by a Multithreaded program?",
        category: "Very Important",
        subtopic: "Multithreading & Concurrency",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      },
      {
        id: "java-q145",
        title: "What is a thread?",
        category: "Very Important",
        subtopic: "Multithreading & Concurrency",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      },
      {
        id: "java-q146",
        title: "Differentiate between process and thread?",
        category: "Important",
        subtopic: "Multithreading & Concurrency",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      },
      {
        id: "java-q147",
        title: "Describe the life cycle of the thread?",
        category: "Very Important",
        subtopic: "Multithreading & Concurrency",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      },
      {
        id: "java-q148",
        title: "Explain the sleep() method under the Thread class.",
        category: "Important",
        subtopic: "Multithreading & Concurrency",
        importance: "Very High",
        recruiterNote: "Important: Common interview question tested in technical rounds.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      },
      {
        id: "java-q149",
        title: "What's the difference between the methods sleep() and wait()?",
        category: "Very Important",
        subtopic: "Multithreading & Concurrency",
        importance: "Critical",
        recruiterNote: "Very Important: Essential campus placement question frequently asked in technical interviews.",
        hint: "Thread states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED). `Thread.sleep()` pauses current thread holding locks; `Object.wait()` releases monitor lock until notified."
      }
    ]
  },
  {
    id: "sql",
    slug: "sql",
    title: "SQL & Databases",
    tagline: "Relational queries, ACID properties, indexing, normalization, and complex join outputs",
    iconName: "Database",
    colorTheme: {
      accent: "#10b981",
      bgBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      textBadge: "text-emerald-600",
      borderHover: "hover:border-emerald-400"
    },
    tags: [
      "DDL / DML",
      "Keys & Constraints",
      "Joins Output Tracing",
      "Subqueries & CTEs",
      "Normalization",
      "ACID Transactions"
    ],
    overview: "Data persistence and SQL mastery are tested in almost every campus interview round. This track takes you from database fundamentals to advanced correlated subqueries, query optimizations, and join table output tracing using the sample EMPLOYEE and DEPARTMENT tables.",
    interviewTips: [
      "Always clarify table structures and NULL handling before writing complex joins on whiteboard or code editor.",
      "Explain the query execution pipeline: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
      "For join tracing questions, practice matching the supplied EMPLOYEE & DEPARTMENT rows step-by-step."
    ],
    questions: [
      {
        id: "sql-q1",
        title: "What is a database?",
        category: "Important",
        subtopic: "Database & SQL Fundamentals",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q2",
        title: "What is a DBMS? How is an RDBMS different from a DBMS?",
        category: "Very Important",
        subtopic: "Database & SQL Fundamentals",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Focus on relational integrity: tables/relations, foreign key constraints, normalization, and ACID transaction support compared to simple flat-file DBMS systems."
      },
      {
        id: "sql-q3",
        title: "What is SQL?",
        category: "Very Important",
        subtopic: "Database & SQL Fundamentals",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q4",
        title: "What is the difference between SQL and MySQL?",
        category: "Important",
        subtopic: "Database & SQL Fundamentals",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "SQL is the standard language specification; MySQL is an actual Relational Database Management System (RDBMS) product that implements SQL."
      },
      {
        id: "sql-q5",
        title: "What are the types of SQL commands?",
        category: "Very Important",
        subtopic: "Database & SQL Fundamentals",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Break into: DDL (Data Definition: CREATE, ALTER, DROP, TRUNCATE), DML (Data Manipulation: SELECT, INSERT, UPDATE, DELETE), DCL (Data Control: GRANT, REVOKE), TCL (Transaction Control: COMMIT, ROLLBACK)."
      },
      {
        id: "sql-q6",
        title: "What is the difference between CHAR and VARCHAR?",
        category: "Important",
        subtopic: "Database & SQL Fundamentals",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "Fixed-length memory allocation with space padding (faster for fixed strings like country codes) vs variable-length dynamic allocation saving disk space."
      },
      {
        id: "sql-q7",
        title: "What is SELECT?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q8",
        title: "What is SELECT DISTINCT?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q9",
        title: "What is INSERT INTO?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q10",
        title: "What is UPDATE?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q11",
        title: "What is DELETE?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q12",
        title: "What is DROP?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q13",
        title: "What is SELECT TOP?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q14",
        title: "What is LIMIT in SQL?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q15",
        title: "What is a NULL value?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q16",
        title: "What is the difference between WHERE and HAVING?",
        category: "Very Important",
        subtopic: "Basic SQL Commands & Operators",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Crucial interview distinction: WHERE filters rows before aggregation; HAVING filters groups after GROUP BY aggregation."
      },
      {
        id: "sql-q17",
        title: "What are the AND, OR, and NOT operators?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q18",
        title: "What are the IN and BETWEEN operators?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q19",
        title: "What is the LIKE operator?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q20",
        title: "What are aliases in SQL?",
        category: "Standard",
        subtopic: "Basic SQL Commands & Operators",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q21",
        title: "What is AUTO INCREMENT?",
        category: "Very Important",
        subtopic: "Basic SQL Commands & Operators",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Automatically generates a unique numeric sequence value for new rows, typically used for synthetic primary key columns."
      },
      {
        id: "sql-q22",
        title: "What is a primary key?",
        category: "Very Important",
        subtopic: "Keys & Constraints",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Uniquely identifies each record in a table. Enforces NOT NULL + UNIQUE. A table can only possess one primary key."
      },
      {
        id: "sql-q23",
        title: "What is a foreign key?",
        category: "Very Important",
        subtopic: "Keys & Constraints",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Referential integrity constraint linking a column to the primary key of another table, preventing orphaned records."
      },
      {
        id: "sql-q24",
        title: "What is a candidate key?",
        category: "Important",
        subtopic: "Keys & Constraints",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "Super key = set of attributes that uniquely identifies a row; Candidate key = minimal super key with no redundant attributes; Composite key = primary key formed by combining 2 or more columns."
      },
      {
        id: "sql-q25",
        title: "What is a super key?",
        category: "Important",
        subtopic: "Keys & Constraints",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "Super key = set of attributes that uniquely identifies a row; Candidate key = minimal super key with no redundant attributes; Composite key = primary key formed by combining 2 or more columns."
      },
      {
        id: "sql-q26",
        title: "What is a unique key?",
        category: "Very Important",
        subtopic: "Keys & Constraints",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q27",
        title: "What is a composite key?",
        category: "Standard",
        subtopic: "Keys & Constraints",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "Super key = set of attributes that uniquely identifies a row; Candidate key = minimal super key with no redundant attributes; Composite key = primary key formed by combining 2 or more columns."
      },
      {
        id: "sql-q28",
        title: "What is the NOT NULL constraint?",
        category: "Very Important",
        subtopic: "Keys & Constraints",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q29",
        title: "What is the DEFAULT constraint?",
        category: "Very Important",
        subtopic: "Keys & Constraints",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q30",
        title: "What is the difference between GROUP BY and ORDER BY?",
        category: "Very Important",
        subtopic: "Filtering, Sorting & Aggregation",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "GROUP BY partitions rows into summary buckets for aggregate functions (SUM, AVG); ORDER BY sorts the final projected result set (ASC/DESC)."
      },
      {
        id: "sql-q31",
        title: "What are aggregate functions (MIN(), MAX(), SUM(), AVG(), and COUNT())?",
        category: "Standard",
        subtopic: "Filtering, Sorting & Aggregation",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q32",
        title: "What are joins in SQL?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q33",
        title: "What is an INNER JOIN?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Returns only rows where the join condition evaluates to TRUE in both participating tables."
      },
      {
        id: "sql-q34",
        title: "What is an OUTER JOIN?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q35",
        title: "What is a LEFT JOIN?",
        category: "Standard",
        subtopic: "Joins & Set Operations",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q36",
        title: "What is a RIGHT JOIN?",
        category: "Standard",
        subtopic: "Joins & Set Operations",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q37",
        title: "What is a FULL OUTER JOIN?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q38",
        title: "What is a SELF JOIN?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Joining a table to itself using distinct table aliases (e.g. `emp e JOIN emp m ON e.manager_id = m.emp_id`)."
      },
      {
        id: "sql-q39",
        title: "What is a CROSS JOIN?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Cartesian product producing M * N rows where every row in the first table pairs with every row in the second table."
      },
      {
        id: "sql-q40",
        title: "What is the difference between UNION and UNION ALL?",
        category: "Very Important",
        subtopic: "Joins & Set Operations",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "UNION merges row sets and deduplicates records (requires sorting/overhead); UNION ALL merges all rows without deduplication (faster)."
      },
      {
        id: "sql-q41",
        title: "What is a subquery?",
        category: "Very Important",
        subtopic: "Subqueries & Advanced Structures",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q42",
        title: "What is a nested query?",
        category: "Very Important",
        subtopic: "Subqueries & Advanced Structures",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q43",
        title: "What is the difference between a subquery and a correlated subquery?",
        category: "Important",
        subtopic: "Subqueries & Advanced Structures",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "An inner subquery that references columns from the outer query for each processed row, evaluating once per outer row."
      },
      {
        id: "sql-q44",
        title: "What is a Common Table Expression (CTE), and how is it different from a subquery?",
        category: "Important",
        subtopic: "Subqueries & Advanced Structures",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "Defined with the `WITH` clause; creates a temporary named result set improving readability and supporting recursive operations compared to nested subqueries."
      },
      {
        id: "sql-q45",
        title: "What is the RANK() function?",
        category: "Very Important",
        subtopic: "Subqueries & Advanced Structures",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Window function assigning ranking values: handles ties by assigning same rank and leaving gaps (e.g., 1, 2, 2, 4), unlike `DENSE_RANK()` which leaves no gaps."
      },
      {
        id: "sql-q46",
        title: "What is normalization?",
        category: "Very Important",
        subtopic: "Database Design & Performance",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Process of structuring tables to eliminate redundancy. 1NF: atomic values; 2NF: 1NF + no partial functional dependency; 3NF: 2NF + no transitive dependency; BCNF: every determinant is a candidate key."
      },
      {
        id: "sql-q47",
        title: "Explain 1NF, 2NF, 3NF, and BCNF with examples.",
        category: "Very Important",
        subtopic: "Database Design & Performance",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Process of structuring tables to eliminate redundancy. 1NF: atomic values; 2NF: 1NF + no partial functional dependency; 3NF: 2NF + no transitive dependency; BCNF: every determinant is a candidate key."
      },
      {
        id: "sql-q48",
        title: "What is denormalization, and when would you use it?",
        category: "Standard",
        subtopic: "Database Design & Performance",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "Process of structuring tables to eliminate redundancy. 1NF: atomic values; 2NF: 1NF + no partial functional dependency; 3NF: 2NF + no transitive dependency; BCNF: every determinant is a candidate key."
      },
      {
        id: "sql-q49",
        title: "What is an index? Explain clustered and non-clustered indexes, where applicable.",
        category: "Standard",
        subtopic: "Database Design & Performance",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "Clustered index physically sorts the table rows on disk (only one allowed per table); Non-clustered index creates a separate B-tree pointing to disk row locations."
      },
      {
        id: "sql-q50",
        title: "What are views, stored procedures, and triggers?",
        category: "Standard",
        subtopic: "Database Design & Performance",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q51",
        title: "What are the ACID properties of a transaction?",
        category: "Very Important",
        subtopic: "Transactions & Data Integrity",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Atomicity (all-or-nothing), Consistency (integrity constraints), Isolation (concurrency control), Durability (persisted on disk across crashes)."
      },
      {
        id: "sql-q52",
        title: "What are COMMIT, ROLLBACK, and SAVEPOINT?",
        category: "Very Important",
        subtopic: "Transactions & Data Integrity",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q53",
        title: "What is the difference between DELETE, TRUNCATE, and DROP?",
        category: "Very Important",
        subtopic: "Transactions & Data Integrity",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "DELETE: DML, row-by-row, logged, supports WHERE, triggers fire; TRUNCATE: DDL, deallocates pages, faster, no WHERE; DROP: DDL, destroys data and schema completely."
      },
      {
        id: "sql-q54",
        title: "What are database transactions and isolation levels?",
        category: "Standard",
        subtopic: "Transactions & Data Integrity",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q55",
        title: "What are dirty reads, non-repeatable reads, and phantom reads?",
        category: "Standard",
        subtopic: "Transactions & Data Integrity",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "Dirty read: reading uncommitted changes; Non-repeatable read: reading different data values on re-read due to update; Phantom read: new rows appear in re-read due to insert."
      },
      {
        id: "sql-q56",
        title: "Write a query to display the first 5 records in a table.",
        category: "Important",
        subtopic: "SQL Query Practice",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q57",
        title: "Write a query to find the first 3 highest salaries.",
        category: "Important",
        subtopic: "SQL Query Practice",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q58",
        title: "Write a query to find the 2nd highest salary.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Use window functions: `DENSE_RANK() OVER (ORDER BY salary DESC)` inside a CTE or subquery, or `LIMIT 1 OFFSET (N-1)`."
      },
      {
        id: "sql-q59",
        title: "Write a query to find the Nth highest salary.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Use window functions: `DENSE_RANK() OVER (ORDER BY salary DESC)` inside a CTE or subquery, or `LIMIT 1 OFFSET (N-1)`."
      },
      {
        id: "sql-q60",
        title: "Write a query to find the highest salary in each department.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q61",
        title: "Write a query to find the highest salary without using MAX().",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q62",
        title: "Write a query to find the department with the highest employee count.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q63",
        title: "Write a query to find duplicate email addresses in the employee table.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "To find duplicates: `GROUP BY email HAVING COUNT(*) > 1`. To delete: CTE with `ROW_NUMBER() OVER (PARTITION BY email ORDER BY id)` deleting where `row_num > 1`."
      },
      {
        id: "sql-q64",
        title: "Write a query to delete duplicate records from a table.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "To find duplicates: `GROUP BY email HAVING COUNT(*) > 1`. To delete: CTE with `ROW_NUMBER() OVER (PARTITION BY email ORDER BY id)` deleting where `row_num > 1`."
      },
      {
        id: "sql-q65",
        title: "Write a query to find employees who joined in the last 3 months.",
        category: "Very Important",
        subtopic: "SQL Query Practice",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds.",
        hint: "Use date functions: `WHERE join_date >= CURDATE() - INTERVAL 3 MONTH` (or `DATEADD` in SQL Server)."
      },
      {
        id: "sql-q66",
        title: "Write a query to find first names starting with 'A'.",
        category: "Standard",
        subtopic: "SQL Query Practice",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q67",
        title: "Write a query to find the last 3 records from a table.",
        category: "Standard",
        subtopic: "SQL Query Practice",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q68",
        title: "Write a query to swap the values of two columns in SQL.",
        category: "Standard",
        subtopic: "SQL Query Practice",
        importance: "High",
        recruiterNote: "Standard database fundamental check.",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q69",
        title: "Write an INNER JOIN between EMPLOYEE and DEPARTMENT on dept_id. Show the complete output.",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Returns only rows where the join condition evaluates to TRUE in both participating tables."
      },
      {
        id: "sql-q70",
        title: "Write a LEFT JOIN between EMPLOYEE and DEPARTMENT. Which employees appear without a matching department?",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q71",
        title: "Write a RIGHT JOIN between EMPLOYEE and DEPARTMENT. Which departments have no matching employees?",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q72",
        title: "Write a FULL OUTER JOIN between EMPLOYEE and DEPARTMENT. Show all matched and unmatched rows.",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Preserves unmatched rows from the left, right, or both tables, populating missing columns with NULL values."
      },
      {
        id: "sql-q73",
        title: "Write a CROSS JOIN between EMPLOYEE and DEPARTMENT. How many rows will the result contain?",
        category: "Standard",
        subtopic: "Join Output & Table Questions",
        importance: "High",
        recruiterNote: "Standard database fundamental check. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Cartesian product producing M * N rows where every row in the first table pairs with every row in the second table."
      },
      {
        id: "sql-q74",
        title: "Write a SELF JOIN on EMPLOYEE to display each employee and their manager's name.",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Joining a table to itself using distinct table aliases (e.g. `emp e JOIN emp m ON e.manager_id = m.emp_id`)."
      },
      {
        id: "sql-q75",
        title: "Write a LEFT SELF JOIN to display every employee, including employees who have no manager.",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Joining a table to itself using distinct table aliases (e.g. `emp e JOIN emp m ON e.manager_id = m.emp_id`)."
      },
      {
        id: "sql-q76",
        title: "Write an INNER JOIN using table aliases. How do aliases improve readability?",
        category: "Important",
        subtopic: "Join Output & Table Questions",
        importance: "Very High",
        recruiterNote: "Important: Standard SQL evaluation question tested in technical interviews. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Returns only rows where the join condition evaluates to TRUE in both participating tables."
      },
      {
        id: "sql-q77",
        title: "Write a join query that returns only employees whose department exists in DEPARTMENT and whose manager is also present in EMPLOYEE.",
        category: "Standard",
        subtopic: "Join Output & Table Questions",
        importance: "High",
        recruiterNote: "Standard database fundamental check. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "State the required clauses in order of execution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY."
      },
      {
        id: "sql-q78",
        title: "Compare INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN using the supplied tables. Write the output of each query.",
        category: "Very Important",
        subtopic: "Join Output & Table Questions",
        importance: "Critical",
        recruiterNote: "Very Important: High-frequency database interview question across campus rounds. Use the EMPLOYEE & DEPARTMENT sample tables provided in the topic header to trace row matches!",
        hint: "Returns only rows where the join condition evaluates to TRUE in both participating tables."
      }
    ]
  },
  {
    id: "project",
    slug: "project",
    title: "Project Interview Questions — Zero to Hero",
    tagline: "End-to-end project defense: architecture, tech stack justification, deep dive workflows, and problem solving",
    iconName: "FolderKanban",
    colorTheme: {
      accent: "#6366f1",
      bgBadge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      textBadge: "text-indigo-600",
      borderHover: "hover:border-indigo-400"
    },
    tags: [
      "Project Architecture",
      "STAR Method",
      "Tech Stack Trade-offs",
      "Bug Resolution",
      "Security & Scaling"
    ],
    overview: "Technical Round 2 and Managerial interviews for freshers revolve around your major academic or personal projects. Interviewers don't expect you to build Google, but they rigorously evaluate whether you actually built what's on your resume, understand your architectural choices, and can explain trade-offs and bugs with maturity.",
    interviewTips: [
      "Use the STAR method (Situation, Task, Action, Result) to keep your project pitch concise and impact-driven.",
      "Be completely honest about your individual contribution versus your team members' roles.",
      "Prepare one difficult bug or production challenge that you personally diagnosed and resolved from scratch."
    ],
    questions: [
      {
        id: "proj-q1",
        title: "Explain your project, including the problem, target users, solution, technology stack, and your contribution.",
        category: "Very Important",
        subtopic: "Project Fundamentals",
        importance: "Critical",
        recruiterNote: "Very Important: Primary question asked in 95%+ of fresher Technical Round 2 discussions.",
        hint: "Use the STAR approach: Situation (business context), Task (what needed solving), Action (your architecture & coding contribution), Result (impact, metrics, active users). Keep it under 2 minutes."
      },
      {
        id: "proj-q2",
        title: "Why did you choose this project, and what business problem does it solve?",
        category: "Important",
        subtopic: "Project Fundamentals",
        importance: "Very High",
        recruiterNote: "Important: Evaluates your architectural decisions, trade-offs, and team collaboration.",
        hint: "Focus on the end-user pain point. Why couldn't existing software solve it? What manual process did your software automate or optimize?"
      },
      {
        id: "proj-q3",
        title: "Which programming language, frameworks, database, and other technologies did you use, and why did you choose them?",
        category: "Very Important",
        subtopic: "Technology Stack",
        importance: "Critical",
        recruiterNote: "Very Important: Primary question asked in 95%+ of fresher Technical Round 2 discussions.",
        hint: "Never say 'because I only knew it'. Frame it around trade-offs: developer productivity, rich ecosystem, schema flexibility (SQL vs NoSQL), or API performance."
      },
      {
        id: "proj-q4",
        title: "Why did you choose this particular technology stack for the frontend and backend?",
        category: "Important",
        subtopic: "Technology Stack",
        importance: "Very High",
        recruiterNote: "Important: Evaluates your architectural decisions, trade-offs, and team collaboration.",
        hint: "Never say 'because I only knew it'. Frame it around trade-offs: developer productivity, rich ecosystem, schema flexibility (SQL vs NoSQL), or API performance."
      },
      {
        id: "proj-q5",
        title: "Draw and explain the high-level architecture of your project.",
        category: "Important",
        subtopic: "Architecture & Request Flow",
        importance: "Very High",
        recruiterNote: "Important: Evaluates your architectural decisions, trade-offs, and team collaboration.",
        hint: "Structure into layers: Client (React/Next/Mobile) -> Gateway/Reverse Proxy -> Application Controller -> Business Service -> Data Access Layer -> Database / Cache. Trace HTTP headers, DTOs, and serialization."
      },
      {
        id: "proj-q6",
        title: "Explain the responsibilities of each layer or service in your architecture.",
        category: "Standard",
        subtopic: "Architecture & Request Flow",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Structure into layers: Client (React/Next/Mobile) -> Gateway/Reverse Proxy -> Application Controller -> Business Service -> Data Access Layer -> Database / Cache. Trace HTTP headers, DTOs, and serialization."
      },
      {
        id: "proj-q7",
        title: "Explain the request flow from the user interface to the database and back.",
        category: "Standard",
        subtopic: "Architecture & Request Flow",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Structure into layers: Client (React/Next/Mobile) -> Gateway/Reverse Proxy -> Application Controller -> Business Service -> Data Access Layer -> Database / Cache. Trace HTTP headers, DTOs, and serialization."
      },
      {
        id: "proj-q8",
        title: "Explain the database schema and the relationships between the main entities.",
        category: "Standard",
        subtopic: "Database Design",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Explain key entities (e.g. Users, Orders, Products), foreign key relationships (1:1, 1:N, N:M with junction table), indexing strategy, and why you selected relational over non-relational."
      },
      {
        id: "proj-q9",
        title: "Describe one important feature you implemented from beginning to end.",
        category: "Standard",
        subtopic: "Features & Workflows",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Break the feature into 4 phases: UI triggering event, controller payload validation, business logic / third-party integration (e.g. payment/auth), and atomic database commit."
      },
      {
        id: "proj-q10",
        title: "Explain the internal workflow of your most complex feature.",
        category: "Standard",
        subtopic: "Features & Workflows",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Break the feature into 4 phases: UI triggering event, controller payload validation, business logic / third-party integration (e.g. payment/auth), and atomic database commit."
      },
      {
        id: "proj-q11",
        title: "What was your individual contribution compared with the team's contribution?",
        category: "Very Important",
        subtopic: "Your Contribution & Teamwork",
        importance: "Critical",
        recruiterNote: "Very Important: Primary question asked in 95%+ of fresher Technical Round 2 discussions.",
        hint: "Clearly demarcate what YOU wrote versus teammates or open-source packages. Interviewers want to know your exact modules, API endpoints, or database tables."
      },
      {
        id: "proj-q12",
        title: "How did you use Git, code reviews, and Agile practices while developing the project?",
        category: "Standard",
        subtopic: "Your Contribution & Teamwork",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Mention feature branching (Gitflow), PR reviews with checklist rules, continuous integration pipelines running automated tests, and Jira/Scrum standups."
      },
      {
        id: "proj-q13",
        title: "What was the most challenging technical problem you faced, and how did you solve it?",
        category: "Very Important",
        subtopic: "Problem-Solving & Debugging",
        importance: "Critical",
        recruiterNote: "Very Important: Primary question asked in 95%+ of fresher Technical Round 2 discussions.",
        hint: "Describe the symptom, how you isolated variables (logging, profiler, network tab), the root cause hypothesis, the fix, and how you ensured it wouldn't regress."
      },
      {
        id: "proj-q14",
        title: "Describe a production issue or difficult bug you investigated. How did you identify the root cause?",
        category: "Standard",
        subtopic: "Problem-Solving & Debugging",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Describe the symptom, how you isolated variables (logging, profiler, network tab), the root cause hypothesis, the fix, and how you ensured it wouldn't regress."
      },
      {
        id: "proj-q15",
        title: "How did you handle validation, exceptions, logging, and error handling?",
        category: "Standard",
        subtopic: "Quality, Security & Testing",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Deliver a structured verbal response: state context, technical design choices, practical implementation hurdles, and measurable outcomes."
      },
      {
        id: "proj-q16",
        title: "How did you secure the application and protect user data?",
        category: "Standard",
        subtopic: "Quality, Security & Testing",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Cover: Authentication (JWT/OAuth), Authorization (RBAC), input sanitization (SQL Injection / XSS prevention), HTTPS, and password hashing (bcrypt/Argon2)."
      },
      {
        id: "proj-q17",
        title: "How did you test your project? Which unit, integration, or end-to-end tests did you write?",
        category: "Standard",
        subtopic: "Quality, Security & Testing",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Deliver a structured verbal response: state context, technical design choices, practical implementation hurdles, and measurable outcomes."
      },
      {
        id: "proj-q18",
        title: "How did you improve performance, scalability, or reliability?",
        category: "Standard",
        subtopic: "Performance & Scalability",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Discuss: database indexing, caching layer (Redis), horizontal pod scaling with load balancer, CDN for static assets, and async message queues (Kafka/RabbitMQ) for heavy jobs."
      },
      {
        id: "proj-q19",
        title: "If your application's user load increased tenfold, what changes would you consider?",
        category: "Standard",
        subtopic: "Performance & Scalability",
        importance: "High",
        recruiterNote: "Standard project defense and engineering evaluation topic.",
        hint: "Discuss: database indexing, caching layer (Redis), horizontal pod scaling with load balancer, CDN for static assets, and async message queues (Kafka/RabbitMQ) for heavy jobs."
      },
      {
        id: "proj-q20",
        title: "What would you redesign if you rebuilt the project today?",
        category: "Important",
        subtopic: "Reflection & Improvement",
        importance: "Very High",
        recruiterNote: "Important: Evaluates your architectural decisions, trade-offs, and team collaboration.",
        hint: "Demonstrates engineering maturity. Highlight one architectural improvement: e.g. adopting TypeScript earlier, decoupling monolith into microservices, or adding automated integration testing."
      }
    ]
  },
  {
    id: "git",
    slug: "git",
    title: "Git & GitHub",
    tagline: "Distributed version control, merge mechanics, conflict resolution, and collaborative Git flow",
    iconName: "GitBranch",
    colorTheme: {
      accent: "#f43f5e",
      bgBadge: "bg-rose-50 text-rose-700 border-rose-200",
      textBadge: "text-rose-600",
      borderHover: "hover:border-rose-400"
    },
    tags: [
      "Version Control",
      "Merge vs Rebase",
      "Conflict Resolution",
      "Pull Request Workflows"
    ],
    overview: "Engineering recruiters want to know whether a fresher can contribute to an enterprise codebase on Day 1 without accidentally destroying branch history, losing code, or mishandling production releases.",
    interviewTips: [
      "Distinguish cleanly between Git (the local CLI tool) and GitHub/GitLab (cloud hosting and collaboration platforms).",
      "Memorize the internal states: Working Directory, Staging Area (Index), and Local Repository (.git).",
      "Be ready to explain how you resolve a messy Git merge conflict step-by-step."
    ],
    questions: [
      {
        id: "git-1",
        title: "What is the three-tree architecture of Git (Working Directory, Staging Area / Index, and Commit History)? Why is the staging step necessary?",
        category: "Standard",
        subtopic: "Core Architecture",
        importance: "Critical",
        recruiterNote: "Fundamental question asked to check if the candidate understands Git internals beyond memorized commands.",
        hint: "Think about atomic commits: why you might want to selectively commit only 2 out of 5 modified files into a single logical changeset."
      },
      {
        id: "git-2",
        title: "Explain the exact difference between `git merge` and `git rebase`. When should you strictly avoid using `git rebase`?",
        category: "Very Important",
        subtopic: "Branch Integration",
        importance: "Critical",
        recruiterNote: "The #1 favorite Git question in fresher engineering interviews.",
        hint: "Contrast preserving true historical chronology (merge commit) with linear commit storytelling (rewriting commit SHAs). Remember the golden rule: never rebase public shared branches."
      },
      {
        id: "git-3",
        title: "What is the difference between `git reset` (soft, mixed, hard) and `git revert`? Which one is safe for shared remote branches?",
        category: "Very Important",
        subtopic: "Undoing Changes",
        importance: "Critical",
        recruiterNote: "Tests production safety instincts. Recruiters look for 'non-destructive undo' awareness.",
        hint: "Does the command rewrite commit history backwards, or does it append a brand-new inverse commit on top of the branch?"
      },
      {
        id: "git-4",
        title: "What does a 'Detached HEAD' state mean in Git? How do you enter it, and how do you recover your work if you make commits in this state?",
        category: "Important",
        subtopic: "HEAD & References",
        importance: "Very High",
        recruiterNote: "Tests whether a candidate panics when unexpected Git states occur.",
        hint: "What is HEAD pointing to? Normally a branch ref, but here pointing directly to a specific commit hash."
      },
      {
        id: "git-5",
        title: "Walk through the exact step-by-step process of identifying, inspecting, and resolving a Git merge conflict in a team project.",
        category: "Very Important",
        subtopic: "Team Collaboration",
        importance: "Critical",
        recruiterNote: "Direct indicator of whether a fresher has done real team project work.",
        hint: "Discuss conflicting hunks (`<<<<<<<`, `=======`, `>>>>>>>`), manual arbitration, testing code before staging, and completing the merge commit."
      },
      {
        id: "git-6",
        title: "What is the difference between `git fetch` and `git pull`? What does `git pull --rebase` do?",
        category: "Standard",
        subtopic: "Remote Synchronization",
        importance: "High",
        recruiterNote: "Frequently asked to ensure the candidate doesn't blindly run pull commands.",
        hint: "Break `git pull` into two discrete operations: downloading remote tracking refs + integrating them into current branch."
      },
      {
        id: "git-7",
        title: "What is `git stash`? Explain how you would stash uncommitted work, switch to a hotfix branch, and later restore your stashed changes.",
        category: "Standard",
        subtopic: "Work in Progress",
        importance: "High",
        recruiterNote: "Practical daily workflow evaluation.",
        hint: "Consider the stack operations: `stash push`, `stash pop`, `stash apply`, and stashing untracked files with `-u`."
      },
      {
        id: "git-8",
        title: "Explain the purpose of a `.gitignore` file. What should you do if an accidental sensitive file (e.g. `.env` or API key) is already committed to the repository?",
        category: "Important",
        subtopic: "Security & Clean Repo",
        importance: "Very High",
        recruiterNote: "Critical for security hygiene awareness in production environments.",
        hint: "Simply adding it to `.gitignore` won't un-track cached files. Mention `git rm --cached` and credential revocation."
      },
      {
        id: "git-9",
        title: "What is the difference between Git Cherry-Pick and Git Rebase? Give a practical scenario where cherry-pick is the cleanest option.",
        category: "Important",
        subtopic: "Advanced History Manipulation",
        importance: "High",
        recruiterNote: "Used in product company interviews to gauge advanced Git versatility.",
        hint: "Extracting a single emergency bugfix commit from a feature branch directly into main/production without pulling in unfinished feature commits."
      },
      {
        id: "git-10",
        title: "Explain the difference between Forking a repository and Cloning a repository. How does this relate to Open Source PR contributions?",
        category: "Standard",
        subtopic: "GitHub & Open Source",
        importance: "High",
        recruiterNote: "Checks whether candidate understands server-side repository copies vs local file system clones.",
        hint: "Remote server-side copy under candidate's GitHub account with independent push rights vs downloading to local machine."
      }
    ]
  },
  {
    id: "ai-genai",
    slug: "ai-genai",
    title: "Artificial Intelligence & GenAI Basics",
    tagline: "Transformers, LLM tokens, prompt engineering, RAG architecture, and ethical AI",
    iconName: "Sparkles",
    colorTheme: {
      accent: "#8b5cf6",
      bgBadge: "bg-purple-50 text-purple-700 border-purple-200",
      textBadge: "text-purple-600",
      borderHover: "hover:border-purple-400"
    },
    tags: [
      "LLM Fundamentals",
      "Transformers & Attention",
      "RAG vs Fine-tuning",
      "Embeddings"
    ],
    overview: "For college freshers, almost every software engineering interview now includes a GenAI segment. Recruiters expect candidates to understand the conceptual underpinnings of Large Language Models, embeddings, and modern AI application architecture.",
    interviewTips: [
      "Avoid buzzword soup: explain attention mechanism, context window, and hallucinations with grounded technical intuition.",
      "Understand why RAG (Retrieval-Augmented Generation) is preferred over fine-tuning for domain-specific private company data.",
      "Be ready to describe prompt engineering patterns (Few-Shot, Chain-of-Thought)."
    ],
    questions: [
      {
        id: "ai-1",
        title: "What is the Transformer architecture and why did it replace Recurrent Neural Networks (RNNs) for Natural Language Processing?",
        category: "Very Important",
        subtopic: "Model Architecture",
        importance: "Critical",
        recruiterNote: "Tests candidate's grasp of modern generative foundations.",
        hint: "Think about sequential bottleneck in RNNs vs parallelized self-attention mechanism computing token relationships across long distances."
      },
      {
        id: "ai-2",
        title: "Explain the difference between Fine-Tuning a Large Language Model and using Retrieval-Augmented Generation (RAG). When is RAG superior?",
        category: "Very Important",
        subtopic: "GenAI System Design",
        importance: "Critical",
        recruiterNote: "The single most common GenAI question for modern college freshers.",
        hint: "Consider updating model parameter weights (expensive, static) vs external knowledge retrieval using vector databases (dynamic, verifiable, private)."
      },
      {
        id: "ai-3",
        title: "What are Vector Embeddings and Vector Databases? How does cosine similarity enable semantic search?",
        category: "Important",
        subtopic: "Embeddings & Search",
        importance: "Very High",
        recruiterNote: "Evaluates modern search and retrieval concepts.",
        hint: "Converting high-dimensional semantic meaning into mathematical vectors where similar concepts lie close together in geometric space."
      },
      {
        id: "ai-4",
        title: "What causes 'Hallucinations' in LLMs and what architectural safeguards (guardrails, temperature settings) mitigate them?",
        category: "Standard",
        subtopic: "LLM Mechanics",
        importance: "High",
        recruiterNote: "Tests candidate's practical awareness of generative limitations.",
        hint: "LLMs are probabilistic token predictors, not factual databases. Discuss grounding in context, temperature=0, and verification."
      },
      {
        id: "ai-5",
        title: "Explain the key differences between Supervised Learning, Unsupervised Learning, and Reinforcement Learning from Human Feedback (RLHF).",
        category: "Standard",
        subtopic: "ML Foundations",
        importance: "High",
        recruiterNote: "Validates foundational machine learning taxonomy.",
        hint: "Labeled input-output pairs vs finding hidden cluster patterns vs reward models aligning language models to human preference."
      }
    ]
  },
  {
    id: "sdlc-agile",
    slug: "sdlc-agile",
    title: "SDLC & Agile Methodologies",
    tagline: "Scrum ceremonies, CI/CD pipelines, Waterfall vs Agile, and sprint delivery",
    iconName: "KanbanSquare",
    colorTheme: {
      accent: "#0ea5e9",
      bgBadge: "bg-sky-50 text-sky-700 border-sky-200",
      textBadge: "text-sky-600",
      borderHover: "hover:border-sky-400"
    },
    tags: [
      "Scrum & Sprints",
      "Waterfall vs Agile",
      "CI/CD Foundations",
      "Quality Assurance"
    ],
    overview: "Recruiters evaluate if a campus hire can smoothly fit into an enterprise Agile squad, understand sprint backlogs, respect code reviews, and ship features within structured CI/CD workflows.",
    interviewTips: [
      "Demonstrate real familiarity with Daily Standups, Sprint Planning, Retrospectives, and Backlog Refinement.",
      "Explain the trade-offs of Waterfall (strictly defined, sequential) versus Agile (iterative, responsive to changing user feedback).",
      "Mention automated testing and CI/CD triggers on pull request merges."
    ],
    questions: [
      {
        id: "sdlc-1",
        title: "Compare the Waterfall model with Agile Scrum. Under what project conditions would a Waterfall model still be the superior choice?",
        category: "Very Important",
        subtopic: "Process Models",
        importance: "Critical",
        recruiterNote: "Classic fresher question testing real-world engineering judgment.",
        hint: "Think about strict government/medical compliance with non-negotiable static requirements vs evolving consumer web apps."
      },
      {
        id: "sdlc-2",
        title: "Detail the four primary Scrum ceremonies (Planning, Daily Standup, Review/Demo, Retrospective). What is the purpose of each?",
        category: "Standard",
        subtopic: "Scrum Framework",
        importance: "Critical",
        recruiterNote: "Direct check to see if candidate can integrate into a sprint team without hand-holding.",
        hint: "What gets decided before a sprint starts? What happens daily in 15 mins? What gets presented to stakeholders? What process improvements are discussed?"
      },
      {
        id: "sdlc-3",
        title: "What is CI/CD (Continuous Integration & Continuous Deployment)? What automated steps typically run in a production build pipeline?",
        category: "Important",
        subtopic: "DevOps & Delivery",
        importance: "Very High",
        recruiterNote: "Essential for modern software engineering roles.",
        hint: "Linting, static code analysis, unit test suites, container image building, artifact staging, and automated blue-green deployment."
      },
      {
        id: "sdlc-4",
        title: "What is the definition of 'Technical Debt'? How do Agile teams measure, prioritize, and pay down technical debt during sprints?",
        category: "Important",
        subtopic: "Engineering Discipline",
        importance: "High",
        recruiterNote: "Differentiates experienced coders from academic book learners.",
        hint: "Quick-and-dirty implementation shortcuts taken to meet deadlines that accrue interest in the form of refactoring friction later."
      },
      {
        id: "sdlc-5",
        title: "Explain the difference between Unit Testing, Integration Testing, and End-to-End (E2E) Testing in the Testing Pyramid.",
        category: "Standard",
        subtopic: "Software Quality",
        importance: "High",
        recruiterNote: "Tests testing strategy and understanding of test execution speed vs isolation.",
        hint: "Fast, isolated single-function checks at the base; service contract checks in the middle; full simulated user journey checks at the peak."
      }
    ]
  },
  {
    id: "os-networks",
    slug: "os-networks",
    title: "Operating Systems & Networks",
    tagline: "Process scheduling, virtual memory, deadlocks, OSI model, TCP vs UDP, and HTTP/HTTPS",
    iconName: "Network",
    colorTheme: {
      accent: "#6366f1",
      bgBadge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      textBadge: "text-indigo-600",
      borderHover: "hover:border-indigo-400"
    },
    tags: [
      "Process vs Thread",
      "Virtual Memory & Paging",
      "OSI & TCP/IP",
      "Deadlock Conditions"
    ],
    overview: "Computer Science fundamentals separate top-tier coders from average applicants. Expect deep probing into process states, memory management, deadlock detection, and socket communication.",
    interviewTips: [
      "Always know the 4 Coffman conditions for Deadlock by heart.",
      "Explain what happens under the hood when you type a URL into a browser and press Enter.",
      "Understand the TCP 3-way handshake (SYN, SYN-ACK, ACK) and 4-way termination."
    ],
    questions: [
      {
        id: "os-1",
        title: "What is the core difference between a Process and a Thread? How do they share or isolate memory and CPU registers?",
        category: "Very Important",
        subtopic: "Process Management",
        importance: "Critical",
        recruiterNote: "Asked in almost every OS technical screening.",
        hint: "Isolated address space & PCB vs shared heap/code with individual stack & program counter."
      },
      {
        id: "os-2",
        title: "What is a Deadlock? Explain the 4 necessary Coffman conditions and describe how bankers algorithm avoids deadlock.",
        category: "Very Important",
        subtopic: "Concurrency & Deadlocks",
        importance: "Critical",
        recruiterNote: "Core syllabus check for campus drives.",
        hint: "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Breaking any one condition prevents the deadlock."
      },
      {
        id: "os-3",
        title: "Explain the TCP 3-Way Handshake and compare TCP reliability mechanisms (ACKs, sliding window) with UDP speed.",
        category: "Standard",
        subtopic: "Computer Networks",
        importance: "Critical",
        recruiterNote: "Mandatory networking concept for distributed systems.",
        hint: "SYN -> SYN-ACK -> ACK. Connection-oriented stream with packet retransmission vs connectionless datagram broadcast for video/gaming."
      },
      {
        id: "os-4",
        title: "What happens from a networking perspective when you type 'https://google.com' in your browser and press Enter?",
        category: "Important",
        subtopic: "End-to-End Networking",
        importance: "Critical",
        recruiterNote: "The ultimate end-to-end litmus test for software engineering freshers.",
        hint: "DNS resolution -> ARP -> TCP handshake -> TLS negotiation -> HTTP GET request -> Server processing -> Response rendering."
      },
      {
        id: "os-5",
        title: "What is Virtual Memory and Paging? What is 'Thrashing' and how does an Operating System recover from it?",
        category: "Important",
        subtopic: "Memory Management",
        importance: "Very High",
        recruiterNote: "Tests candidate's hardware-OS bridge understanding.",
        hint: "Page tables translating logical to physical addresses, page faults, and high swap overhead when working sets exceed RAM."
      }
    ]
  },
  {
    id: "behavioral",
    title: "Behavioral & HR Interview",
    slug: "behavioral",
    tagline: "Culture Fit, STAR Scenarios, Why Hire You & 5-Year Goals",
    iconName: "UserCheck",
    colorTheme: {
      bg: "#ecfdf5",
      border: "#a7f3d0",
      text: "#065f46",
      accent: "#059669"
    },
    tags: [
      "HR Round",
      "STAR Method",
      "Culture Fit",
      "Career Goals",
      "Conflict Resolution"
    ],
    overview: "Technical competence opens the door, but behavioral articulation secures the job offer. In campus drives, recruiters and engineering managers evaluate your communication clarity, resilience, team adaptability, and how you think through real workplace challenges.",
    interviewTips: [
      "Structure scenario-based answers using the STAR method: Situation, Task, Action, Result.",
      "Be authentic and humble: admit mistakes, focus on learnings, and avoid memorized generic corporate clichés.",
      "Always prepare 2-3 thoughtful questions to ask the interviewer at the end of the round."
    ],
    questions: [
      {
        id: "beh-1",
        title: "Why should we hire you over other candidates from your college?",
        category: "Very Important",
        subtopic: "Value Proposition",
        importance: "Critical",
        recruiterNote: "Tests self-awareness, confidence, and how clearly you differentiate yourself without putting others down.",
        hint: "Combine three pillars: solid fundamental competence (academic/projects), demonstrated learning agility (tools learned outside class), and genuine role enthusiasm."
      },
      {
        id: "beh-2",
        title: "Where do you see yourself in 5 years?",
        category: "Very Important",
        subtopic: "Career Aspirations",
        importance: "Critical",
        recruiterNote: "Checks realistic ambition, stability, and whether your growth goals align with software engineering.",
        hint: "Focus on technical mastery, expanding ownership (mentoring juniors, leading module designs), and becoming a reliable domain specialist—avoid mentioning unrelated higher studies (MBA/MS) if applying for a dev role."
      },
      {
        id: "beh-3",
        title: "Do you have any questions for us? (Reverse Interviewing)",
        category: "Very Important",
        subtopic: "Candidate Curiosity",
        importance: "Critical",
        recruiterNote: "Signals genuine interest and intellectual curiosity about the team and company culture.",
        hint: "Never say 'No, all clear'. Ask about engineering culture, deployment cadence, what distinguishes high-performing freshers in their first 90 days, or recent tech stack decisions."
      },
      {
        id: "beh-4",
        title: "Tell me about yourself and walk me through your journey.",
        category: "Very Important",
        subtopic: "Self Introduction",
        importance: "Critical",
        recruiterNote: "The universal icebreaker that sets the tone for the entire interview.",
        hint: "Use the Present-Past-Future formula: current degree & technical focus, key project or internship highlight, and why you are excited for this specific role. Keep it strictly under 90 seconds."
      },
      {
        id: "beh-5",
        title: "Why do you want to join our company specifically rather than competitors?",
        category: "Very Important",
        subtopic: "Company Fit",
        importance: "Critical",
        recruiterNote: "Evaluates whether you researched the company or are just mass-applying.",
        hint: "Cite specific company products, engineering tech blogs, open-source contributions, or recent business milestones rather than generic praises like 'it is a well-known MNC'."
      },
      {
        id: "beh-6",
        title: "Describe a situation where you had a conflict or disagreement with a teammate in a college project. How did you resolve it?",
        category: "Very Important",
        subtopic: "Conflict Resolution",
        importance: "Critical",
        recruiterNote: "Tests emotional intelligence, communication maturity, and team-first orientation.",
        hint: "Use STAR (Situation, Task, Action, Result). Focus on depersonalizing the issue, discussing trade-offs using data or user requirements, and reaching a collaborative consensus."
      },
      {
        id: "beh-7",
        title: "What are your greatest strengths and genuine weaknesses?",
        category: "Important",
        subtopic: "Self Awareness",
        importance: "Very High",
        recruiterNote: "Measures honesty, humility, and whether you are actively working on personal growth.",
        hint: "Strength: pair with a concrete example (e.g., relentless debugging). Weakness: pick a genuine minor area (e.g., tendency to over-engineer early), and describe the concrete habits you use to manage it."
      },
      {
        id: "beh-8",
        title: "Tell me about a time you made a mistake or a project deadline was missed. What was the outcome and what did you learn?",
        category: "Important",
        subtopic: "Accountability",
        importance: "Very High",
        recruiterNote: "Tests accountability versus finger-pointing when things go wrong.",
        hint: "Take immediate radical ownership. Explain what went wrong, the corrective action taken, and the preventive safeguard (checklist, unit tests) implemented for future work."
      },
      {
        id: "beh-9",
        title: "How do you handle high pressure, tight deadlines, or multiple overlapping semester submissions?",
        category: "Important",
        subtopic: "Stress Management",
        importance: "High",
        recruiterNote: "Assesses work organization, prioritization, and resilience under deadline stress.",
        hint: "Discuss prioritization methods (breaking complex work into micro-milestones), transparent communication with stakeholders, and maintaining quality without burning out."
      },
      {
        id: "beh-10",
        title: "What would you do if you were assigned a programming language or legacy tech stack you have never worked with before?",
        category: "Important",
        subtopic: "Learning Agility",
        importance: "High",
        recruiterNote: "In real jobs, freshers rarely choose their stack. Tests willingness and adaptability.",
        hint: "Emphasize core CS fundamentals: syntax changes but algorithmic logic and patterns remain. Outline your rapid learning strategy: documentation, reading existing codebase tests, building small POCs, and asking seniors targeted questions."
      },
      {
        id: "beh-11",
        title: "Describe a situation where you had to explain a complex technical concept to a non-technical person.",
        category: "Important",
        subtopic: "Communication",
        importance: "High",
        recruiterNote: "Evaluates ability to communicate with product managers, clients, and business stakeholders.",
        hint: "Demonstrate empathy: remove acronyms and jargon, use real-life relatable analogies, focus on 'what value it delivers' instead of internal implementation, and check for understanding."
      },
      {
        id: "beh-12",
        title: "How do you keep your technical skills sharp outside your college curriculum?",
        category: "Important",
        subtopic: "Continuous Learning",
        importance: "High",
        recruiterNote: "Differentiates passionate engineers who build things from passive degree-holders.",
        hint: "Mention specific resources: reading engineering blogs (Netflix, Uber), exploring GitHub open-source repositories, building weekend projects, and participating in coding challenges or hackathons."
      },
      {
        id: "beh-13",
        title: "If your team lead or senior suggests an architectural approach that you believe is flawed or inefficient, how would you respond?",
        category: "Standard",
        subtopic: "Hierarchy & Disagreement",
        importance: "Medium",
        recruiterNote: "Tests respect for experience combined with intellectual honesty and constructive communication.",
        hint: "Approach with curiosity rather than confrontation: ask questions to discover hidden constraints (budget, legacy compatibility), and present your alternative backed by benchmark numbers or a prototype."
      },
      {
        id: "beh-14",
        title: "Are you comfortable with relocating, working in varying project shifts, or adapting across different technical domains?",
        category: "Standard",
        subtopic: "Flexibility",
        importance: "Medium",
        recruiterNote: "Standard campus recruiter compliance and operational readiness check.",
        hint: "Express enthusiasm for career mobility and diverse project exposures early in your career, seeing different environments as accelerators for learning."
      },
      {
        id: "beh-15",
        title: "What are your salary expectations as a fresher joining our engineering organization?",
        category: "Standard",
        subtopic: "Salary Expectations",
        importance: "Medium",
        recruiterNote: "Tests alignment with campus salary bands and professional composure.",
        hint: "Anchor to standard campus placement guidelines for the role. Reiterate that high-quality mentorship, project impact, and engineering learning curve are your top priorities as a fresher."
      }
    ]
  }
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getAllTopicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}
