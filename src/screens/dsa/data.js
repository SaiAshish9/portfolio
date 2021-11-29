import { CodeEditor, Span } from "./components";

export const DATA = {
  ds: {
    title: "Data Structures",
    content: (
      <>
        <Span>
          A <b>data structure</b> is a way of organising data so that it can be
          used efficiently from temporary or main memory of the computer and
          various operations can be performed on it. It is a collection of data
          types
        </Span>
        <Span>
          There are two types of data structures: <b>primitive</b> and{" "}
          <b>non-primitive.</b>
        </Span>
        <Span>
          <b>Data Type:</b>
        </Span>
        <Span>
          Data types are used to identify the type of data a memory location can
          hold and the associated operations of handling it. Types: primitive
          and non-primitive
        </Span>
        <Span>
          <b>Database:</b>
        </Span>
        <Span>
          A database is an organized collection of data to access and manage
          data easily from permanent memory (files, HDD ,etc) . Relational
          database ( tables ) ( Mysql, Postgres ) (ACID (Atomicity Consistency
          Isolation Durability) property) and non-relational database ( json,xml
          files,etc ) ( MongoDB, Redis, Cassandra DB ) (BASE (Basically
          Available, Soft state, Eventually consistent) property) are it's
          types.
        </Span>
        <Span>
          <b>Data Warehouse:</b>
        </Span>
        <Span>
          It's the collection of data from various data sources which forms the
          main component of business.It makes use of sql queries and application
          log files.It is also used to perform queries on large amounts of data.
          It involves the process of extraction, loading, and transformation for
          providing the data for analysis. #collection
        </Span>
        <Span>
          <b>Data Mining:</b>
        </Span>
        <Span>
          Data mining is considered as a process of extracting data from large
          data sets with the help of patterns. #extraction
        </Span>
        <Span>
          <b>Big Data:</b>
        </Span>
        Big Data basically refers to the data which is in large volume and has
        complex data sets(Structured, semi-structured, or non-structured) which
        cannot be processed by traditional data processing software and
        databases. Various operations like analysis, manipulation, changes, etc
        are performed on data and then it is used by companies for intelligent
        decision making. e.g.Apache Hadoop.
      </>
    ),
    types: {
      primitive: {
        title: "Primitive",
        content: (
          <>
            <Span>
              It is a kind of data structure that stores the data of only one
              type (non nullable). There are the four primitive data structures:
              Integer, Float, Boolean and Character.
            </Span>
            <Span>
              <b>Primitive Data Type Vs Primitive Data Structure:</b>
            </Span>
            <Span>
              A primitive data type (
              int,byte,short,char,long,float,double,boolean ) identifies the
              reference variable whereas a primitive data structure is a
              location in memory (a piece of data) that has pointers to other
              locations on memory
            </Span>
          </>
        ),
        types: [
          {
            title: "Integer",
            content:
              "It contains the whole numbers that can be either negative or positive. (int, byte, short, char)",
          },
          {
            title: "Float",
            content:
              "The float is a data type that can hold decimal values. When the precision of decimal value increases then the Double data type is used. (folat,double) ",
          },
          {
            title: "Boolean",
            content:
              "It is a data type that can hold either a True or a False value. It is mainly used for checking the condition. (bool)",
          },
          {
            title: "Character",
            content:
              "It is a data type that can hold a single character value both uppercase and lowercase such as 'A' or 'a' (char) ",
          },
        ],
      },
      "non-primitive": {
        title: "Non Primitive",
        types: [
          {
            title: "Linear",
            content: (
              <>
                <Span>
                  In <b>linear data structure</b>, elements are arranged in a
                  linear or sequential way such that all of them can be
                  traversed in a single run and each element is connected to
                  previous and next adjacent.
                </Span>
                <Span>e.g. : Array, Linked List, Stack, Queue, etc.</Span>
                <Span>
                  <b>Array (Homogeneous): </b>
                </Span>
                <Span>
                  It consists of a fixed number of elements of same type.
                  Operations: Insertion , Deletion , Traversal, Searching,
                  Modification And Sorting
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    Javascript: `class Array{
                      constructor(){
                      this.length=0;
                      this.data={};
                      }
                      getElementAtIndex(index){
                      return this.data[index];
                      }
                      push(element){
                      this.data[this.length]=element;
                      this.length++;
                      return this.length;
                      }
                      pop(){
                      const item= this.data[this.length-1];
                      delete this.data[this.length-1];
                      this.length--;
                      return this.data;
                      }
                      deleteAt(index){
                      for(let i=index; i<this.length-1;i++){
                      this.data[i]=this.data[i+1];
                      }
                      delete this.data[this.length-1];
                      this.length--;
                      return this.data;
                      }
                      insertAt(item, index){
                      for(let i=this.length;i>=index;i--){
                      this.data[i]=this.data[i-1];
                      }
                      this.data[index]=item;
                      this.length++;
                      return this.data;
                      }
                      }
                      const array= new Array();
                      array.push(12);
                      array.push(10);
                      array.push(9);`,
                    Python: `import ctypes

class DynamicArray(object):
  def __init__(self):
    self.n = 0
    self.capacity = 1 
    self.A = self.make_array(self.capacity)
    
  def __len__(self):
    return self.n
  
  def __getitem__(self, k):
    if not 0 <= k <self.n:
      return IndexError('K is out of bounds !')
    
    return self.A[k]
    
  def append(self, ele):
    if self.n == self.capacity:
      self._resize(1 + self.capacity)
    
    self.A[self.n] = ele
    self.n += 1

  def insertAt(self,item,inde
    if index<0 or index>self.n:
      print("please enter appropriate index..")
      return
    
    if self.n==self.capacity:
      self._resize(2*self.capacity)
      
    
    for i in range(self.n-1,index-1,-1):
      self.A[i+1]=self.A[i]
      
    
    self.A[index]=item
    self.n+=1

  def delete(self):
    if self.n==0:
      print("Array is empty deletion not Possible")
      return
    
    self.A[self.n-1]=0
    self.n-=1
      
  def removeAt(self,index):
    if self.n==0:
      print("Array is empty deletion not Possible")
      return
        
    if index<0 or index>=self.n:
      return IndexError("Index out of bound....deletion not possible")		
    
    if index==self.n-1:
      self.A[index]=0
      self.n-=1
      return		
    
    for i in range(index,self.n-1):
      self.A[i]=self.A[i+1]			
      
    self.A[self.n-1]=0
    self.n-=1

    
  def _resize(self, new_cap):
    B = self.make_array(new_cap) 
    
    for k in range(self.n): 
      B[k] = self.A[k]
      
    self.A = B 
    self.capacity = new_cap 
    
  def make_array(self, new_cap):
    return (new_cap * ctypes.py_object)()
  arr = DynamicArray()
  len(arr)
`,
                    "C++": "",
                    Java: ` import java.util.*;

                    class ArrayClass {
                      private int arr[];
                      private int capacity;
                      private int current;
            
                      public ArrayListClass()
                      {
                        arr = new int[1];
                        capacity = 1;
                        current = 0;
                      }
            
                      public void push(int data)
                      {
                        if (current == capacity) {
                          int temp[] = new int[1 + capacity];
                          for (int i = 0; i < capacity; i++)
                            temp[i] = arr[i];
            
                          capacity += 1;
                          arr = temp;
                        }
                        arr[current] = data;
                        current++;
                      }
            
                      void push(int data, int index)
                      {
                        if (index == capacity)
                          push(data);
                        else
                          arr[index] = data;
                      }
            
                      int get(int index)
                      {
            
                        if (index < current)
                          return arr[index];
            
                        return -1;
                      }
            
                      void pop()
                      {
                        current--;
                      }
            
                      int size()
                      {
                        return current;
                      }
            
                      int getcapacity()
                      {
                        return capacity;
                      }
            
                      void print()
                      {
                        for (int i = 0; i < current; i++) {
                          System.out.print(arr[i] + " ");
                        }
                        System.out.println();
                      }
            
                      public static void main(String args[])
                      {
                        ArrayListClass v
                          = new ArrayListClass();
                        v.push(10);
                        v.push(20);
                        v.push(30);
                        v.push(40);
                        v.push(50);
            
                        System.out.println("ArrayList size: "
                                + v.size());
                        System.out.println(
                          "ArrayList capacity: "
                          + v.getcapacity());
                        System.out.println(
                          "ArrayList elements: ");
                        v.print();
            
                        v.push(100, 1);
            
                        System.out.println(
                          "\nAfter updating 1st index");
            
                        System.out.println(
                          "ArrayList elements: ");
                        v.print();
                        System.out.println(
                          "Element at 1st index: "
                          + v.get(1));
            
                        v.pop();
            
                        System.out.println(
                          "\nAfter deleting the"
                          + " last element");
            
                        System.out.println(
                          "ArrayList size: "
                          + v.size());
                        System.out.println(
                          "ArrayList capacity: "
                          + v.getcapacity());
            
                        System.out.println(
                          "ArrayList elements: ");
                        v.print();
                      }
                    }`,
                    Kotlin: "",
                  }}
                />
                <Span>
                  <b>Linked List:</b>
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    Javascript: "",
                    Python: "",
                    "C++": "",
                    Java: "",
                    Kotlin: "",
                  }}
                />
                <Span>
                  <b>Stack (LIFO) :</b>
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    Javascript: "",
                    Python: "",
                    "C++": "",
                    Java: "",
                    Kotlin: "",
                  }}
                />
                <Span>
                  <b>Queue (FIFO) :</b>
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    Javascript: "",
                    Python: "",
                    "C++": "",
                    Java: "",
                    Kotlin: "",
                  }}
                />
              </>
            ),
          },
          {
            title: "Non Linear",
          },
        ],
        content: (
          <>
            <Span>
              Non-primitive data structure can store the data of more than one
              type whose size is not fixed.
            </Span>
            <Span>
              <b>Physical Data Structure</b>
            </Span>
            <Span>
              A physical data structure refers to the actual organization of
              data on a storage device.
            </Span>
            <Span>
              <b>e.g. : </b> Arrays and Linked List
            </Span>
            <Span>
              <b>Logical Data Structure</b>
            </Span>
            <Span>
              The logical data structure refers to how the information appears
              to a program or user. For example, a data file is a collection of
              information stored together. This is its logical structure.
            </Span>
            <Span>
              <b>e.g. :</b> Stack, Queue, Graph. Tree , Trie , Hash Table
            </Span>
            <Span>
              <b>Hash Table</b>
            </Span>
            <Span>It can be linear as well as non linear.</Span>
          </>
        ),
      },
    },
  },
  algo: {
    title: "Algorithms",
    types: {
      sort: {
        title: "Sorting",
        types: [],
      },
      search: {
        title: "Searching",
        types: [],
      },
      Complexity: {
        title: "Complexity",
        types: [],
      },
      tradeOf: {
        title: "Space Time Trade Off",
        types: [],
      },
      recursive: {
        title: "Recursion",
        types: [],
      },
      "divide&Conquer": {
        title: "Divide & Conquer",
        types: [],
      },
      greedy: {
        title: "Greedy",
        types: [],
      },
      dp: {
        title: "Dynamic Programming",
        types: [],
      },
      bruteForce: {
        title: "Brute Force",
        types: [],
      },
      backtracking: {
        title: "Backtracking",
        types: [],
      },
      branchAndBound: {
        title: "Branch And Bound",
        types: [],
      },
      randomized: {
        title: "Randomized",
        types: [],
      },
    },
  },
  interview: {
    title: "Interview Questions",
    types: {
      amazon: {
        title: "Amazon",
      },
      paytm: {
        title: "Paytm",
      },
      cred: {
        title: "CRED",
      },
      vmware: {
        title: "Vmware",
      },
      turing: {
        title: "Turing",
      },
      stewards: {
        title: "Stewards",
      },
      inuvest: {
        title: "Inuvest",
      },
      nex2Me: {
        title: "Nex2Me",
      },
      pracify: {
        title: "Pracify ( Mauka )",
      },
      appTown: {
        title: "App Town",
      },
    },
    content:
      "Atmost there will be four rounds , the second round will be based on your development skills , experience, projects and code quality. Last two will be based upon hr and they will be similar to the second round.",
  },
  //
  leetcode: {
    title: "Leetcode Questions (1008)",
    types: {
      q1: {
        title: "Q1. Two Sum",
      },
      q2: {
        title: "Q2. Add Two Numbers",
      },

      q3: {
        title: "Q3: Longest Substring Without Repeating Characters",
      },
      q4: {
        title: "Q4: Median Of Two Sorted Arrays",
      },
      q5: {
        title: "Q5: LPS",
      },
      q6: {
        title: "Q6: ZigZag Conversion",
      },
      q7: {
        title: "Q7: Reverse Integer",
      },
      q8: {
        title: "Q8: ATOI",
      },
      q9: {
        title: "Q9: Palindrome",
      },
      q10: {
        title: "Q10. Regular Expression Matching",
      },
      q11: {
        title: "Q11: Container With Most Medium Water",
      },
      q12: {
        title: "Q12: Integer To Roman",
      },
      q13: {
        title: "Q13: Roman To Integer",
      },
      q14: {
        title: "Q14: Longest Common Prefix",
      },
      q15: {
        title: "Q15: 3Sum",
      },
      q16: {
        title: "Q16 : 3SumClosest",
      },
      q17: {
        title: "Q17: Letter Combinations Of A PhoneNumber",
      },
      q18: {
        title: "Q18: 4Sum",
      },
      q19: {
        title: "Q19: Remove Nth Node From End of List",
      },
      q20: {
        title: "Q20: Valid Parenthesis",
      },
      q21: {
        title: "Q21: Merge Two Sorted Lists",
      },
      q22: {
        title: "Q22: Generate Parentheses",
      },
      q23: {
        title: "Q23: Merge K Sorted Lists",
      },
      q24: {
        title: "Q24: Swap Nodes In Pairs",
      },
      q25: {
        title: "Q25: Reverse Nodes in k-Group",
      },
      q26: {
        title: "Q26: Remove Duplicates from Sorted Array.",
      },
      q27: {
        title: "Q27: Remove Element",
      },
      q28: {
        title: "Q28: Implement strStr()",
      },
      q29: {
        title: "Q29: Divide Two Integers",
      },
      q30: {
        title: "Q30: Substring with Concatenation of All Words",
      },
      q31: {
        title: "Q31: Next Permutation",
      },
      q32: {
        title: "Q32: Longest Valid Parentheses",
      },
      q33: {
        title: "Q33: Search in Rotated Sorted Array",
      },
      q34: {
        title: "Q34: Find First and Last Position of Element in Sorted Array",
      },
      q35: {
        title: "Q35: Search Insert Position",
      },
      q36: {
        title: "Q36: Valid Sudoku",
      },
      q37: {
        title: "Q37: Sudoku Solver",
      },
      q38: {
        title: "Q38: Count And Say",
      },
      q39: {
        title: "Q39: Combination Sum",
      },
      q40: {
        title: "Q40: Combination Sum 2",
      },
      q41: {
        title: "Q41: Missing Positive",
      },
      q42: {
        title: "Q42: Trapping Rain Water",
      },
      q43: {
        title: "Q43: Multiply Strings",
      },
      q44: {
        title: "Q44: Wildcard Matching",
      },
      q45: {
        title: "Q45: Jump Game 2",
      },
      q46: {
        title: "Q46: Permutations",
      },
      q47: {
        title: "Q47: Permutations 2",
      },
      q48: {
        title: "Q48: Rotate Image",
      },
      q49: {
        title: "Q49: Group Anagrams",
      },
      q50: {
        title: "Q50: Pow(x,n)",
      },
      q51: {
        title: "Q51: N-Queens",
      },
      q52: {
        title: "Q52: N-Queen’s 2",
      },
      q53: {
        title: "Q53: Maximum Subarray",
      },
      q54: {
        title: "Q54: Spiral Matrix",
      },
      q55: {
        title: "Q55: Jump Game",
      },
    },
  },
};

// at algorithms also include its characteristics
