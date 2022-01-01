import { CodeEditor, Span, Img } from "./components";
import BigOChart from "assets/home/complexity-chart.jpeg";
import GraphImg from "assets/home/graphColoring.png";
import TSPDPImg from "assets/home/tsp_dp.png";
import TSPBacktrack from "assets/home/tsp-backtrack.png";
import SudokuImg from "assets/home/sudoku.png";
import KnightImg from "assets/home/knight-tour.png";
import NQueensImg from "assets/home/nqueens.png";
import NQueensImg2 from "assets/home/nqueens2.png";
import MazeImg from "assets/home/maze.png";
import PermutationsImg from "assets/home/pnc.png";
import WordBreakImg from "assets/home/wordbreak.png";
import SubsetsImg from "assets/home/subsets.png";
import LeftViewBT from "assets/home/leftView.png";
import RightViewBT from "assets/home/rightView.png";
import LeetCodeQ2 from "assets/leetcode/leetcodeQ2.png";
import LeetCodeQ11 from "assets/leetcode/q11.png";
import LeetcodeQ17 from "assets/leetcode/q17.png";
import LeetcodeQ19 from "assets/leetcode/q19.png";

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
                <Span>
                  e.g. : Array (static), Linked List (dynamic), Stack (dynamic),
                  Queue (dynamic), etc.
                </Span>
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
                    title: "Array (Homogeneous)",
                    output: "Output Test",
                    codes: {
                      Javascript: {
                        code: `// class Array will override default Array class
                        class CustomArray {
                            constructor() {
                                this.length = 0;
                                this.data = {};
                            }
                            len(){
                              return this.length;
                            }
                            print(){
                              console.log(Object.values(this.data))
                            }
                            get(index) {
                                return this.data[index];
                            }
                            push(element) {
                                this.data[this.length] = element;
                                this.length++;
                                return this.length;
                            }
                            pop() {
                                const item = this.data[this.length - 1];
                                delete this.data[this.length - 1];
                                this.length--;
                                return this.data;
                            }
                            enqueue(element){
                             return this.insert(element,0);
                            }
                            dequeue(){
                             return this.delete(0);
                            }
                            delete(index) {
                                for (let i = index; i < this.length - 1; i++) {
                                    this.data[i] = this.data[i + 1];
                                }
                                delete this.data[this.length - 1];
                                this.length--;
                                return this.data;
                            }
                            insert(item, index) {
                                for (let i = this.length; i >= index; i--) {
                                    this.data[i] = this.data[i - 1];
                                }
                                this.data[index] = item;
                                this.length++;
                                return this.data;
                            }
                        }
                        const array = new CustomArray();
                        
                        console.log("Custom Array Operations:")
                        
                        array.push(12);
                        array.push(10);
                        array.push(9);
                        array.push(14);
                        array.push(10);
                        array.push(989);
                        
                        console.log("Push: ")
                        array.print()
                        console.log("Length: " + array.len())
                        // array.length gives the same output
                        // array.length() will thrown an error 
                        console.log("Get (index: 1 ): " + array.get(1))
                        console.log("Pop: ")
                        const data = array.pop()
                        let res = []
                        for(let key in data){
                          res.push(data[key])
                        }
                        console.log(res)
                        console.log("Delete: " + array.delete(1))
                        array.print()
                        console.log("Insert: " + array.insert(2))
                        array.print()
                        console.log("Enqueue: " + array.insert(2))
                        array.print()
                        console.log("Dequeue: " + array.insert(2))
                        array.print()
                        
                        console.log("Javascript Array Operations:")
                        
                        let j_arr = [1,2,3]
                        
                        console.log("1. push: " + j_arr.push(5))
                        console.log(j_arr)
                        console.log("2. pop: " + j_arr.pop())
                        console.log(j_arr)
                        console.log("3. length: " + j_arr.length)
                        console.log(j_arr)
                        console.log("4. unshift (enqueue): " + j_arr.unshift(7,8))
                        console.log(j_arr)
                        console.log("5. shift (dequeue): " + j_arr.shift(2))
                        console.log(j_arr)
                        let j = j_arr.reduce((acc,curr)=>{
                        acc[curr] = (acc[curr] || 0) +1
                        return acc
                        },{})
                        console.log("6. reduce: " + JSON.stringify(j)) 
                        j = j_arr.reduceRight((acc,curr)=>{
                        acc[curr] = (acc[curr] || 0) +1
                        return acc
                        },{})
                        // traverse from right
                        console.log("7. reduceRight: " + JSON.stringify(j)) 
                        console.log("8. forEach: ")
                        j_arr.forEach((x,_)=>console.log(x))
                        console.log("9. map: " + j_arr.map(x=>x*2))
                        console.log("10. filter: " + j_arr.filter(x=>x*2))
                        console.log("11a. slice: " + j_arr.slice(2))
                        console.log("11b. slice: " + j_arr.slice(-1))
                        console.log(j_arr)
                        console.log("12. splice: " + j_arr.splice(2))
                        // overwrites the original array
                        // add 1 remove 0 "a" (1,0,"a")
                        // splice(2) remove elements from 2
                        // splice(2,2) remove 2 elements starting from index 2
                        // splice() adds and/or removes array elements.
                        console.log(j_arr)
                        console.log("13. sort: " + j_arr.sort())
                        // sort((a,b)=>a-b)
                        console.log(j_arr)
                        console.log("14. reverse: " + j_arr.reverse())
                        console.log(j_arr)
                        console.log("15. toString: " + j_arr.toString())
                        console.log(j_arr)
                        console.log("16. indexOf: " + j_arr.indexOf(9))
                        console.log(j_arr)
                        console.log("17. lastIndexOf: " + j_arr.lastIndexOf(1))
                        console.log(j_arr)
                        console.log("18. every: " + j_arr.every(x=>x===1))
                        console.log(j_arr)
                        console.log("19. some: " + j_arr.some(x=>x===1))
                        console.log(j_arr)
                        console.log("20 join: " + j_arr.join(","))
                        console.log(j_arr)
                        console.log("21. find: " + j_arr.find(x=>x===2))
                        console.log(j_arr)
                        console.log("22. findIndex: " + j_arr.find(x=>x===2))
                        console.log(j_arr)
                        console.log("23. fill: " + j_arr.fill(2))
                        console.log(j_arr)
                        console.log("24. includes: " + j_arr.includes(2))
                        console.log(j_arr)
                        console.log("25. concat: " + j_arr.concat([1,2]))
                        j_arr.push([3,4])
                        console.log(j_arr)
                        console.log("25. flat: " + j_arr.flat())
                        console.log(j_arr)
                        j_arr.fill(2)
                        console.log("26. flatMap: " + j_arr.flatMap(x=>[x,x*2]))
                        console.log(j_arr)
                        console.log("27. entries iterator")
                        for (const [index, element] of j_arr.entries())
                          console.log(index, element);
                        // keys values at(0)
                        
                        console.log("static methods: ")
                        let numbers = new Array(2)
                        console.log("Array(): " + numbers)
                        console.log("Array(): " + numbers.fill(2))
                        console.log("Array(): " + numbers.fill(new Array(2).fill(false)))
                        // If you execute the JavaScript in the environment that doesn’t support
                        // the  Array.of() method, you can use the following polyfill:
                        // if (!Array.of) {
                        //     Array.of = function() {
                        //         return Array.prototype.slice.call(arguments);
                        //     };
                        // }
                        numbers = Array.of(3);
                        console.log("Array.of(): " + numbers)
                        console.log("Array.from(): "+ Array.from("anc"))
                        console.log("Array.from(): "+ Array.from({length: 5}, (v, i) => i))
                        console.log("Array.from(): "+ Array.from([1, 2, 3], x => x + x))
                        console.log("Array.from(): "+ Array.from({length: 1}, () => Array(2).fill(false)))
                        console.log("Array.isArray(): " + Array.isArray(j_arr))
                        console.log(j_arr instanceof Array)
                        
                        const myRe = /d(b+)(d)/i
                        // 1d 1 or more b d ignore case
                        const myArray = myRe.exec('cdbBdbsbz')
                        console.log("myRe: " + myArray)
                        
                        
                        console.log("array destructuring: ")
                        let x,y
                        [x=10,y=20] = j_arr
                        console.log(x,y)
                        
                        // bind, apply, call ->
                        // https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
                        // var pokemon = {
                        //     firstname: 'Pika',
                        //     lastname: 'Chu ',
                        //     getPokeName: function() {
                        //         var fullname = this.firstname + ' ' + this.lastname;
                        //         return fullname;
                        //     }
                        // };
                        var pokemonName = function(snack, hobby) {
                          console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
                        }                      
                        // var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon.
                        // 'this' of pokemon === pokemon now
                        // logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
                        // pokemonName.call(pokemon,'sushi', 'algorithms');
                        // Pika Chu  loves sushi and algorithms
                        // pokemonName.apply(pokemon,['sushi', 'algorithms']) 
                        // Pika Chu  loves sushi and algorithms
                        // logPokemon();
                        
                        
                        // Object.keys Object.entries Object.values
                        
                        // const {a :{ b } } = {a :{ b: 10 } } => { b :10 }`,
                        output: `
                        Custom Array Operations:
                        Push: 
                        [ 12, 10, 9, 14, 10, 989 ]
                        Length: 6
                        Get (index: 1 ): 10
                        Pop: 
                        [ 12, 10, 9, 14, 10 ]
                        Delete: [object Object]
                        [ 12, 9, 14, 10 ]
                        Insert: [object Object]
                        [ 12, 9, 14, 10, 2 ]
                        Enqueue: [object Object]
                        [ 12, 9, 14, 10, 2 ]
                        Dequeue: [object Object]
                        [ 12, 9, 14, 10, 2 ]
                        Javascript Array Operations:
                        1. push: 4
                        [ 1, 2, 3, 5 ]
                        2. pop: 5
                        [ 1, 2, 3 ]
                        3. length: 3
                        [ 1, 2, 3 ]
                        4. unshift (enqueue): 5
                        [ 7, 8, 1, 2, 3 ]
                        5. unshift (dequeue): 7
                        [ 8, 1, 2, 3 ]
                        6. reduce: {"1":1,"2":1,"3":1,"8":1}
                        7. reduceRight: {"1":1,"2":1,"3":1,"8":1}
                        8. forEach: 
                        8
                        1
                        2
                        3
                        9. map: 16,2,4,6
                        10. filter: 8,1,2,3
                        11a. slice: 2,3
                        11b. slice: 3
                        [ 8, 1, 2, 3 ]
                        12. splice: 2,3
                        [ 8, 1 ]
                        13. sort: 1,8
                        [ 1, 8 ]
                        14. reverse: 8,1
                        [ 8, 1 ]
                        15. toString: 8,1
                        [ 8, 1 ]
                        16. indexOf: -1
                        [ 8, 1 ]
                        17. lastIndexOf: 1
                        [ 8, 1 ]
                        18. every: false
                        [ 8, 1 ]
                        19. some: true
                        [ 8, 1 ]
                        20 join: 8,1
                        [ 8, 1 ]
                        21. find: undefined
                        [ 8, 1 ]
                        22. findIndex: undefined
                        [ 8, 1 ]
                        23. fill: 2,2
                        [ 2, 2 ]
                        24. includes: true
                        [ 2, 2 ]
                        25. concat: 2,2,1,2
                        [ 2, 2, [ 3, 4 ] ]
                        25. flat: 2,2,3,4
                        [ 2, 2, [ 3, 4 ] ]
                        26. flatMap: 2,4,2,4,2,4
                        [ 2, 2, 2 ]
                        27. entries iterator
                        0 2
                        1 2
                        2 2
                        static methods: 
                        Array(): ,
                        Array(): 2,2
                        Array(): false,false,false,false
                        Array.of(): 3
                        Array.from(): a,n,c
                        Array.from(): 0,1,2,3,4
                        Array.from(): 2,4,6
                        Array.from(): false,false
                        Array.isArray(): true
                        true
                        myRe: dbBd,bB,d
                        array destructuring: 
                        2 2`,
                      },
                      Java: {
                        code: `import java.util.*;
                        import java.io.*;
                        import java.util.stream.*;
                        
                        class Main {
                        
                          static PrintStream ps = System.out;
                        
                          static class CustomArray {
                        
                            private HashMap<Integer,Integer> data;
                            private int capacity;
                            private int length;
                        
                            CustomArray() {
                                data = new HashMap<Integer,Integer>();
                                capacity = 1;
                                length = 0;
                            }
                            int len(){
                              return length;
                            }
                        
                            @Override
                            public String toString(){
                              return data.toString();
                            }
                            int get(int index) {
                                // return data.get(index).intValue();
                                return Integer.valueOf(data.get(index));
                            }
                            int push(int element) {
                                data.put(this.length, element);
                                length++;
                                return length;
                            }
                            HashMap<Integer,Integer> pop() {
                                int item = data.get(this.length - 1).intValue();
                                data.remove(length-1);
                                length--;
                                return data;
                            }
                            int enqueue(int element) {
                                return insert(element, 0);
                            }
                            HashMap<Integer,Integer> dequeue() {
                                return delete(0);
                            }
                            HashMap<Integer,Integer> delete(int index) {
                                for (int i = index; i < this.length - 1; i++) {
                                    data.put(i,data.get(i + 1));
                                }
                                data.remove(length-1);
                                this.length--;
                                return this.data;
                            }
                            int insert(int item, int index) {
                                for (int i = this.length; i >= index; i--) {
                                    data.put(i, data.get(i - 1));
                                }
                                data.put(index, item);
                                length++;
                                return length;
                            }
                            }
                            public static void main(String args[]) {
                              CustomArray arr = new CustomArray();
                              ps.println("Custom Array Operations:");
                              ps.println("Push: ");
                              arr.push(9);
                              arr.push(8);
                              arr.push(7);
                              ps.println(arr);
                              ps.println("Length: " + arr.len());
                              ps.println("Get (index: 1): "+ arr.get(1));
                              ps.println("Pop: " + arr.pop());
                              ps.println("Delete: " + arr.delete(1));
                              ps.println("Insert: " + arr.insert(9,1));
                              ps.println(arr);
                              ps.println("Enqueue: " + arr.enqueue(10));
                              ps.println(arr);
                              ps.println("Dequeue: " + arr.dequeue());
                              ps.println("");
                              ps.println("Java Array Operations:");
                        
                              int j_arr[];
                              j_arr = new int[3];
                              ps.println(j_arr.getClass().getSuperclass());
                              j_arr[0] = 1;
                              int j_arr1[] = j_arr.clone(); 
                              ps.println(j_arr==j_arr1);
                              ps.println(Arrays.toString(j_arr1));
                              
                         // Collections API: https://www.geeksforgeeks.org/collections-in-java-2/
                             
                            List<Integer> al = Arrays.stream(j_arr1).boxed().collect(Collectors.toList());
                            //  List al = Arrays.asList(j_arr1);
                            //  Collections.addAll(al,j_arr1);
                            ps.println(Arrays.toString(al.stream().mapToInt(i -> i).toArray()));
                            //  non synchronized dynamic array
                            al.add(10);
                            ps.println(Arrays.toString(al.stream().mapToInt(i -> i).toArray()));
                            al.remove(2);
                            ps.println(al.get(0));
                        
                        //  synchronized dynamic array
                            Vector<Integer> v = new Vector();
                            v.addElement(9);
                            ps.println(v.toString());
                            Enumeration enu = v.elements();
                            while (enu.hasMoreElements()) {
                              ps.println(enu.nextElement());
                            }
                            }
                        }
                          `,
                        output: `
                        Custom Array Operations:
                        Push: 
                        {0=9, 1=8, 2=7}
                        Length: 3
                        Get (index: 1): 8
                        Pop: {0=9, 1=8}
                        Delete: {0=9}
                        Insert: 2
                        {0=9, 1=9}
                        Enqueue: 3
                        {0=10, 1=9, 2=9}
                        Dequeue: {0=9, 1=9}
                        
                        Java Array Operations:
                        class java.lang.Object
                        false
                        [1, 0, 0]
                        [1, 0, 0]
                        [1, 0, 0, 10]
                        1
                        [9]
                        9
                        `,
                      },
                      Python: {
                        output: `Custom Array Operations:
                        Append:
                        {0: 1, 1: 9}
                        Length: 2
                        Get (index: 1): 9
                        Pop:
                        {0: 1}
                        Delete: None
                        {}
                        please enter appropriate index..
                        Insert: None
                        {}
                        Enqueue: None
                        {0: 9}
                        Dequeue: None
                        {}
                        
                        List operations:
                        p_arr = [9, 8, 1]
                        1. reverse: [1, 8, 9]
                        2. sort: None
                        3. sorted: [9, 8, 1]
                        4. min: 1
                        5. max: 9
                        6. sum: 18
                        7. index: 0
                        8. map: [2, 16, 18]
                        9. filter: [1]
                        10. extend: [1, 8, 9, 9, 8]
                        11. pop: [1, 8, 9, 9]
                        12. dequeue: [8, 9, 9]
                        13. enqueue: [8, 8, 9, 9]
                        14. append: [8, 8, 9, 9, 8]
                        15. insert: [8, 9, 8, 9, 9, 8]
                        16. faltten using list comprehension[1, 2, 2, 4]
                        p_arr = [9, 8, 9]
                        17a. reduce:26
                        17b. reduce:26
                        18. slice:[9, 8]
                        19. find:False
                        20. all(js-> every):False
                        21. any(js -> some):True
                        `,
                        code: `import ctypes
class CustomArray():
  def __init__(self):
    self.length = 0
    self.capacity = 1 
    self.data = {}
    # self.A = self.make_array(self.capacity)
    # creates object of specified capacity
    
  def __len__(self):
    return self.length

  def __repr__(self):
    return str(self.data)
  # or __str__
  # __str__() is more human friendly whereas __repr__() is more information rich and machine friendly and can be used to reconstruct the object. In fact, we can use repr() function with eval() to construct the object.
  # x == eval(repr(x))

  def __getitem__(self, k):
    if not 0 <= k <self.length:
      return IndexError('K is out of bounds !')
    return self.data[k]
    
  def append(self, ele):
    self.data[self.length] = ele
    self.length += 1

  def pop(self):
    if self.length==0:
      print("Array is empty deletion not Possible")
      return
    del self.data[self.length-1]
    self.length-=1
    return self.data
  
  def enqueue(self,element):
    self.insert(element,0)

  def dequeue(self):
    self.delete(0)    

  def delete(self,index):
    if self.length==0:
      print("Array is empty deletion not Possible")
      return
    if index<0 or index>=self.length:
      return IndexError("Index out of bound....deletion not possible")		
    if index==self.length-1:
      del self.data[index]
      self.length-=1
      return		
    for i in range(index,self.length-1):
      self.data[i]=self.data[i+1]			
    del self.data[self.length-1]
    self.length-=1
    return self.data

  def insert(self,item,index):
    if index < 0 or index > self.length:
      print("please enter appropriate index..")
      return
    for i in range(self.length-1,index-1,-1):
      self.data[i+1]=self.data[i]
    self.data[index]=item
    self.length+=1
    return self.data
    
  # def _resize(self, new_cap):
  #   B = self.make_array(new_cap) 
  #   for k in range(self.length): 
  #     B[k] = self.data[k]
  #   self.data = B 
  #   self.capacity = new_cap 
    
  # def make_array(self, new_cap):
  #   return (new_cap * ctypes.py_object)()

arr = CustomArray()
print('Custom Array Operations:')
print('Append:')
arr.append(1)
arr.append(9)
print(arr)
print(f'Length: {len(arr)}')
# print(arr.__dict__)
print(f'Get (index: 1): {arr[1]}')
print(f'Pop:')
arr.pop()
print(arr)
print(f'Delete: {arr.delete(0)}')
print(arr)
print(f'Insert: {arr.insert(1,1)}')
print(arr)
print(f'Enqueue: {arr.enqueue(9)}')
print(arr)
print(f'Dequeue: {arr.dequeue()}')
print(arr)
print('')
print('List operations:')
p_arr = [9,8,1]
print(f'p_arr = {p_arr}')
print('1. reverse: ' + str(p_arr[::-1]))
print('2. sort: ' + str(p_arr.sort()))
print('3. sorted: ' + str(sorted(p_arr,reverse=True)))
print('4. min: ' + str(min(p_arr)))
print('5. max: ' + str(max(p_arr)))
print('6. sum: ' + str(sum(p_arr)))
print('7. index: ' + str(p_arr.index(1)))
print('8. map: ' + str(list(map(lambda x:x*2,p_arr))))
print('9. filter: ' + str(list(filter(lambda x:x==1,p_arr))))
p_arr.extend([9,8])
print('10. extend: ' + str(p_arr))
p_arr.pop()
print('11. pop: ' + str(p_arr))
p_arr.pop(0)
print('12. dequeue: ' + str(p_arr))
p_arr.insert(0,8)
print('13. enqueue: ' + str(p_arr))
p_arr.append(8)
print('14. append: ' + str(p_arr))
p_arr.insert(1,9)
print('15. insert: ' + str(p_arr))
p_arr = [[1,2],[2,4]]
print('16. faltten using list comprehension'+ str([y for x in p_arr for y in x ]))
import functools
import operator
p_arr = [*[9,8],9] # unpacking
print(f'p_arr = {p_arr}')
print('17a. reduce:' + str(functools.reduce(operator.add,p_arr)))
print('17b. reduce:' + str(functools.reduce(lambda acc,curr: acc+curr,p_arr)))
print('18. slice:' + str(p_arr[:2]))
print('19. find:' + str(2 in  p_arr))
print('20. all(js-> every):' + str(all([True,False])))
print('21. any(js -> some):' + str(any([True,False])))

# def names_tuple(*args):
#     return args
# names_tuple('Michael', 'John', 'Nancy')
# # ('Michael', 'John', 'Nancy')

# def names_dict(**kwargs):
#     return kwargs
# names_dict(Jane = 'Doe')
# {'Jane': 'Doe'}                        
                        `,
                      },
                      "C++": {
                        code: `#include <iostream>
                      #include <bits/stdc++.h>
                      #include <array>
                      
                      using namespace std;
                      
                      class CustomArray{
                        private:
                        int length;
                        map<int,int> data;
                      
                        public:
                        int len(){
                          return this->length;
                        }
                      
                        void print(){
                          string s;
                          for(auto i=data.begin();i != data.end();i++){
                            s+= to_string(i -> second) + " ";
                           }
                          cout<< s << endl;
                        }
                      
                        int get(int index){
                         return this -> data[index];
                        }
                      
                        int push(int element) {
                          this -> data[this -> length] = element;
                          this -> length+=1;
                          return this -> length;
                        }
                        
                        map<int,int> pop() {
                          int item = data[length - 1];
                          auto it = data.end();
                          it--;
                          data.erase(it);
                          length-=1;
                          return data;
                        }
                      
                        int insert(int ele,int index) {
                          if(ele==length-1){
                            push(ele);
                          }else{
                          for(auto i = length-1; i > index; i--) {
                            data[i+1] = data[i];
                          }
                          data[index] = ele;
                          length+=1;
                          }
                          return length;
                        }
                      
                        map<int,int> remove(int index) {
                          for(auto i = index; i < length-1; i++) {
                            data[i] = data[i + 1];
                          }
                          auto it = data.end();
                          it--;
                          data.erase(it);    length-=1;
                          return data;
                        }
                      
                        map<int,int> dequeue() {
                           return this -> remove(0);
                        }
                      
                        int enqueue(int ele) {
                          return insert(ele,0);
                        }
                      
                        CustomArray(){
                          length = 0;
                          data = {}; 
                        };
                      
                      };
                      
                      int main(){
                        CustomArray arr;
                        cout << "Custom Array Operations:" << endl;
                      
                        cout << "Push: " << endl;
                        arr.push(9);
                        arr.push(8);
                        arr.push(1);
                        arr.push(7);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Get (index: 1 ): " << arr.get(1) << endl;
                        cout << "Pop: " << endl;
                        arr.pop();
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Delete: " << endl;
                        arr.remove(1);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Insert: " << endl;
                        arr.insert(7,0);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Enqueue: " << endl;
                        arr.enqueue(10);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Dequeue: " << endl;
                        arr.dequeue();
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                      
                        cout << "C++ Array Operations: "<< endl;
                      
                        array<int,6> ar = {1, 2, 3, 4, 5, 6};
                      
                        cout << "1. get: " << get<0>(ar) << " , " << ar[0] << endl;
                        cout << "2. size: " << ar.size() << endl;
                        cout << "3. maxsize: " << ar.max_size() << endl;
                        cout << "4. size: " << ar.size() << endl;
                        cout << "5. front: " << ar.front() << endl;
                        cout << "6. back: " << ar.back() << endl;
                        ar.fill(9);
                        cout << "7. fill: " << ar[0] << endl;
                      
                        // stl -> algorithms , functions , containers , iterators
                        // https://www.geeksforgeeks.org/the-c-standard-template-library-stl/
                      
                        return 0;
                      }
                      `,
                        output: `
                      Custom Array Operations:
Push: 
9 8 1 7 
Length: 4
Get (index: 1 ): 8
Pop: 
9 8 1 
Length: 3
Delete: 
9 1 
Length: 2
Insert: 
7 1 1 
Length: 3
Enqueue: 
10 1 1 1 
Length: 4
Dequeue: 
1 1 1 
Length: 3
C++ Array Operations: 
1. get: 1 , 1
2. size: 6
3. maxsize: 6
4. size: 6
5. front: 1
6. back: 6
7. fill: 9
                      `,
                      },
                      Kotlin: {
                        code: `import java.io.PrintStream

                        internal object Main {
                            var ps: PrintStream = System.out
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val arr = CustomArray()
                                ps.println("Custom Array Operations:")
                                ps.println("Push: ")
                                arr.push(9)
                                arr.push(8)
                                arr.push(7)
                                ps.println(arr)
                                ps.println("Length: " + arr.len())
                                ps.println("Get (index: 1): " + arr[1])
                                ps.println("Pop: " + arr.pop())
                                ps.println("Delete: " + arr.delete(1))
                                ps.println("Insert: " + arr.insert(9, 1))
                                ps.println(arr)
                                ps.println("Enqueue: " + arr.enqueue(10))
                                ps.println(arr)
                                ps.println("Dequeue: " + arr.dequeue())
                            }
                        
                            internal class CustomArray {
                                private val data: HashMap<Int, Int?> = HashMap()
                                private val capacity: Int = 1
                                private var length: Int = 0
                        
                        //        init {
                        //            length = 0
                        //        }
                        
                                fun len(): Int {
                                    return length
                                }
                        
                                override fun toString(): String {
                                    return data.toString()
                                }
                        
                                operator fun get(index: Int): Int {
                                    // return data.get(index).intValue();
                                    return Integer.valueOf(data[index]!!)
                                }
                        
                                fun push(element: Int): Int {
                                    data[length] = element
                                    length++
                                    return length
                                }
                        
                                fun pop(): HashMap<Int, Int?> {
                                    val item = data[length - 1]!!.toInt()
                                    data.remove(length - 1)
                                    length--
                                    return data
                                }
                        
                                fun enqueue(element: Int): Int {
                                    return insert(element, 0)
                                }
                        
                                fun dequeue(): HashMap<Int, Int?> {
                                    return delete(0)
                                }
                        
                                fun delete(index: Int): HashMap<Int, Int?> {
                                    for (i in index until length - 1) {
                                        data[i] = data[i + 1]
                                    }
                                    data.remove(length - 1)
                                    length--
                                    return data
                                }
                        
                                fun insert(item: Int, index: Int): Int {
                                    for (i in length downTo index) {
                                        data[i] = data[i - 1]F
                                    }
                                    data[index] = item
                                    length++
                                    return length
                                }
                            }
                        }`,
                        output: `
                        Custom Array Operations:
                        Push: 
                        {0=9, 1=8, 2=7}
                        Length: 3
                        Get (index: 1): 8
                        Pop: {0=9, 1=8}
                        Delete: {0=9}
                        Insert: 2
                        {0=9, 1=9}
                        Enqueue: 3
                        {0=10, 1=9, 2=9}
                        Dequeue: {0=9, 1=9}
                                                `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Linked List:</b>
                </Span>
                <Span>
                  It consists of nodes which are stored in non contiguos memory
                  locations. It's size is dynamic. Node consists of a data field
                  and links to adjacent neighbours. These links are also known
                  as self referential pointers as they are referring to other
                  nodes of same type.
                </Span>
                <Span>
                  Types : Singly Linked List, Doubly Linked List , Circular
                  Linked List ( Singly + Doubly ) And Header Linked List
                </Span>
                <b>Singly Linked List Implementation :</b>
                <CodeEditor
                  options={{
                    title: "Singly Linked List Implementation",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = null
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head == null) {
                                  this.head = node
                              } else {
                                  let temp = this.head
                                  while (temp.next) {
                                      temp = temp.next
                                  }
                                  temp.next = node
                              }
                          }
                          pop(){
                            if (this.head == null) {
                                return
                            }else if(this.head.next==null){
                              this.head=null
                              return
                            } 
                            else {
                                let temp = this.head
                                while (temp.next.next) {
                                  temp = temp.next
                                }
                                const last = temp.next 
                                temp.next = null
                      // delete temp doesn't work , we can delete object attributes but
                      //  not object itself in javascript
                              }
                          }
                          count() {
                              var count = 0
                              let node = this.head;
                              while (node != null) {
                                  count += 1
                                  node = node.next
                              }
                              return count
                          }
                          get(index){
                            if(this.head == null) return
                            else if(index>=this.count()) return
                            else {
                               let i=0
                               let temp = this.head
                               while(i < index){
                                  temp=temp.next
                                  i++
                               }
                               return temp.data
                            }
                          }
                          print() {
                              let temp = this.head
                              let output = ""
                              while (temp != null) {
                                  output+=temp.data + " "
                                  temp = temp.next
                              }
                              console.log(output)
                          }
                          insert(ele,index){
                            if(this.head==null || index > this.count()) return
                            let node = new Node(ele)
                              if (index == 0) {
                              node.next = this.head;
                              this.head = node;
                              } else {
                                  let it = 0,prev,curr;
                                  curr = this.head;
                                  prev = curr;
                                  while (it < index) {
                                      it++;
                                      prev = curr;
                                      curr = curr.next;
                                  }
                                  node.next = curr;
                                  prev.next = node;
                              }
                            return this.count()
                          }
                          delete(index){
                            if(this.head==null || index >= this.count()) return
                            else {
                              let curr,prev,it = 0
                              curr = this.head
                              prev = curr
                              if(index===0){
                                this.head = curr.next
                              }else{
                                while(it<index){
                                  it++
                                  prev = curr
                                  curr = curr.next
                                }  
                                prev.next = curr.next
                              }
                              return curr.data
                            }
                          }
                          enqueue(ele){
                             this.insert(ele,0)
                          }
                          dequeue(){
                             this.delete(0)
                          }
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Singly Linked List Operations:")
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      console.log("Pop:")
                      l.pop()
                      l.print()
                      console.log("Count: " + l.count())
                      console.log("Get (Index 1): " + l.get(1))
                      console.log("Insert:")
                      l.insert(7,1)
                      l.print()
                      console.log("Delete:")
                      l.delete(1)
                      l.print()
                      console.log("Enqueue:")
                      l.enqueue(5)
                      l.print()
                      console.log("Dequeue:")
                      l.dequeue()
                      l.print()
                      `,
                        output: `
                        Singly Linked List Operations:
                        Push:
                        9 8 10 
                        Pop:
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert:
                        9 7 8 
                        Delete:
                        9 8 
                        Enqueue:
                        5 9 8 
                        Dequeue:
                        9 8 
                        `,
                      },
                      Java: {
                        code: `
                      import java.io.*;

class Node{
int data;
Node next;
Node(int d){
data = d;
next = null;
}
}

class Main {

static PrintStream ps = System.out;

Node head;

public void push(int data){
Node node = new Node(data);
if(head==null){
head = node;
}else{
Node q = head;
while(q.next != null){
q=q.next;
}
q.next = node;
}
}

void pop(){
  if (head == null) {
      return;
  } else if (head.next == null) {
      head = null;
      return;
   } else {
      Node temp = head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      Node last = temp.next;
      temp.next = null;
  }
}

public int count(){
int count = 0;
Node p = head;
while(p!=null){
count++;
p = p.next;
}
return count;
}

int get(int index) {
  if (head == null) return -1;
  else if (index >= count()) return -1;
  else {
    int i = 0;
    Node temp = head;
    while (i < index) {
      temp = temp.next;
      i++;
    }
  return temp.data;
  }
  }
  
  int insert(int ele,int index){
    if (this.head == null || index >  this.count()) return -1;
    Node node = new Node(ele);
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      Node curr,prev;
      curr = this.head;
      prev = curr; 
      int it = 0;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    return this.count();
  }

  int delete(int index){
     if (this.head == null || index >= this.count()) return -1;
        else {
            Node curr, prev;
            int it = 0;
            curr = this.head;
            prev = curr;
            if (index == 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            return curr.data;
        }
  }

  int enqueue(int ele)
  {
    return this.insert(ele,0);
  } 

  int dequeue(){
    return this.delete(0);
  }

public void print(){
Node temp = head;
StringBuilder sb = new StringBuilder();
while(temp!=null){
sb.append(temp.data + " ");
temp=temp.next;
}
ps.println(sb.toString());
}

public static void main(String[] args) {
Main l = new Main();
l.push(2);
l.push(4);
l.push(3);
l.push(5);
l.push(6);
ps.println("Singly Linked List Operations:");
ps.println("Push:");
l.push(4);
l.print();
ps.println("Pop: ");
l.pop();
l.print();
ps.println("Count: "+ l.count());
ps.println("Get (Index 1): "+ l.get(1));
ps.println("Delete: ");
l.delete(2);
l.print();
ps.println("Enqueue: ");
l.enqueue(7);
l.print();
ps.println("Dequeue: ");
l.dequeue();
l.print();
}
}
                      `,
                        output: `
                      Singly Linked List Operations:
Push:
2 4 3 5 6 4 
Pop: 
2 4 3 5 6 
Count: 5
Get (Index 1): 4
Delete: 
2 4 5 6 
Enqueue: 
7 2 4 5 6 
Dequeue: 
2 4 5 6 
                      `,
                      },
                      Python: {
                        code: `class Node:
  def __init__(self,data):
    self.data=data
    self.next=None

class LinkedList:

  def __init__(self):
    self.head = None

  def append(self,data): 
    node = Node(data)
    if self.head is None:
      self.head = node
    else:
      temp = self.head
      while temp.next is not None:
        temp= temp.next
      temp.next = node

  def pop(self):
    if self.head is None:
      return
    elif self.head.next is None:
      self.head = None
      del self.head
      return
    else:
      temp = self.head
      while temp.next.next is not None:
        temp = temp.next
      last = temp.next
      temp.next = None
      del last

  def display(self):
    temp = self.head
    while temp is not None:
      print(temp.data,end =' ')
      temp = temp.next
    print('')

  def get(self,index):
    if self.head is None:
      return
    elif index >= self.count():                  
      return
    else:
      i = 0
      temp = self.head
      while i < index:
        temp = temp.next
        i+=1
    return temp.data
            
  def count(self):
    x=0
    temp=self.head
    while temp is not None:
      x+=1
      temp=temp.next
    return x

  def insert(self,ele,index):
    if self.head is None or index > self.count  (): 
      return
    node = Node(ele)
    if index == 0:
      node.next = self.head;
      self.head = node;
    else:
      it = 0
      prev = curr = None
      curr = self.head;
      prev = curr
      while it < index:
        it+=1
        prev = curr
        curr = curr.next
      node.next = curr
      prev.next = node
    return self.count()

  def delete(self,index):
    if self.head is None or index >= self.count():
      return
    else:
      curr = prev = it = 0
      curr = self.head
      prev = curr
      if index == 0:
        self.head = curr.next
      else:
        while it < index:
          it+=1
          prev = curr
          curr = curr.next
        prev.next = curr.next
    return curr.data

  def enqueue(self,ele):
    return self.insert(ele,0)

  def dequeue(self):
    return self.delete(0)

l = LinkedList()
print("Singly Linked List Operations:")
print("Append:")
l.append(2)
l.append(4)
l.append(3)
l.display()
print("Pop:")
l.pop()
l.display()
print("Count: " + str(l.count()))
print("Get (Index 1): " + str(l.get(2)))
print("Insert: ")
l.insert(7,1)
l.display()
print("Enqueue: ")
l.enqueue(9)
l.display()
print("Delete: ")
l.delete(1)
l.display()
print("Dequeue: ")
l.dequeue()
l.display()                      
                        `,
                        output: `
                        Singly Linked List Operations:
                        Append:
                        2 4 3 
                        Pop:
                        2 4 
                        Count: 2
                        Get (Index 1): None
                        Insert: 
                        2 7 4 
                        Enqueue: 
                        9 2 7 4 
                        Delete: 
                        9 7 4 
                        Dequeue: 
                        7 4  
                      `,
                      },
                      "C++": {
                        code: `
                      #include<iostream>
using namespace std;

struct Node {
int data;
Node *next; // self referential pointer
Node() : data(0), next(nullptr) {}
Node(int x) : data(x), next(nullptr) {}
Node(int x, Node *next) : data(x), next(next) {}
};

// class Node {
// public:
//     int data;
//     Node* next;
// };

class LinkedList {
 
private:
Node* head;

public:

LinkedList(){
  this -> head = NULL;
}

void push(int data){
  Node* node = new Node(data);
  if (this -> head == nullptr) {
    this -> head = node;
  } else {
    Node* temp = this->head;
    while (temp -> next) {
      temp = temp -> next;
    }
    temp->next = node;
  }
}

void pop(){
  if (this->head == nullptr) {
    return;
   } else if(this->head->next == nullptr){
    this->head = nullptr;
    return;
   } else {
    Node* temp = this->head;
    while (temp->next->next) {
      temp = temp->next;
    }
    Node* last = temp->next;
    temp->next = nullptr;
    delete last;
  }
}

int count(){
  int len = 0;
  Node* node = this -> head;
  while (node != nullptr) {
    len += 1;
    node = node -> next;
  }
  return len;
}

void display(){
   Node* temp = head;
   string output;
   while(temp != nullptr){
    output += to_string(temp->data) + " ";
    temp = temp -> next;
   } 
   cout << output << endl;
}

int get(int index){
   if(this->head == nullptr) return -1;
   else if(index >= this->count()){
     return -1;
   }else{
     int i = 0;
     Node* temp = this -> head;
     while(i < index){
       temp = temp -> next;
       i++;
     } 
     return temp->data;
   }
}

int insert(int ele,int index){
  if(this->head == nullptr || index > this->count()) return -1;
    Node* node = new Node(ele);
    if (index == 0) {
      node->next = this->head;
      this->head = node;
    } else {
      int it = 0;
      Node *prev, *curr;
      curr = this->head;
      prev = curr;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr->next;
      }
      node->next = curr;
      prev->next = node;
    }
    return this->count();
}

int remove(int index){
  if (this->head == nullptr || index >= this->count()) 
  return -1;
  else {
    Node *curr, *prev;
    int it = 0;
    curr = this->head;
    prev = curr;
    if (index == 0) {
      this->head = curr->next;
    } else {
    while (it < index) {
      it++;
      prev = curr;
      curr = curr->next;
    }
    prev->next = curr->next;
    }
    return curr->data;
  }
  return -1;
}

int enqueue(int data){
   return this->insert(data,0);
}

int dequeue(){
  return this -> remove(0);
}

};

int main(){
  LinkedList l;
  cout << "Singly Linked List Operations:" << endl;
  cout << "Push:" << endl;
  l.push(9);
  l.push(8);
  l.push(10);
  l.display();
  cout << "Pop:" << endl;
  l.pop();
  l.display();
  cout << "Count: " << l.count() << endl;
  cout << "Get (Index 1): " <<
  l.get(1) << endl;
  cout << "Insert: " << endl;
  l.insert(9,2);
  l.display();
  cout << "Delete: " << endl;
  l.remove(2);
  l.display();
  cout << "Enqueue: " << endl;
  l.enqueue(8);
  l.display();
  cout << "Dequeue: " << endl;
  l.dequeue();
  l.display();
  return 0;
}
                      `,
                        output: `
                        Singly Linked List Operations:
                        Push:
                        9 8 10 
                        Pop:
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert: 
                        9 8 9 
                        Delete: 
                        9 8 
                        Enqueue: 
                        8 9 8 
                        Dequeue: 
                        9 8 
                      `,
                      },
                      Kotlin: {
                        code: `
                      internal class Node(var data: Int) {
                        var next: Node? = null
                    }
                    
                    internal class Main {
                        var head: Node? = null
                        fun push(data: Int) {
                            val node = Node(data)
                            if (head == null) {
                                head = node
                            } else {
                                var q = head
                                while (q!!.next != null) {
                                    q = q.next
                                }
                                q.next = node
                            }
                        }
                    
                        fun pop() {
                            if (head == null) {
                                return
                            } else if (head!!.next == null) {
                                head = null
                                return
                            } else {
                                var temp = head
                                while (temp!!.next!!.next != null) {
                                    temp = temp.next
                                }
                                val last = temp.next
                                temp.next = null
                            }
                        }
                    
                        fun count(): Int {
                            var count = 0
                            var p = head
                            while (p != null) {
                                count++
                                p = p.next
                            }
                            return count
                        }
                    
                        operator fun get(index: Int): Int {
                            return if (head == null) -1 else if (index >= count()) -1 else {
                                var i = 0
                                var temp = head
                                while (i < index) {
                                    temp = temp!!.next
                                    i++
                                }
                                temp!!.data
                            }
                        }
                    
                        fun insert(ele: Int, index: Int): Int {
                            if (head == null || index > this.count()) return -1
                            val node = Node(ele)
                            if (index == 0) {
                                node.next = head
                                head = node
                            } else {
                                var curr: Node?
                                var prev: Node?
                                curr = head
                                prev = curr
                                var it = 0
                                while (it < index) {
                                    it++
                                    prev = curr
                                    curr = curr!!.next
                                }
                                node.next = curr
                                prev!!.next = node
                            }
                            return this.count()
                        }
                    
                        fun delete(index: Int): Int {
                            return if (head == null || index >= this.count()) -1 else {
                                var curr: Node?
                                var prev: Node?
                                var it = 0
                                curr = head
                                prev = curr
                                if (index == 0) {
                                    head = curr!!.next
                                } else {
                                    while (it < index) {
                                        it++
                                        prev = curr
                                        curr = curr!!.next
                                    }
                                    prev!!.next = curr!!.next
                                }
                                curr.data
                            }
                        }
                    
                        fun enqueue(ele: Int): Int {
                            return insert(ele, 0)
                        }
                    
                        fun dequeue(): Int {
                            return delete(0)
                        }
                    
                        fun print() {
                            var temp = head
                            val sb = StringBuilder()
                            while (temp != null) {
                                sb.append(temp.data.toString() + " ")
                                temp = temp.next
                            }
                            ps.println(sb.toString())
                        }
                    
                        companion object {
                            var ps = System.out
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val l = Main()
                                l.push(2)
                                l.push(4)
                                l.push(3)
                                l.push(5)
                                l.push(6)
                                ps.println("Singly Linked List Operations:")
                                ps.println("Push:")
                                l.push(4)
                                l.print()
                                ps.println("Pop: ")
                                l.pop()
                                l.print()
                                ps.println("Count: " + l.count())
                                ps.println("Get (Index 1): " + l[1])
                                ps.println("Delete: ")
                                l.delete(2)
                                l.print()
                                ps.println("Enqueue: ")
                                l.enqueue(7)
                                l.print()
                                ps.println("Dequeue: ")
                                l.dequeue()
                                l.print()
                            }
                        }
                    }
                      `,
                        output: `
                      Singly Linked List Operations:
                      Push:
                      2 4 3 5 6 4 
                      Pop: 
                      2 4 3 5 6 
                      Count: 5
                      Get (Index 1): 4
                      Delete: 
                      2 4 5 6 
                      Enqueue: 
                      7 2 4 5 6 
                      Dequeue: 
                      2 4 5 6 
                      `,
                      },
                    },
                  }}
                />
                <b>Doubly Linked List Implementation :</b>
                <CodeEditor
                  options={{
                    title: "Doubly Linked List Implementation",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                              this.prev = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = null
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head == null) {
                                  this.head = node
                              } else {
                                  let temp = this.head
                                  while (temp.next) {
                                      temp = temp.next
                                  }
                                  temp.next = node
                                  node.prev = temp
                              }
                          }
                          pop() {
                              if (this.head == null) {
                                  return
                              } else if (this.head.next == null) {
                                  this.head = null
                                  return
                              } else {
                                  let temp = this.head
                                  while (temp.next.next) {
                                      temp = temp.next
                                  }
                                  const last = temp.next
                                  temp.next = null
                                  // delete temp doesn't work , we can delete object attributes but
                                  //  not object itself in javascript
                              }
                          }
                          count() {
                              var count = 0
                              let node = this.head;
                              while (node != null) {
                                  count += 1
                                  node = node.next
                              }
                              return count
                          }
                          get(index) {
                              if (this.head == null) return
                              else if (index >= this.count()) return
                              else {
                                  let i = 0
                                  let temp = this.head
                                  while (i < index) {
                                      temp = temp.next
                                      i++
                                  }
                                  return temp.data
                              }
                          }
                          print() {
                              let temp = this.head
                              let output = ""
                              while (temp != null) {
                                  output += temp.data + " "
                                  temp = temp.next
                              }
                              console.log(output)
                          }
                          insert(ele, index) {
                              if (this.head == null || index > this.count()) return
                              let node = new Node(ele)
                              if (index == 0) {
                                  node.next = this.head;
                                  this.head.prev = node
                                  this.head = node;
                              } else {
                                  let it = 0,
                                      prev, curr;
                                  curr = this.head;
                                  prev = curr;
                                  while (it < index) {
                                      it++;
                                      prev = curr;
                                      curr = curr.next;
                                  }
                                  node.next = curr;
                                  curr.prev = node;
                                  prev.next = node;
                                  node.prev = prev
                              }
                              return this.count()
                          }
                          delete(index) {
                              if (this.head == null || index >= this.count()) return
                              else {
                                  let curr, prev, it = 0
                                  curr = this.head
                                  prev = curr
                                  if (index === 0) {
                                      this.head = curr.next
                                      curr.next.prev = null
                                  } else {
                                      while (it < index) {
                                          it++
                                          prev = curr
                                          curr = curr.next
                                      }
                                      prev.next = curr.next
                                      curr.next.prev = prev
                                  }
                                  return curr.data
                              }
                          }
                          enqueue(ele) {
                              this.insert(ele, 0)
                          }
                          dequeue() {
                              this.delete(0)
                          }
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Doubly Linked List Operations:")
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      console.log("Pop:")
                      l.pop()
                      l.print()
                      console.log("Count: " + l.count())
                      console.log("Get (Index 1): " + l.get(1))
                      console.log("Insert:")
                      l.insert(7, 1)
                      l.print()
                      console.log("Delete:")
                      l.delete(1)
                      l.print()
                      console.log("Enqueue:")
                      l.enqueue(5)
                      l.print()
                      console.log("Dequeue:")
                      l.dequeue()
                      l.print()                      
                        `,
                        output: `Doubly Linked List Operations:
                        Push:
                        9 8 10 
                        Pop:
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert:
                        9 7 8 
                        Delete:
                        9 8 
                        Enqueue:
                        5 9 8 
                        Dequeue:
                        9 8 `,
                      },
                    },
                  }}
                />
                <b>Circular Doubly Linked List Implementation :</b>
                <CodeEditor
                  options={{
                    title: "Circular Doubly Linked List Implementation",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                              this.prev = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = null
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head == null) {
                                  this.head = node
                                  this.head.prev = this.head
                                  this.head.next = this.head
                              } else {
                                  let temp = this.head
                                  if(temp.next === this.head){
                                    temp.next = node
                                    node.prev = temp
                                    node.next = this.head 
                                  }else{
                                  while (temp.next !== this.head) {
                                      if(temp)
                                      temp = temp.next
                                  }
                                  temp.next = node
                                  node.prev = temp
                                  node.next= this.head
                                  }
                      
                              }
                          }
                          pop() {
                              if (this.head == null) {
                                  return
                              } else if (this.head.next == null) {
                                  this.head = null
                                  return
                              } else {
                                  let temp = this.head
                                  while (temp.next.next !== this.head) {
                                      temp = temp.next
                                  }
                                  const last = temp.next
                                  temp.next = this.head
                                  // delete temp doesn't work , we can delete object attributes but
                                  //  not object itself in javascript
                              }
                          }
                          count() {
                              var count = 0
                              let node = this.head;
                              if(this.head == null) return count
                              count = 1
                              while (node.next != this.head) {
                                  count += 1
                                  node = node.next
                              }
                              return count
                          }
                          get(index) {
                              if (this.head == null) return
                              else if (index >= this.count()) return
                              else {
                                  let i = 0
                                  let temp = this.head
                                  while (i < index) {
                                      temp = temp.next
                                      i++
                                  }
                                  return temp.data
                              }
                          }
                          print() {
                              let temp = this.head
                              let output = ""
                              while (temp.next != this.head) {
                                  output += temp.data + " "
                                  temp = temp.next
                              }
                              if(temp)
                              output += temp.data + " "
                              console.log(output)
                          }
                          insert(ele, index) {
                              if (this.head == null || index > this.count()) return
                              let node = new Node(ele)
                              if (index == 0) {
                                  node.next = this.head;
                                  this.head.prev = node
                                  let temp = this.head
                                  while(temp.next !== this.head) temp = temp.next
                                  temp.next = node
                                  this.head= node
                              } else {
                                  let it = 0,
                                      prev, curr;
                                  curr = this.head;
                                  prev = curr;
                                  while (it < index) {
                                      it++;
                                      prev = curr;
                                      curr = curr.next;
                                  }
                                  node.next = curr;
                                  curr.prev = node;
                                  prev.next = node;
                                  node.prev = prev
                              }
                              return this.count()
                          }
                          delete(index) {
                              if (this.head == null || index >= this.count()) return
                              else {
                                  let curr, prev, it = 0
                                  curr = this.head
                                  prev = curr
                                  if (index === 0) {
                                      let temp = this.head
                                      while(temp.next !== this.head) temp = temp.next
                                      temp.next = this.head.next
                                      this.head = curr.next
                                      curr.next.prev = this.head
                                  } else {
                                      while (it < index) {
                                          it++
                                          prev = curr
                                          curr = curr.next
                                      }
                                      prev.next = curr.next
                                      curr.next.prev = prev
                                  }
                                  return curr.data
                              }
                          }
                          enqueue(ele) {
                              this.insert(ele, 0)
                          }
                          dequeue() {
                              this.delete(0)
                          }
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Circular Doubly Linked List Operations:")
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      console.log("Pop:")
                      l.pop()
                      l.print()
                      console.log("Count: " + l.count())
                      console.log("Get (Index 1): " + l.get(1))
                      console.log("Insert:")
                      l.insert(7, 1)
                      l.print()
                      console.log("Delete:")
                      l.delete(1)
                      l.print()
                      console.log("Enqueue:")
                      l.enqueue(5)
                      l.print()
                      console.log("Dequeue:")
                      l.dequeue()
                      l.print()
                      `,
                        output: `Circular Doubly Linked List Operations:
                        Push:
                        9 8 10 
                        Pop:
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert:
                        9 7 8 
                        Delete:
                        9 8 
                        Enqueue:
                        5 9 8 
                        Dequeue:
                        9 8 
                        Count: 2`,
                      },
                    },
                  }}
                />
                <Span>Header Linked List</Span>
                <Span>
                  A header node is a special node that is found at the beginning
                  of the list. A list that contains this type of node, is called
                  the header-linked list. This type of list is useful when
                  information ( more oftenly length of list ) other than that
                  found in each node is needed. It's a modified version of
                  singly linked list.
                </Span>
                <Span>Types:</Span>
                <Span>
                  <b>Grounded Header Linked List</b>
                </Span>
                <Span>
                  It is a list whose last node contains the NULL pointer. In the
                  header linked list the start pointer always points to the
                  header node. start -&lt; next = NULL indicates that the
                  grounded header linked list is empty.
                </Span>
                <Span>
                  <b>Circular Header Linked List</b>
                </Span>
                <Span>
                  A list in which last node points back to the header node is
                  called circular linked list. The chains do not indicate first
                  or last nodes. In this case, external pointers provide a frame
                  of reference because last node of a circular linked list does
                  not contain the NULL pointer.
                </Span>
                <b>Grounded Header Linked List Implementation :</b>
                <CodeEditor
                  options={{
                    title: "Grounded Header Linked List Implementation",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = new Node(0)
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head.next == null) {
                                  this.head.next = node
                              } else {
                                  let temp = this.head.next
                                  while (temp.next) {
                                      temp = temp.next
                                  }
                                  temp.next = node
                              }
                              this.head.data = this.count()
                          }
                          pop() {
                              if (this.head.next == null) {
                                  return
                              } else if (this.head.next.next == null) {
                                  this.head.next = null
                                  return
                              } else {
                                  let temp = this.head.next
                                  while (temp.next.next) {
                                      temp = temp.next
                                  }
                                  const last = temp.next
                                  temp.next = null
                                  this.head.data = this.count()
                                  // delete temp doesn't work , we can delete object attributes but
                                  //  not object itself in javascript
                              }
                          }
                          count() {
                              var count = 0
                              let node = this.head.next;
                              while (node != null) {
                                  count += 1
                                  node = node.next
                              }
                              return count
                          }
                          get(index) {
                              if (this.head.next == null) return
                              else if (index >= this.count()) return
                              else {
                                  let i = 0
                                  let temp = this.head.next
                                  while (i < index) {
                                      temp = temp.next
                                      i++
                                  }
                                  return temp.data
                              }
                          }
                          print() {
                              let temp = this.head.next
                              let output = ""
                              while (temp != null) {
                                  output += temp.data + " "
                                  temp = temp.next
                              }
                              console.log(output)
                          }
                          insert(ele, index) {
                              if (this.head.next == null || index > this.count()) return
                              let node = new Node(ele)
                              if (index == 0) {
                                  node.next = this.head.next;
                                  this.head.next = node;
                              } else {
                                  let it = 0,
                                      prev, curr;
                                  curr = this.head.next;
                                  prev = curr;
                                  while (it < index) {
                                      it++;
                                      prev = curr;
                                      curr = curr.next;
                                  }
                                  node.next = curr;
                                  prev.next = node;
                              }
                              this.head.data = this.count()
                              return this.count()
                          }
                          delete(index) {
                              if (this.head.next == null || index >= this.count()) return
                              else {
                                  let curr, prev, it = 0
                                  curr = this.head.next
                                  prev = curr
                                  if (index === 0) {
                                      this.head.next = curr.next
                                  } else {
                                      while (it < index) {
                                          it++
                                          prev = curr
                                          curr = curr.next
                                      }
                                      prev.next = curr.next
                                  }
                                  this.head.data = this.count()
                                  return curr.data
                              }
                          }
                          enqueue(ele) {
                              this.insert(ele, 0)
                          }
                          dequeue() {
                              this.delete(0)
                          }
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Grounded Header Linked List Operations:")
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      console.log("Pop:")
                      l.pop()
                      l.print()
                      console.log("Count: " + l.count())
                      console.log("Get (Index 1): " + l.get(1))
                      console.log("Insert:")
                      l.insert(7, 1)
                      l.print()
                      console.log("Delete:")
                      l.delete(1)
                      l.print()
                      console.log("Enqueue:")
                      l.enqueue(5)
                      l.print()
                      console.log("Dequeue:")
                      l.dequeue()
                      l.print()
                      console.log("Header Node:")
                      console.log(l.head)`,
                        output: `Grounded Header Linked List Operations:
                        Push:
                        9 8 10 
                        Pop:
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert:
                        9 7 8 
                        Delete:
                        9 8 
                        Enqueue:
                        5 9 8 
                        Dequeue:
                        9 8 
                        Header Node:
                        Node {
                          data: 2,
                          next: Node { data: 9, next: Node { data: 8, next: null } }
                        }`,
                      },
                    },
                  }}
                />
                <p>
                  <b>Reverse a linked list :</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Reverse a linked list",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = null
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head == null) {
                                  this.head = node
                              } else {
                                  let temp = this.head
                                  while (temp.next) {
                                      temp = temp.next
                                  }
                                  temp.next = node
                              }
                          }
                          print() {
                              let temp = this.head
                              let output = ""
                              while (temp != null) {
                                  output += temp.data + " "
                                  temp = temp.next
                              }
                              console.log(output)
                          }
                          reverse(){
                          let prev = null;
                          let current = this.head;
                          let next = null;
                          while (current != null) {
                            next = current.next;
                            current.next = prev;
                            prev = current;
                            current = next;
                          }
                          this.head = prev;
                          }
                          // TC: O(n)
                          // SC: O(1)
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      console.log("Reverse")
                      l.reverse()
                      l.print()
                      `,
                        output: `Push:
                        9 8 10 
                        Reverse
                        10 8 9 `,
                      },
                    },
                  }}
                />
                <p>
                  <b>Detect loop in a linked list:</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Detect loop in a linked list",
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = null
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head == null) {
                                  this.head = node
                              } else {
                                  let temp = this.head
                                  while (temp.next) {
                                      temp = temp.next
                                  }
                                  temp.next = node
                              }
                          }
                          print() {
                              let temp = this.head
                              let output = ""
                              while (temp != null) {
                                  output += temp.data + " "
                                  temp = temp.next
                              }
                              console.log(output)
                          }
                      
                          loop(){
                           let temp = this.head
                           let s = new Set()
                           while(temp !== null){
                             if(s.has(temp))
                             return true
                             s.add(temp)
                             temp = temp.next
                           }
                           return false
                          }
                      
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      l.head.next = l.head
                      console.log(l.loop())
                      `,
                        output: `Push:
                        9 8 10 
                        true`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Stack (LIFO/FILO) :</b>
                </Span>
                <Span>
                  Various operations are performed in the order of Last In Fisrt
                  Out (LIFO). It's used in depth first search which is used for
                  backtracking algorithm.
                </Span>
                <Span>
                  Example: Combination of plates placed on top of each other
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    title: "Stack (LIFO/FILO)",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node{
                          constructor(data){
                            this.data = data
                            this.next = null
                          }
                        }
                        
                        class CustomStack{
                          
                          constructor(){
                            this.top = null
                          } 
                        
                          isEmpty(){
                            return this.top === null
                          }
                        
                          push(element){
                          let temp = new Node(element)
                          if(temp == null){
                            console.log("Stack Overflow")
                            return
                          }
                          temp.next = this.top
                          this.top = temp
                          }
                        
                          peek(){
                            if(this.isEmpty()){
                              console.log("Stack Underflow");
                             return -1
                            }else{
                              return this.top.data       
                            }
                          }
                        
                          pop(){
                            if(this.isEmpty()){
                              console.log("Stack Underflow");
                              return;
                            }
                            this.top = this.top.next;
                          }
                        
                          display(){
                             if(this.isEmpty()){
                               console.log("Stack Underflow")
                             }else{
                               let temp = this.top
                               let output = ""
                               while(temp !== null){
                                 output += temp.data + " "
                                 temp = temp.next
                               }
                               console.log(output)
                             }
                          }
                        
                        }
                        
                        const cs = new CustomStack()
                        console.log("Custom Stack Operations:")
                        
                        console.log("1. Push: ")
                        cs.push(10)
                        cs.push(9)
                        cs.display()
                        console.log("2. Pop: ")
                        cs.pop()
                        cs.display()
                        console.log("3. Peek: " + cs.peek())
                        console.log("4. IsEmpty: " + cs.isEmpty())                        
                      `,
                        output: `
                        Custom Stack Operations:
                        1. Push: 
                        9 10 
                        2. Pop: 
                        10 
                        3. Peek: 10
                        4. IsEmpty: false
                      `,
                      },
                    },
                  }}
                />
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    title: "Stack (LIFO/FILO)(Utilization)",
                    output: null,
                    codes: {
                      Java: {
                        code: `
                      import java.util.*;
import java.io.*;
 
public class Main {
    public static void main(String args[])
    {
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(10);
        stack.push(15);
        stack.push(30);
        stack.push(20);
        stack.push(5);
        System.out.println("Initial Stack: " + stack);
        System.out.println("Pop: "
                           + stack.pop());
        System.out.println("Peek: "
                           + stack.peek());
        System.out.println("Search: "
                           + stack.search(30));
        System.out.println("Stack after pop operation "
                           + stack);
    }
}                     
                      `,
                        output: `Initial Stack: [10, 15, 30, 20, 5]
                      Pop: 5
                      Peek: 20
                      Search: 2
                      Stack after pop operation [10, 15, 30, 20]`,
                      },
                      Python: {
                        code: `from queue import LifoQueue

stack = LifoQueue(maxsize=3)
print(stack.qsize())
stack.put('a')
stack.put('b')
stack.put('c')
print("Full: ", stack.full())
print("Size: ", stack.qsize())
print('Elements popped from the stack')
print(stack.get())
print(stack.get())
print(stack.get())
print("Empty: ", stack.empty())
                      `,
                        output: `
                      0
Full:  True
Size:  3
Elements popped from the stack
c
b
a
Empty:  True
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <stack>
using namespace std;
int main() {
    stack<int> stack;
    stack.push(21);
    stack.push(22);
    stack.push(24);
    stack.push(25);
     
    stack.pop();
    stack.pop();

    while (!stack.empty()) {
        cout << stack.top() << " ";
        stack.pop();
    }
    cout << endl;
    return 0;
}                      `,
                        output: `22 21`,
                      },
                      Kotlin: {
                        code: `
                        import java.util.*

object Main {
    @JvmStatic
    fun main(args: Array<String>) {
        val stack = Stack<Int>()
        stack.push(10)
        stack.push(15)
        stack.push(30)
        stack.push(20)
        stack.push(5)
        println("Initial Stack: $stack")
        println(
            "Pop: " +
                    stack.pop()
        )
        println(
            "Peek: " +
                    stack.peek()
        )
        println(
            "Search: " +
                    stack.search(30)
        )
        println(
            "Stack after pop operation " +
                    stack
        )
    }
}
                        `,
                        output: `Initial Stack: [10, 15, 30, 20, 5]
                      Pop: 5
                      Peek: 20
                      Search: 2
                      Stack after pop operation [10, 15, 30, 20]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Queue (FIFO) :</b>
                </Span>
                <Span>
                  Various operations are performed in the order of First In
                  Fisrt Out (FIFO). It's used in breadth first search which is
                  used for branch and bound algorithm.
                </Span>
                <Span>
                  Example: people organised in the form of line for passport
                  verification.
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    title: "Queue (FIFO)",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      class Node{
                        constructor(data){
                          this.data = data
                          this.next = null
                        }
                      }
                      
                      // const MAX_SIZE = 1000
                      // SIZE === MAX_SIZE - 1
                      // -> stack overflow 
                      
                      class CustomQueue{
                        
                        constructor(){
                          this.front = null
                          this.rear = null
                        } 
                      
                        isEmpty(){
                          return this.front === null
                        }
                      
                        enqueue(data){
                          let temp = new Node(data);
                            
                          if(temp === null){
                            console.log("Stack Overflow")
                            return
                          }
                      
                          if (this.isEmpty()) {
                            this.front = this.rear = temp;
                            return;
                          }
                          this.rear.next = temp;
                          this.rear = temp;
                        }
                      
                       dequeue(){
                           if(this.isEmpty()){
                             console.log("Stack Underflow")
                             return
                           }
                           let temp = new Node()
                           temp = this.front;
                           this.front = this.front.next;
                           if (this.front == null)
                            this.rear = null;
                       }
                      
                       display(){
                        let temp = this.front
                        let output = ""
                        if(this.isEmpty()){
                             console.log("Stack Underflow")
                             return
                        }
                        while(temp !== null){
                         output += temp.data + " "
                         temp = temp.next
                        }
                        console.log(output)
                       }
                      
                      }
                      
                      const cq = new CustomQueue()
                      console.log("Custom Queue Operations:")
                      
                      console.log("1. Enqueue: ")
                      cq.enqueue(9)
                      cq.enqueue(7)
                      cq.display()
                      console.log("2. Dequeue: ")
                      cq.dequeue()
                      cq.display()
                      console.log("3. IsEmpty: " + cq.isEmpty())                      
                      `,
                        output: `
                      Custom Queue Operations:
1. Enqueue: 
9 7 
2. Dequeue: 
7 
3. IsEmpty: false
                      `,
                      },
                    },
                  }}
                />
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    title: "Queue (FIFO)(Utilization)",
                    output: null,
                    codes: {
                      Java: {
                        code: `
                      import java.util.*;
 
public class Main {
 
    public static void main(String[] args)
    {
        Queue<Integer> q
            = new LinkedList<>();

        Queue<Integer> q1
            = new PriorityQueue<>();
        
        for (int i = 0; i < 5; i++)
            q.add(i);
 
        System.out.println("Elements of queue "
                           + q);
        int removedele = q.remove();
        System.out.println("removed element-"
                           + removedele);
 
        System.out.println(q);
        int head = q.peek();
        System.out.println("head of queue-"
                           + head);

        int size = q.size();
        System.out.println("Size of queue-"
                           + size);
    }
}
                      `,
                        output: `
                      Elements of queue [0, 1, 2, 3, 4]
removed element-0
[1, 2, 3, 4]
head of queue-1
Size of queue-4
                      `,
                      },
                      Python: {
                        code: `from collections import deque
 
q = deque()
 
q.append('a')
q.append('b')
q.append('c')
 
print(q)
print(q.popleft())
print(q.popleft())
print(q.popleft())
 
print(q)
                      `,
                        output: `
                      deque(['a', 'b', 'c'])
a
b
c
deque([])
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <queue>
  
using namespace std;
  
void display(queue<int> q)
{
    queue<int> g = q;
    while (!g.empty()) {
        cout << g.front() << ' ';
        g.pop();
    }
    cout << endl;
}
  
int main()
{
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
  
    cout << "The queue gquiz is : ";
    display(q);
  
    cout << "size() : " << q.size() << endl;
    cout << "front() : " << q.front() << endl;
    cout << "back() : " << q.back() << endl;
    cout << "pop()";
    q.pop();
    cout << endl;
    display(q);
  
    return 0;
}
                     `,
                        output: `
                     The queue gquiz is : 10 20 30 
size() : 3
front() : 10
back() : 30
pop()
20 30 
                     `,
                      },
                      Kotlin: {
                        code: `import java.util.*

                        object Main {
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val q: Queue<Int> = LinkedList()
                                val q1: Queue<Int> = PriorityQueue()
                                for (i in 0..4) q.add(i)
                                println(
                                    "Elements of queue " +
                                            q
                                )
                                val removedele = q.remove()
                                println(
                                    "removed element-" +
                                            removedele
                                )
                                println(q)
                                val head = q.peek()
                                println(
                                    "head of queue-" +
                                            head
                                )
                                val size = q.size
                                println(
                                    "Size of queue-" +
                                            size
                                )
                            }
                        }`,
                        output: `
                      Elements of queue [0, 1, 2, 3, 4]
removed element-0
[1, 2, 3, 4]
head of queue-1
Size of queue-4
                      `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Priority Queue:</b>
                </Span>
                <Span>
                  In this type of queue, every item has a associated priority
                  and an element with high priority will be dequeued first. If
                  they both have the same priority then order will be
                  considered. *Priority will be considered during insertion
                  which helps to easily remove a element from the queue.
                </Span>
                <Span>Applications: Dijkstra, Prim's, etc.</Span>
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    title: "Priority Queue",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      class Element{
                        constructor(ele,priority){
                          this.data = ele
                          this.priority = priority
                        }
                      }
                      
                      class PriorityQueue{
                         constructor()
                          {
                              this.items = [];
                          }
                      
                          enqueue(ele,priority){
                          var qe = new Element(ele, priority);
                          var contain = false;
                          for (var i = 0; i < this.items.length; i++) {
                              if (this.items[i].priority > qe.priority) {
                                  this.items.splice(i, 0, qe);
                                  // insertion
                                  contain = true;
                                  break;
                              }
                          }
                          if (!contain) {
                              this.items.push(qe);
                          }
                          }
                      
                          dequeue(){
                          if (this.isEmpty())
                              return "Underflow";
                          // deletion from front
                          return this.items.shift();
                          }
                           
                          display(){
                          var str = "";
                          for (var i = 0; i < this.items.length; i++)
                              str += this.items[i].data + " ";
                          // reduce 
                          console.log(str);
                          }
                      
                          isEmpty(){
                          return this.items.length == 0;
                          }
                      
                          front(){
                          if (this.isEmpty())
                              return "No elements in Queue";
                          return JSON.stringify(this.items[0]);
                          }
                      
                          rear(){
                          if (this.isEmpty())
                              return "No elements in Queue";
                          return JSON.stringify(this.items[this.items.length - 1]);
                          }
                      
                      }
                      
                      const pq = new PriorityQueue()
                      console.log("Priority Queue Operations: ")
                      console.log("Enqueue: ")
                      pq.enqueue(9)
                      pq.enqueue(8)
                      pq.display()
                      console.log("Dequeue: ")
                      pq.dequeue()
                      pq.display()
                      console.log("Front: " + pq.front())
                      console.log("Rear: " + pq.rear())
                      console.log("isEmpty: " + pq.isEmpty())                      
                      `,
                        output: `
                      Priority Queue Operations: 
Enqueue: 
9 8 
Dequeue: 
8 
Front: {"data":8}
Rear: {"data":8}
isEmpty: false
                      `,
                      },
                      Java: {
                        code: `
                      import java.util.*;
                      public class Main {
                        public static void main(String[] args)
                        {
                              PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
                              pq.add(10);
                              pq.add(20);
                              pq.add(15);
                              System.out.print(pq.peek() + " ");
                              System.out.print(pq.poll() + " ");
                              System.out.print(pq.peek()+ " ");
                              pq.remove(20);
                              Iterator it = pq.iterator();
                        
                              while (it.hasNext()) {
                                  System.out.print(it.next() + " ");
                              }
                      
                              PriorityQueue<Integer> maxPQ = new PriorityQueue<>(Collections.reverseOrder()); 
                              PriorityQueue<Integer> maxPQ1 = new PriorityQueue<>((a,b) -> b - a); 
                              PriorityQueue<Integer> maxPQ2 = new PriorityQueue<>((a,b) -> b.compareTo(a)); 
                      
                              PriorityQueue<Integer> pq1 = new PriorityQueue<Integer> (
                              new Comparator<Integer> () {
                              public int compare(Integer a, Integer b) {
                             return b - a;
                             }
                        }
                      ); 
                            pq1.add(20);
                            pq1.add(30);
                            Iterator it1 = pq1.iterator();
                                System.out.println();
                              while (it1.hasNext()) {
                                  System.out.print(it1.next() + " ");
                              }
                        }
                      }                      
                      `,
                        output: `
                      10 10 15 15 
30 20
                      `,
                      },
                      Python: {
                        code: `from queue import PriorityQueue
pq = PriorityQueue()
pq.put((2, "A"))
pq.put((3, "B"))
pq.put((1, "C"))
pq.put((4, "D"))
while pq:
     print(pq.get())
pq.pop()

                      `,
                        output: `
(1, 'C')
(2, 'A')
(3, 'B')
(4, 'D')
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <queue>
#include <bits/stdc++.h>

using namespace std;

template<class T>
void display(T& q)
{
    while (!q.empty())
    {
        cout << q.top() << endl;
        q.pop();
    }
}
 
struct CustomCompare
{
    bool operator()(const int& lhs, const int& rhs)
    {
        return lhs < rhs;
    }
};

int main()
{
	priority_queue<int> pq;
  priority_queue<int,vector<int>,greater<int>> pq1;                      
  priority_queue<int,vector<int>, CustomCompare> pq2;

	pq.push(10);
	pq.push(30);
	pq.push(20);
	pq1.push(5);
	pq1.push(1);
	cout << "size() : " << pq.size() << endl;
	cout << "top() : " << pq.top() << endl;
	cout << "pop() : " << endl;
  pq.pop();
  display(pq);
  display(pq1);
  pq2.push(9);
  pq2.push(8);
  display(pq2);
	return 0;
}
                      `,
                        output: `
                      size() : 3
top() : 30
pop() : 
20
10
1
5
9
8
                      `,
                      },
                      Kotlin: {
                        code: `import java.util.PriorityQueue

                        fun main(args: Array<String>) {
                            val nums: PriorityQueue<Int> = PriorityQueue<Int>()
                        
                            // Add items (enqueue)
                            nums.add(800)
                            nums.add(50)
                            nums.add(200)
                            nums.add(550)
                        
                            println("peek: " + nums.peek())
                        
                            // Remove items (dequeue)
                            while (!nums.isEmpty()) {
                                println(nums.remove())
                            }
                        }`,
                        output: `peek: 50
                        50
                        200
                        550
                        800
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Circular Queue:</b>
                </Span>
                <Span>
                  It's similar to a circular linked list which is used to avoid
                  memory wastage. We make of two pointers: front and rear
                  instead of one which is used at circular singly linked list
                </Span>
                <Span>
                  <b>Implementation</b>
                </Span>
                <span>(a) Without using mod operator:</span>
                <CodeEditor
                  options={{
                    title: "Circular Queue(Without using mod operator)",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                          }
                      }
                      
                      class CircularQueue {
                      
                          constructor() {
                              this.front = null
                              this.rear = null
                          }
                      
                          isEmpty() {
                              return this.front === null
                          }
                      
                          enqueue(data) {
                              let temp = new Node(data);
                      
                              if (temp === null) {
                                  console.log("Stack Overflow")
                                  return
                              }
                      
                              if (this.isEmpty()) {
                                  this.front = temp;
                              } else {
                                  this.rear.next = temp
                              }
                              this.rear = temp;
                              this.rear.next = this.front;
                          }
                      
                          dequeue() {
                              if (this.isEmpty()) {
                                  console.log("Stack Underflow")
                                  return
                              }
                              let value = null
                              if (this.front === this.rear) {
                                  value = this.front.data
                                  this.front = null
                                  this.rear = null
                              } else {
                                  let temp = this.front
                                  value = temp.data
                                  this.front = this.front.next
                                  this.rear.next = this.front
                              }
                              return value
                          }
                      
                          display() {
                              let temp = this.front
                              let output = ""
                              if (this.isEmpty()) {
                                  console.log("Stack Underflow")
                                  return
                              }
                              if (temp.next == temp) {
                                  output = temp.data
                              } else {
                                  while (temp.next != this.front) {
                                      output += temp.data + " "
                                      temp = temp.next
                                  }
                                  output += temp.data
                              }
                              console.log(output)
                          }
                      
                      }
                      
                      const cq = new CircularQueue()
                      console.log("Circular Queue Operations:")
                      
                      console.log("1. Enqueue: ")
                      cq.enqueue(9)
                      cq.enqueue(7)
                      cq.display()
                      console.log("2. Dequeue: ")
                      cq.dequeue()
                      cq.display()
                      console.log("3. IsEmpty: " + cq.isEmpty())                    
                      `,
                        output: `
                        Circular Queue Operations:
                        1. Enqueue: 
                        9 7 
                        2. Dequeue: 
                        7 
                        3. IsEmpty: false
                      `,
                      },
                    },
                  }}
                />
                <span>(b) Using mod operator:</span>
                <CodeEditor
                  options={{
                    title: "Circular Queue(Using mod operator)",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class CustomQueue{
    
                          constructor(max_size){
                             this.max_size = max_size
                             this.queue = new Array(max_size).fill(null)
                             this.front = this.rear = -1       
                          }
                        
                          isEmpty(){
                            return this.front === -1
                          }
                        
                          enqueue(data){
                            if ((this.rear + 1) % this.max_size === this.front){
                              console.log("The circular queue is full\n")
                            }else if(this.isEmpty()){
                              this.front = 0
                              this.rear = 0
                              this.queue[this.rear] = data
                            }else{
                              this.rear = (this.rear + 1) % this.max_size
                              this.queue[this.rear] = data
                            }
                          }
                        
                        
                          dequeue(){
                            let temp = null
                            if (this.isEmpty()){
                              console.log("The circular queue is empty")
                            }
                            else if(this.front === this.rear){
                              temp = this.queue[this.front]
                              this.front = -1
                              this.rear = -1
                              return temp
                            }
                            else{
                              temp = this.queue[this.front]
                              this.front = (this.front + 1) % this.max_size
                              return temp
                            }
                          }
                        
                          display(){
                             let output = ""
                             if(this.isEmpty()){
                              console.log("No element in the circular queue")
                             }else if(this.rear >= this.front){
                              for(let i=this.front;i<=this.rear;i++){
                                 output += this.queue[i] + " "
                              }
                             }else{
                              for(let i=this.front;i<this.max_size;i++){
                                 output += this.queue[i] + " "
                              }   
                              for(let i=0;i<=this.rear;i++){
                                 output += this.queue[i] + " "
                              }   
                             }
                             console.log(output)
                          }
                        
                        }
                        
                        const cq = new CustomQueue(5); 
                        console.log("Circular Queue Operations:")
                        console.log("1. Enqueue: ")
                        cq.enqueue(9)
                        cq.enqueue(7)
                        cq.display()
                        console.log("2. Dequeue: ")
                        cq.dequeue()
                        cq.display()
                        console.log("3. IsEmpty: " + cq.isEmpty())  
                        `,
                        output: `
                        Circular Queue Operations:
                        1. Enqueue: 
                        9 7 
                        2. Dequeue: 
                        7 
                        3. IsEmpty: false
                      `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Deque:</b>
                </Span>
                <Span>
                  It allows insertion and deletion at both ends of the data
                  structure.
                </Span>
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    title: "Deque",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      function Deque()
{
 this.stack=new Array();
 this.popback=function(){
  return this.stack.pop();
 }
 this.pushback=function(item){
  this.stack.push(item);
 }
 this.popfront=function(){
  return this.stack.shift();
 }
 this.pushfront=function(item){
  this.stack.unshift(item);
 }
 this.display=function(){
   console.log(this.stack)
 }
}

var deque= new Deque();

deque.pushfront("A");
deque.pushfront("B");
deque.display()
deque.pushback("C");
deque.display()
deque.popfront();
deque.display()
deque.popback();
deque.display()
                      `,
                        output: `
                      [ 'B', 'A' ]
[ 'B', 'A', 'C' ]
[ 'A', 'C' ]
[ 'A' ]
                      `,
                      },
                      Java: {
                        code: `
                      import java.util.*;
public class Main {
	public static void main(String[] args)
	{
		Deque<String> dq
			= new ArrayDeque<String>();
// new LinkedList<String>()

		dq.add("A");
		dq.addFirst("B");
		dq.addLast("C");
    for (Iterator it = dq.iterator();
         it.hasNext();) {
        System.out.print(it.next() + " ");
    }
    System.out.println();
    for (Iterator it = dq.descendingIterator();
         it.hasNext();) {
        System.out.print(it.next() + " ");
    }
    System.out.println();
    System.out.println(dq);
    System.out.println(dq.pop());
    System.out.println(dq.poll());
    System.out.println(dq);
    System.out.println(dq.pollFirst());
    System.out.println(dq.pollLast());
    dq.clear();
	  System.out.println(dq);
// Those methods retrieve the first element 
// and remove it from the list. The difference 
// between poll() and pop() is that pop will
// throw NoSuchElementException() on empty list, 
// whereas poll returns null.

	}
}
                      `,
                        output: `
                      B A C 
C A B 
[B, A, C]
B
A
[C]
C
null
[]
                      `,
                      },
                      Python: {
                        code: `import collections
de = collections.deque([9,7,8,4])
de.append(4)
print(de)
de.appendleft(6)
print(de)
de.pop()
print(de)
de.popleft()
print(de)
print(de.index(4,2,5))
de.insert(4,3)
print (de)
print (de.count(3))
de.remove(3)
de.extend([4,5,6])
print(de)
de.extendleft([7,8,9])
print(de)
de.rotate(-3)
print(de)
de.reverse()
print (de)
                      `,
                        output: `
                      deque([9, 7, 8, 4, 4])
deque([6, 9, 7, 8, 4, 4])
deque([6, 9, 7, 8, 4])
deque([9, 7, 8, 4])
3
deque([9, 7, 8, 4, 3])
1
deque([9, 7, 8, 4, 4, 5, 6])
deque([9, 8, 7, 9, 7, 8, 4, 4, 5, 6])
deque([9, 7, 8, 4, 4, 5, 6, 9, 8, 7])
deque([7, 8, 9, 6, 5, 4, 4, 8, 7, 9])
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <deque>

using namespace std;

void display(deque <int> q)
{
	deque <int> :: iterator it;
	for (it = q.begin(); it != q.end(); ++it)
		cout << *it << '\t';
	cout << '\n';
}

int main()
{
	deque <int> dq;
	dq.push_back(9);
	dq.push_front(8);
	dq.push_back(6);
	dq.push_front(7);
	display(dq);

  cout << "Deque Operations: " << endl;
	cout << "size() : " << dq.size()<< endl;
	cout << "max_size() : " << dq.max_size()<< endl;
	cout << "at(2) : " << dq.at(2)<< endl;
	cout << "front() : " << dq.front()<< endl;
	cout << "back() : " << dq.back()<< endl;
	cout << "pop_front() : "<< endl;
	dq.pop_front();
	display(dq);
	cout << "pop_back() : "<< endl;
	dq.pop_back();
	display(dq);

	return 0;
}
                      `,
                        output: `
                      7   8   9   6
Deque Operations: 
size() : 4
max_size() : 4611686018427387903
at(2) : 9
front() : 7
back() : 6
pop_front() : 
8   9   6
pop_back() : 
8   9
                      `,
                      },
                      Kotlin: {
                        code: `import java.util.*

                        object Main {
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val dq: Deque<String> = ArrayDeque()
                                // new LinkedList<String>()
                                dq.add("A")
                                dq.addFirst("B")
                                dq.addLast("C")
                                run {
                                    val it: Iterator<*> = dq.iterator()
                                    while (it.hasNext()) {
                                        print(it.next().toString() + " ")
                                    }
                                }
                                println()
                                val it: Iterator<*> = dq.descendingIterator()
                                while (it.hasNext()) {
                                    print(it.next().toString() + " ")
                                }
                                println()
                                println(dq)
                                println(dq.pop())
                                println(dq.poll())
                                println(dq)
                                println(dq.pollFirst())
                                println(dq.pollLast())
                                dq.clear()
                                println(dq)
                                // Those methods retrieve the first element 
                                // and remove it from the list. The difference 
                                // between poll() and pop() is that pop will
                                // throw NoSuchElementException() on empty list, 
                                // whereas poll returns null.
                            }
                        }`,
                        output: `
                      B A C 
                      C A B 
                      [B, A, C]
                      B
                      A
                      [C]
                      C
                      null
                      []
                      `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Non Linear",
            content: (
              <>
                <Span>
                  In <b>non linear data structure</b>, elements are not arranged
                  in a sequential way hence they cannot be traveresed in a
                  single run as multiple levels are involved.
                </Span>
                <Span>Applications: ML, AI , etc.</Span>
                <Span>e.g. Trees, Graph and Tries etc.</Span>
                <Span>
                  <b>Tree</b>
                </Span>
                <Span>
                  It consists of elements organised in a hierarchical way such
                  that there can be only one connection in between two elements.
                </Span>
                <Span>Let n => number of nodes</Span>
                <Span>
                  <b>Catalian Number:</b> 2nCn/(n+1) or (2n)!/(n+1)
                </Span>
                <Span>
                  <b>Terminology:</b>
                </Span>
                <Span>
                  <b>Root </b>: The first single node from where the tree
                  originates.
                </Span>
                <Span>
                  <b>Edge </b>: The connecting link between any two nodes is
                  called as an edge. NUmber of edges = n-1
                </Span>
                <Span>
                  <b>Parent </b>: The node which has a branch from it to any
                  other node
                </Span>
                <Span>
                  <b>Child </b>: The node which is a descendant of some node
                </Span>
                <Span>
                  <b>Siblings: </b>Nodes which belong to the same parent
                </Span>
                <Span>
                  <b>Degree of a node: </b>total number of children of that
                  node.
                </Span>
                <Span>
                  <b>Degree of a tree: </b>highest degree of a node among all
                  the nodes in the tree.
                </Span>
                <Span>
                  <b>Internal (non-terminal / non-leaf) node: </b>node which has
                  at least one child.
                </Span>
                <Span>
                  <b>External (terminal / leaf) node: </b>the node which does
                  not have any child
                </Span>
                <Span>
                  <b>Level: </b>each step from top to bottom ( 0 to height of
                  tree )
                </Span>
                <Span>
                  <b>Height of a node: </b>Total number of edges that lies on
                  the longest path from deepest leaf node to a particular node
                </Span>
                <Span>
                  <b>Height of a tree: </b>height of root node.
                </Span>
                <Span>
                  <b>Depth of a tree: </b> It's same as level of the tree and is
                  computed with the help of edges that lie between root node to
                  that particular node.
                </Span>
                <Span>
                  The root node has depth zero, leaf nodes have height zero, and
                  a tree with only a single node (hence both a root and leaf)
                  has depth and height zero.
                </Span>
                <Span>
                  <b>Subtree: </b>each child from a node forms another tree
                  recursively.
                </Span>
                <Span>
                  <b>Forest: </b>collection of trees obtained from omitting the
                  root.
                </Span>
                <Span>
                  <b>Types:</b>
                </Span>
                {/* https://www.educba.com/types-of-trees-in-data-structure/ */}
                <Span>
                  <b>1. General Tree</b>
                </Span>
                <p>
                  If no constraint is placed on the tree’s hierarchy, a tree is
                  called a general tree
                </p>
                <CodeEditor
                  options={{
                    title: "General Tree",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(val) {
                            this.data = val;
                            this.left = null;
                            this.right = null;
                            // left1 
                            // right1
                            // we can add more links as
                            // well in case of general tree
                          }
                        }
                      
                      function inorder(root){
                        if(root!=null){
                          inorder(root.left)
                          console.log(root.data)
                          inorder(root.right)
                        }
                      }
                      
                      let root = null;
                      root = new Node(1);
                      root.left = new Node(2);
                      root.right = new Node(3);
                      root.left.left = new Node(4);
                      inorder(root)                      
                        `,
                        output: `
                        4
2
1
3
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>2. Binary Tree</b>
                </Span>
                <Span>
                  The binary tree is the kind of tree in which most two children
                  can be found for each parent and no constraints are applied at
                  simple binary tree.
                </Span>
                <Span>
                  <b>Types:</b>
                </Span>
                <Span>a. Extended Binary Tree</Span>
                <p>
                  Extended binary tree is a type of binary tree in which all the
                  null sub tree of the original tree are replaced with special
                  nodes called external nodes whereas other nodes are called
                  internal nodes
                </p>
                <CodeEditor
                  options={{
                    title: "Extended Binary Tree",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Node
                        {
                            constructor()
                            {
                                this.key = 0;
                                this.left = null;
                                this.right = null;
                            }
                        };
                         
                        function createNode(key)
                        {
                            var temp = new Node();
                            temp.key = key;
                            temp.left = temp.right = null;
                            return (temp);
                        }
                        
                        function inorder(root){
                          traverse(root.left);
                          console.log(root.key + " ");
                          traverse(root.right);
                        }
                         
                        function traverse(root)
                        {
                            if (root != null)
                              inorder(root)
                            else
                            {
                                root = createNode(-1);
                                console.log(root.key + " ");
                            }
                        }
                         
                        const root = createNode(1);
                        root.left = createNode(2);
                        root.right = createNode(3);
                        root.left.left = createNode(5);
                        root.right.right = createNode(4);
                        traverse(root);`,
                        output: `-1 
                        5 
                        -1 
                        2 
                        -1 
                        1 
                        -1 
                        3 
                        -1 
                        4 
                        -1 `,
                      },
                    },
                  }}
                />
                <Span>b. Full Binary Tree</Span>
                <Span>
                  In this type of tree, all internal nodes will have two
                  children
                </Span>
                <Span>c. Complete Binary Tree</Span>
                <Span>
                  Binary Tree is a Complete Binary Tree if all the levels are
                  completely filled except possibly the last level and the last
                  level has all keys as left as possible{" "}
                </Span>
                <Span>d. Perfect Binary Tree</Span>
                <Span>
                  A Binary tree is a Perfect Binary Tree in which all the
                  internal nodes have two children and all leaf nodes are at the
                  same level.{" "}
                </Span>
                <Span>No. of leaf nodes = No. of internal nodes + 1</Span>
                <Span>e. Balanced Binary Tree</Span>
                <Span>
                  A binary tree is balanced if the height of the tree is O(Log
                  n) where n is the number of nodes. Height of left and right
                  subtree should't differ by 1. e.g. AVL, Red black.They provide
                  O(log n) for insert,search and delete.
                </Span>
                <Span>f. Degenerate(Pathological) Binary Tree</Span>
                <Span>
                  A Tree where every internal node has one child. Such trees are
                  performance-wise same as linked list.
                </Span>
                <p>
                  <b>Mirror (Invert) of binary tree</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Mirror (Invert) of binary tree",
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(val) {
                              this.data = val;
                              this.left = null;
                              this.right = null;
                          }
                      }
                      
                      class BinaryTree {
                        constructor(){
                          this.root = null
                        }
                      
                        inorder(root=this.root){
                          if (root != null) {
                              this.inorder(root.left)
                              console.log(root.data)
                              this.inorder(root.right)
                          }
                        }
                      
                        // while doing bfs keep swapping
                        // left and right
                      
                        mirror(){
                          let queue = []
                          queue.push(this.root)
                          while (queue.length > 0)
                          {
                          let curr = queue[0];
                          queue.shift();
                          let temp = curr.left;
                          curr.left = curr.right;
                          curr.right = temp;;
                          if (curr.left != null)
                            queue.push(curr.left);
                          if (curr.right != null)
                            queue.push(curr.right);
                          }
                        }

                        // mirror(){
                        //   let queue = []
                        //   let height = 0
                        //   queue.push(this.root)
                        //   while(queue.length){
                        //     let curr = queue.shift()
                        //     // console.log(curr.data)
                        //     if(curr.left)
                        //     [curr.left,curr.right] = [curr.right,curr.left]
                        //     height++
                        //     if(curr.left) queue.push(curr.left)
                        //     if(curr.right) queue.push(curr.right)
                        //   }
                        //   console.log({ height })
                        // }
                      
                      }
                      
                      let tree = new BinaryTree();
                      tree.root = new Node(1);
                      tree.root.left = new Node(2);
                      tree.root.right = new Node(3);
                      tree.root.left.left = new Node(4);
                      console.log("Inorder Traversals: ")
                      console.log("Before Mirroring:")
                      tree.inorder()
                      console.log("After Mirroring:")
                      tree.mirror()
                      tree.inorder()
                      `,
                        output: `4
                        2
                        1
                        3
                        Mirror
                        3
                        1
                        2
                        4`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Left View Of Binary Tree</b>
                </Span>
                <Span>
                  Left view of a Binary Tree is set of nodes visible when tree
                  is visited from left side.
                </Span>
                <Img left src={LeftViewBT} reduceH />
                <CodeEditor
                  options={{
                    title: "Left View Of Binary Tree",
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(val) {
                              this.data = val;
                              this.left = null;
                              this.right = null;
                          }
                      }
                      
                      class BinaryTree {
                          constructor() {
                              this.root = null
                          }
                      
                          inorder(root = this.root) {
                              if (root != null) {
                                  this.inorder(root.left)
                                  console.log(root.data)
                                  this.inorder(root.right)
                              }
                          }
                      
                          // keep track of left most node
                          // at each level of bfs ( level order 
                          // traversal ) with the help of a queue
                      
                          leftView() {
                              let queue = []
                              queue.push(this.root)
                              while (queue.length > 0) {
                                const n = queue.length
                                for(let i=0;i<n;i++){
                                  let curr = queue.shift();
                                  if(i==0)
                                  console.log(curr.data)
                                  if (curr.left != null)
                                    queue.push(curr.left);
                                  if (curr.right != null)
                                    queue.push(curr.right);
                                 }
                              }
                          }
                      
                      }
                      
                      let tree = new BinaryTree();
                      tree.root = new Node(1);
                      tree.root.left = new Node(2);
                      tree.root.right = new Node(3);
                      tree.root.right.left = new Node(4);
                      console.log("Inorder Traversal: ")
                      tree.inorder()
                      console.log("Left View Of Binary Tree:")
                      tree.leftView()`,
                        output: `Inorder Traversal: 
                        2
                        1
                        4
                        3
                        Left View Of Binary Tree:
                        1
                        2
                        4`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Right View Of Binary Tree</b>
                </Span>
                <Span>
                  Right view of a Binary Tree is set of nodes visible when tree
                  is visited from Right side.
                </Span>
                <Img left src={RightViewBT} reduceH />
                <CodeEditor
                  options={{
                    title: "Right View Of Binary Tree",
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(val) {
                              this.data = val;
                              this.left = null;
                              this.right = null;
                          }
                      }
                      
                      class BinaryTree {
                          constructor() {
                              this.root = null
                          }
                      
                          inorder(root = this.root) {
                              if (root != null) {
                                  this.inorder(root.left)
                                  console.log(root.data)
                                  this.inorder(root.right)
                              }
                          }
                      
                          // keep track of right most node
                          // at each level of bfs ( level order 
                          // traversal ) with the help of a queue
                      
                          rightView() {
                              let queue = []
                              queue.push(this.root)
                              while (queue.length > 0) {
                                const n = queue.length
                                for(let i=0;i<n;i++){
                                  let curr = queue.shift();
                                  if(i==n-1)
                                  console.log(curr.data)
                                  if (curr.left != null)
                                    queue.push(curr.left);
                                  if (curr.right != null)
                                    queue.push(curr.right);
                                 }
                              }
                          }
                      
                      }
                      
                      let tree = new BinaryTree();
                      tree.root = new Node(1);
                      tree.root.left = new Node(2);
                      tree.root.right = new Node(3);
                      tree.root.right.left = new Node(4);
                      console.log("Inorder Traversal: ")
                      tree.inorder()
                      console.log("Right View Of Binary Tree:")
                      tree.rightView()`,
                        output: `Inorder Traversal: 
                        2
                        1
                        4
                        3
                        Right View Of Binary Tree:
                        1
                        3
                        4`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Flip binary tree</b>
                </Span>
                <Img
                  left
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/tree42-1024x381.png"
                />
                <p>
                  In the flip operation, the leftmost node becomes the root of
                  the flipped tree and its parent becomes its right child and
                  the right sibling becomes its left child and the same should
                  be done for all left most nodes recursively.
                </p>
                <CodeEditor
                  options={{
                    title: "Flip binary tree",
                    codes: {
                      Javascript: {
                        code: `class Node {
                          constructor(val) {
                              this.data = val;
                              this.left = null;
                              this.right = null;
                          }
                      }
                      
                      class BinaryTree {
                        constructor(){
                          this.root = null
                        }
                      
                        flip(){
                          this.root = this.flipBinaryTree(this.root)
                        }
                      
                       flipBinaryTree(root)
                          {
                               if (root == null)
                                  return root;
                              if (root.left == null && root.right ==null)
                                  return root;
                                let flippedRoot=this.flipBinaryTree(root.left);
                              root.left.left=root.right;
                              root.left.right=root;
                              root.left=root.right=null;
                              return flippedRoot;
                          }
                      
                      level(root = this.root) {
                              if (root == null)
                                  return;
                      
                              let q = [];
                              q.push(root);
                              while (true) {
                                  let nodeCount = q.length;
                                  if (nodeCount == 0) {
                                      break;
                                  }
                                  let output = ""
                                  while (nodeCount > 0) {
                                      let node = q[0];
                                      output += node.data + " ";
                                      q.shift();
                                      if (node.left != null)
                                          q.push(node.left);
                                      if (node.right != null)
                                          q.push(node.right);
                                      nodeCount--;
                                  }
                                  console.log(output)
                              }
                          }
                      
                      
                      }
                      
                      let tree = new BinaryTree();
                      tree.root = new Node(1);
                      tree.root.left = new Node(2);
                      tree.root.right = new Node(3);
                      tree.root.right.left = new Node(4);
                      tree.root.right.right = new Node(5);
                      console.log("Level Order Traversals: ")
                      console.log("Before Flip:")
                      tree.level()
                      console.log("After Flip:")
                      tree.flip()
                      tree.level()
                      `,
                        output: `Level Order Traversals: 
                        Before Flip:
                        1 
                        2 3 
                        4 5 
                        After Flip:
                        2 
                        3 1 
                        4 5 `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>3. Binary Search Tree</b>
                </Span>
                <Span>
                  Complexity for insertion, deletion and search : O(h) , h :
                  height of bst
                </Span>
                <Span>
                  It's basically a binary tree (degree : 2) with certain
                  constraints. There should be no duplicate nodes present in the
                  tree and also left subtree should always be smaller than right
                  subtree or we can say left child of any parent should be
                  lesser than it and the right child should be greater than it.
                </Span>
                <Span>
                  inorder, preorder, postorder =&lt; depth first traversal
                  <br />
                  level order =&lt; breadth first traversal
                  <br />
                  Min height =&lt; n-1 <br />
                  Max height =&lt; ceil(log2(n)) <br />
                  Min nodes -&lt; h+1 <br />
                  Max nodes -&lt; 2^h + 1 <br />
                  Insert, delete, search -&lt; complexity : O(1)
                </Span>
                <Span>
                  <b>Implementation:</b>
                </Span>
                <p>(a) using recursion:</p>
                <CodeEditor
                  options={{
                    title: "Binary Search Tree(Recursion)",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(val) {
                            this.key = val;
                            this.left = null;
                            this.right = null;
                          }
                      }
                                            
                      class BinarySearchTree {
                        constructor(){
                          this.root = null
                        }
                      
                      // we'll make use of binary search till that
                      // desired element is found . After every
                      // iteration, n/2 nodes will be reduced from
                      // search space due to the elimination of desired
                      // subtree ( left or right ). That's why its
                      // called binary search tree.
                      
                        search(key,temp=this.root)
                        {
                          if (temp === null || temp.key === key)
                              return temp;
                          if (temp.key < key)
                             return this.search(key,temp.right);
                          return this.search(key,temp.left);
                        }
                      
                      // we'll find the desired leaf node for 
                      // insertion
                        insert(key)
                        {
                          this.root = this.insertRec(this.root, key);
                        }
                        
                        insertRec(temp, key)
                        {
                          if (temp == null)
                          {
                            temp = new Node(key);
                            return temp;
                          }
                          if (key < temp.key)
                            temp.left = this.insertRec(temp.left, key);
                          else if (key > temp.key)
                            temp.right = this.insertRec(temp.right, key);
                          return temp;
                        }
                        
                        inorder()
                        {
                          this.inorderRec(this.root);
                        }
                      
                        inorderRec(temp)
                        {
                          if (temp != null) {
                            this.inorderRec(temp.left);
                            console.log(temp.key);
                            this.inorderRec(temp.right);
                          }
                        }
                      
                        remove(key){
                          this.root = this.removeRec(this.root,key)
                        }
                      
                      // Deletion can be classified into 3 types depending upon
                      // whether node is present at:
                      // 1. leaf -> simply delete the node
                      // 2. parent with 1 child -> delete & replace it with the child
                      // 3. parent with 2 child -> delete & replace it with inorder 
                      // successor or predecessor
                      
                        removeRec(temp,key)
                        {
                        
                        if (temp == null)
                            return temp;
                      
                        if (key < temp.key)
                            temp.left = this.removeRec(temp.left, key);
                        else if (key > temp.key)
                            temp.right = this.removeRec(temp.right, key);
                        else {
                          if (temp.left == null)
                            return temp.right;
                          else if (temp.right == null)
                            return temp.left;
                          temp.key = this.minValue(temp.right);
                          // inorder successor
                          temp.right = this.removeRec(temp.right, temp.key);
                        }
                        return temp;
                        }
                       
                        minValue(root)
                        {
                          let minv = root.key;
                              while (root.left != null)
                              {
                                  minv = root.left.key;
                                  root = root.left;
                              }
                              return minv;
                        }
                      
                        maxDepth(node=this.root)
                          {
                              if (node == null)
                                  return -1;
                              else
                              {
                                  var lDepth = this.maxDepth(node.left);
                                  var rDepth = this.maxDepth(node.right);
                                  if (lDepth > rDepth)
                                      return (lDepth + 1);
                                   else
                                      return (rDepth + 1);
                              }
                              // O(n^2)
                        }
                        
                        // using recursion, level order 
                        // traversal occupies O(n*n) . That's
                        // why let's solve it ib O(n) using 
                        // queue
                      
                        levelOrderAndMaxDepth(root = this.root)
                        {
                          if(root == null)
                            return;
                          
                          let q = [];
                          let height = -1;
                          q.push(root);
                          while(true)
                          {
                            let nodeCount = q.length;
                            if(nodeCount == 0){
                              console.log({height})
                              break;
                            }
                            height++;
                            let output = ""
                            while(nodeCount > 0)
                            {
                              let node = q[0];
                              output += node.key + " ";
                              q.shift();
                              if(node.left != null)
                                q.push(node.left);
                              if(node.right != null)
                                q.push(node.right);
                              nodeCount--;
                            }
                            console.log(output)
                          }
                        }
                      
                      }
                      
                      const tree = new BinarySearchTree();
                      
                      console.log("Binary Search Tree Operations:")
                      
                      console.log("Insertion: 6, 5, 4, 3, 9, 8, 7")
                      tree.insert(6);
                      tree.insert(5);
                      tree.insert(4);
                      tree.insert(3);
                      tree.insert(9);
                      tree.insert(8);
                      tree.insert(7);
                      console.log("Level Order Traversal (Breadth First Traversal):")
                      tree.levelOrderAndMaxDepth()
                      console.log("Maximum Depth: " + tree.maxDepth())
                      console.log("In-Order Traversal (Depth First Traversal):")
                      tree.inorder();
                      console.log("Search (8):")
                      console.log(tree.search(8))
                      tree.levelOrderAndMaxDepth()
                      console.log("Delete (8): ")
                      tree.remove(8)
                      tree.levelOrderAndMaxDepth()
                      console.log("Maximum Depth: " + tree.maxDepth())
                      tree.inorder();                          
                        `,
                        output: `
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Level Order Traversal:
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Maximum Depth: 3
                        In-Order Traversal:
                        3
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Level Order Traversal:
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Maximum Depth: 3
                        In-Order Traversal:
                        3
                        4
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Level Order Traversal (Breadth First Traversal):
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Maximum Depth: 3
                        In-Order Traversal (Depth First Traversal):
                        3
                        4
                        5
                        6
                        7
                        8
                        9
                        Search (8):
                        Node {
                          key: 8,
                          left: Node { key: 7, left: null, right: null },
                          right: null
                        }
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Delete (8): 
                        6 
                        5 9 
                        4 7 
                        3 
                        { height: 3 }
                        Maximum Depth: 3
                        3
                        4
                        5
                        6
                        7
                        9
                        `,
                      },
                    },
                  }}
                />
                <p>(b) inorder traversal using stack and loop:</p>
                <CodeEditor
                  options={{
                    title:
                      "Binary Search Tree(inorder traversal using stack and loop)",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(val) {
                            this.val = val;
                            this.left = null;
                            this.right = null;
                          }
                      }
                      
                      class BinarySearchTree {
                        constructor(){
                          this.root = null
                        }
                        
                        insert(key)
                        {
                          const node = new Node(key);
                          if(this.root === null){
                            this.root = node;
                            return;
                          }
                          let prev=null;
                          let temp=this.root;
                          while (temp!=null){
                            if(temp.val > key){
                              prev=temp;
                              temp=temp.left;
                            }
                            else if(temp.val < key){
                              prev=temp;
                              temp=temp.right;
                            }
                          }
                          if(prev.val>key)
                            prev.left=node;
                          else prev.right=node;
                        }
                      
                        // depth first traversal
                        
                        inorder(){
                          let temp=this.root;
                          let stack=[];
                          while (temp!=null||stack.length!==0){
                            if(temp!=null){
                              stack.push(temp);
                              temp=temp.left;
                            }
                          else {
                              temp = stack.pop();
                              console.log(temp.val+" ");
                              temp = temp.right;
                          }
                          }
                        }
                      
                      }
                      
                      const tree = new BinarySearchTree();
                      console.log("Binary Search Tree Operations:")
                      tree.insert(9)
                      tree.insert(8)
                      tree.insert(7)
                      tree.inorder()                      
                        `,
                        output: `
                        Binary Search Tree Operations:
7 
8 
9
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>4. Binary Heap</b>
                </Span>
                <Span>
                  It is a complete binary tree. It can be either min heap or max
                  heap. In min heap, key value of all parent nodes should be
                  lesser than their children. And they should be greater then
                  their children in case of max heap.
                </Span>
                <Span>
                  The traversal method use to achieve Array representation is
                  Level Order
                </Span>
                <Span>It's represented as an array( let's say Arr) where</Span>
                <Span>
                  Arr[(i-1)/2] Returns the parent node <br />
                  Arr[(2*i)+1] Returns the left child node <br />
                  Arr[(2*i)+2] Returns the right child node
                </Span>
                <Span>Algorithim === Avg. Case === Worst case</Span>
                <Span>
                  Search === O(n) === O(n)
                  <br />
                  Insert === O(1) === O(log n)
                  <br />
                  Find-min === O(1) === O(1)
                  <br />
                  Delete-min === O(log n) === O(log n)
                </Span>
                <Span>
                  <b>Heapify</b>
                </Span>
                <p>
                  The process of reshaping a binary tree into a Heap data
                  structure is known as "heapify".{" "}
                </p>
                <CodeEditor
                  options={{
                    title: "Heapify",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class BH {
                          constructor() {
                            this.values = [];
                          }
                          add(element) {
                            this.values.push(element);
                            let index = this.values.length - 1;
                            const current = this.values[index];
                        
                            while (index > 0) {
                              let parentIndex = Math.floor((index - 1) / 2);
                              let parent = this.values[parentIndex];
                        
                              if (parent <= current) {
                                this.values[parentIndex] = current;
                                this.values[index] = parent;
                                index = parentIndex;
                              } else break;
                            }
                          }
                          extractMax() {
                            const max = this.values[0];
                            const end = this.values.pop();
                            this.values[0] = end;
                        
                            let index = 0;
                            const length = this.values.length;
                            const current = this.values[0];
                            while (true) {
                              let leftChildIndex = 2 * index + 1;
                              let rightChildIndex = 2 * index + 2;
                              let leftChild, rightChild;
                              let swap = null;
                        
                              if (leftChildIndex < length) {
                                leftChild = this.values[leftChildIndex];
                                if (leftChild > current) swap = leftChildIndex;
                              }
                              if (rightChildIndex < length) {
                                rightChild = this.values[rightChildIndex];
                                if (
                                  (swap === null && rightChild > current) ||
                                  (swap !== null && rightChild > leftChild)
                                )
                                  swap = rightChildIndex;
                              }
                        
                              if (swap === null) break;
                              this.values[index] = this.values[swap];
                              this.values[swap] = current;
                              index = swap;
                            }
                        
                            return max;
                          }
                        }
                        
                        const tree = new BH();
                        tree.add(3);
                        tree.add(4);
                        tree.add(31);
                        tree.add(6);
                        console.log(tree); 
                        console.log(tree.extractMax()); 
                        console.log(tree); 
                        // max heap
                        `,
                        output: `BH { values: [ 31, 6, 4, 3 ] }
                        31
                        BH { values: [ 6, 3, 4 ] }`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>5. AVL (Adelson Velsky and Landis) Tree</b>
                </Span>
                <Span>
                  It's a self balancing binary search tree where difference b/w
                  left and right subtress for every node cannot be more than 1.
                  They are used to improve the cost of operations of skewed bst
                  from O(n) to O(logn)
                </Span>
                <Span>The height of an AVL tree is always O(Logn)</Span>
                Balance factor of a node: (height of left subtree) - (height of
                right tree). It should be between -1 and 1. If it's greater than
                1 then we should consider LL (Left Left) or LR case. Otherwise
                RR or RL case.
                <CodeEditor
                  options={{
                    title: "AVL (Adelson Velsky and Landis) Tree",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(d) {
                          this.key = d;
                          this.height = 1;
                          this.left = null;
                          this.right = null;
                          }
                        }
                      
                        // Insertion->
                      
                        // level order traversals
                      
                        // let T1,T2,T3 and T4 be subtrees 
                      
                        // LL case -> right rotate z
                      
                        // before rotation:
                        // z (2)
                        // y--------T4 
                        // x T3
                        // T1 T2 
                      
                        // after rotating z clockwise (right)
                        // y
                        // x--------z
                        // T1 T2  T3 T4
                      
                        // RR case -> left rotate z
                        
                        // before rotation
                        // z (-2)
                        // T1 y
                        // ---T2 x
                        // ---T3 T4
                      
                        // after rotating z anti-clockwise (left)
                        // y 
                        // z      x
                        // T1 T2. T3 T4
                      
                        // LR case -> Left rotate y then right rotate z
                        
                        // before rotation
                        // z
                        // y T4
                        // T1 x
                        // -- T2 T3
                      
                        // after rotating y anti-clockwise (left)
                        // z
                        // x ----T4
                        // y T3
                        // T1 T2
                        // after rotating z clockwise (right)
                        // x
                        // y z
                        // T1 T2 T3 T4
                        
                        // RL case -> Right rotate y then left rotate z
                        // z
                        // T1 -- y
                        //      x T4
                        //      T2 t3
                      
                        // after rotating y clockwise (right)
                        // z
                        // T1 ----x
                        // T2 y
                        // T3 T4
                        // after rotating z anti-clockwise (left)
                        // x
                        // y z
                        // T1 T2 T3 T4
                      
                        // Deletion ->
                        // L1 -> LL        
                        // L0 -> LL or LR 
                        // L-1 -> LR 
                      
                        // R1 -> RL
                        // R0 -> RR or RL
                        // R-1 -> RR
                      
                        class AVLTree {
                          constructor() {
                          this.root = null;
                          }
                      
                          height(N) {
                          if (N == null) return 0;
                          return N.height;
                          }
                      
                          max(a, b) {
                          return a > b ? a : b;
                          }
                      
                          rightRotate(y) {
                          var x = y.left;
                          var T2 = x.right;
                          x.right = y;
                          y.left = T2;
                          y.height = this.max(this.height(y.left),
                          this.height(y.right)) + 1;
                          x.height = this.max(this.height(x.left),
                          this.height(x.right)) + 1;
                          return x;
                          }
                      
                          leftRotate(x) {
                          var y = x.right;
                          var T2 = y.left;
                          y.left = x;
                          x.right = T2;
                          x.height = this.max(this.height(x.left),
                          this.height(x.right)) + 1;
                          y.height = this.max(this.height(y.left),
                          this.height(y.right)) + 1;
                      
                          return y;
                          }
                      
                          getBalance(N) {
                          if (N == null) return 0;
                      
                          return this.height(N.left) - this.height(N.right);
                          }
                      
                          insert(key){
                           this.root = this.insertNode(this.root,key);
                          }
                      
                          insertNode(node, key) {
                          if (node == null) return new Node(key);
                      
                          if (key < node.key)
                          node.left = this.insertNode(node.left, key);
                          else if (key > node.key)
                          node.right = this.insertNode(node.right, key);
                          else return node;
                      
                          node.height =
                            1 + this.max(this.height(node.left),
                              this.height(node.right));
                          var balance = this.getBalance(node);
                      
                      // LL
                          if (balance > 1 && key < node.left.key)
                          return this.rightRotate(node);
                      
                      // RR
                          if (balance < -1 && key > node.right.key)
                            return this.leftRotate(node);
                      
                      // LR
                          if (balance > 1 && key > node.left.key) {
                            node.left = this.leftRotate(node.left);
                            return this.rightRotate(node);
                          }
                      
                      // RL
                          if (balance < -1 && key < node.right.key) {
                            node.right = this.rightRotate(node.right);
                            return this.leftRotate(node);
                          }
                      
                          return node;
                          }
                      
                          preOrder(node=this.root) {
                          if (node != null) {
                            console.log(node.key + " ");
                            this.preOrder(node.left);
                            this.preOrder(node.right);
                          }
                          }
                      
                      // for deletion simple perform bst deletion and perform 
                      // rotation accordingly
                      
                        remove(key){
                         this.root = this.removeNode(this.root,key)
                        }
                      
                        removeNode(head, key)
                          {
                              if (head == null)
                                  return head;
                              if (key < head.key)
                                  head.left = this.removeNode(head.left, key);
                              else if (key > head.key)
                                  head.right = this.removeNode(head.right, key);
                              else
                              {
                                  if ((head.left == null) || (head.right == null))
                                  {
                                      let temp = null;
                                      if (temp == head.left)
                                          temp = head.right;
                                      else
                                          temp = head.left;
                                      if (temp == null)
                                      {
                                          temp = head;
                                          head = null;
                                      }
                                      else 
                                          head = temp; 
                                  }
                                  else
                                  {
                                      let temp = this.minValueNode(head.right);
                                      head.key = temp.key;
                                      // inorder successor
                                      head.right = this.removeNode(head.right, temp.key);
                                  }
                              }
                              if (head == null)
                                  return head;
                              head.height = Math.max(this.height(head.left), this.height(head.right)) + 1;
                              let balance = this.getBalance(head);
                              // LL
                              if (balance > 1 && this.getBalance(head.left) >= 0)
                                  return this.rightRotate(head);
                              // LR
                              if (balance > 1 && this.getBalance(head.left) < 0)
                              {
                                  head.left = this.leftRotate(head.left);
                                  return this.rightRotate(head);
                              }
                              // RR
                              if (balance < -1 && this.getBalance(head.right) <= 0)
                                  return this.leftRotate(head);
                              // RL
                              if (balance < -1 && this.getBalance(head.right) > 0)
                              {
                                  head.right = this.rightRotate(head.right);
                                  return this.leftRotate(head);
                              }
                              return head;
                          }
                      }
                      
                      var tree = new AVLTree();
                      tree.insert(10);
                      tree.insert(20);
                      tree.insert(30);
                      tree.insert(40);
                      tree.insert(50);
                      tree.insert(25);
                      tree.preOrder()
                      console.log("#####")
                      tree.remove(40)
                      tree.preOrder()                      
                        `,
                        output: `
                        30 
                        20 
                        10 
                        25 
                        40 
                        50 
                        #####
                        30 
                        20 
                        10 
                        25 
                        50 
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>6. Red-Black Tree</b>
                </Span>
                <Span>
                  It's a kind of self balancing binary search tree which uses
                  one extra bit for the color of each node instead of its
                  balancing height to ensure that tree remains balanced during
                  insertion and deletion. We make uses of various flags for
                  rotation.
                </Span>
                <Span>
                  Rules: Root will always be black.There are no two adjacent red
                  nodes. Number of black nodes from root to the leaf node will
                  always be the same through any path. Newly inserted node will
                  always be given red.
                </Span>
                <Span>
                  We need to perform rotation when the parent of current node is
                  red.
                </Span>
                <Span>
                  In the insert operation, we check the color of the uncle to
                  decide the appropriate case. In the delete operation, we check
                  the color of the sibling to decide the appropriate case after
                  bst deletion.
                </Span>
                <p>
                  Red-Black Tree of height h has black-height greater than or
                  equal to h/2. Height less than or equal to 2log2(n+1) <br />
                  Cost Of Operations: <br />
                  Insertion: O(log n) <br />
                  Search: O(log n) <br />
                  Deletion: O(log n)
                </p>
                <CodeEditor
                  options={{
                    title: "Red-Black Tree",
                    output: null,
                    codes: {
                      Java: {
                        code: `
                        import java.io.*;

                        public class Main
                        {
                          public Node root;
                          public Main()
                          {
                            super();
                            root = null;
                          }
                          class Node
                          {
                            int data;
                            Node left;
                            Node right;
                            char colour;
                            Node parent;
                        
                            Node(int data)
                            {
                              super();
                              this.data = data; 
                              this.left = null; 
                              this.right = null; 
                              this.colour = 'R'; 
                              this.parent = null; 
                            }
                          }
                          Node rotateLeft(Node node)
                          {
                            Node x = node.right;
                            Node y = x.left;
                            x.left = node;
                            node.right = y;
                            node.parent = x; 
                            if(y!=null)
                              y.parent = node;
                            return(x);
                          }
                        
                          Node rotateRight(Node node)
                          {
                            Node x = node.left;
                            Node y = x.right;
                            x.right = node;
                            node.left = y;
                            node.parent = x;
                            if(y!=null)
                              y.parent = node;
                            return(x);
                          }
                        
                        
                          boolean ll = false;
                          boolean rr = false;
                          boolean lr = false;
                          boolean rl = false;
                        
                        
                          Node insertHelp(Node root, int data)
                          {
                            // f is true when RED RED conflict is there.
                            boolean f=false;
                            
                        
                            if(root==null)
                              return(new Node(data));
                            else if(data<root.data)
                            {
                              // find the location and mark f 
                              // true if desired condition 
                              // satisfies
                              // root.left -> root is parent at last
                              root.left = insertHelp(root.left, data);
                              root.left.parent = root;
                              if(root!=this.root)
                              {
                                if(root.colour=='R' && root.left.colour=='R')
                                  f = true;
                              }
                            }
                            else
                            {
                              root.right = insertHelp(root.right,data);
                              root.right.parent = root;
                              if(root!=this.root)
                              {
                                if(root.colour=='R' && root.right.colour=='R')
                                  f = true;
                              }
                            }
                        
                            if(this.ll) 
                            {
                              root = rotateLeft(root);
                              root.colour = 'B';
                              root.left.colour = 'R';
                              this.ll = false;
                            }
                            else if(this.rr) 
                            {
                              root = rotateRight(root);
                              root.colour = 'B';
                              root.right.colour = 'R';
                              this.rr = false;
                            }
                            else if(this.rl) 
                            {
                              root.right = rotateRight(root.right);
                              root.right.parent = root;
                              root = rotateLeft(root);
                              root.colour = 'B';
                              root.left.colour = 'R';
                        
                              this.rl = false;
                            }
                            else if(this.lr) 
                            {
                              root.left = rotateLeft(root.left);
                              root.left.parent = root;
                              root = rotateRight(root);
                              root.colour = 'B';
                              root.right.colour = 'R';
                              this.lr = false;
                            }
                        
                        // red red case
                        // is uncle is black,perform rotation
                            if(f)
                            {
                              if(root.parent.right == root) 
                              {
                                //  uncle -> root.parent.left
                                if(root.parent.left==null || root.parent.left.colour=='B') 
                                {
                                  if(root.left!=null && root.left.colour=='R')
                                    this.rl = true;
                                  else if(root.right!=null && root.right.colour=='R')
                                    this.ll = true;
                                }
                                else 
                                {
                                  root.parent.left.colour = 'B';
                                  root.colour = 'B';
                                  // root cannot be red
                                  if(root.parent!=this.root)
                                    root.parent.colour = 'R';
                                }
                              }
                              else
                              {
                                if(root.parent.right==null || root.parent.right.colour=='B')
                                {
                                  if(root.left!=null && root.left.colour=='R')
                                    this.rr = true;
                                  else if(root.right!=null && root.right.colour=='R')
                                    this.lr = true;
                                }
                                else
                                {
                                  root.parent.right.colour = 'B';
                                  root.colour = 'B';
                                  if(root.parent!=this.root)
                                    root.parent.colour = 'R';
                                }
                              }
                              f = false;
                            }
                            return(root);
                          }
                        
                          public void insert(int data)
                          {
                            if(this.root==null)
                            {
                              this.root = new Node(data);
                              this.root.colour = 'B';
                            }
                            else
                              this.root = insertHelp(this.root,data);
                          }
                          
                          public void inorderTraversal(Node node)
                          {
                            if(node!=null)
                            {
                              inorderTraversal(node.left);
                              System.out.printf("%d ", node.data);
                              inorderTraversal(node.right);
                            }	}
                        
                          public static void main(String[] args)
                          {
                            Main t = new Main();
                            int[] arr = {1,4,6,3,5,7,8,2,9};
                            for(int i=0;i<9;i++)
                            {
                              t.insert(arr[i]);
                          }
                            t.inorderTraversal(t.root);
                        }
                        }
                        Deletion -> https://www.geeksforgeeks.org/red-black-tree-set-3-delete-2/ ( for now )
                        `,
                        output: `
 1 2 3 4 5 6 7 8 9
 `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>7. N-ary (M-way) Tree</b>
                </Span>
                <Span>
                  Multi way trees are used to generate trees with order m, i.e.
                  each tree can contain nodes with maximum m-1 keys and m
                  children.
                </Span>
                <Span>
                  Number of elements = h to (m^h)-1 <br />
                  Height: log_m(n+1) to n
                </Span>
                <b>Basic Structure (Without Driver Code) :</b>
                <CodeEditor
                  options={{
                    title: "N-ary (M-way) Tree",
                    output: null,
                    codes: {
                      Python: {
                        code: `class node:
    def __init__(self):
        self.count = -1
        self.value = [-1]*(MAX)
        self.child = [None]*(MAX + 1)

def search(val, root, pos):

	if (root == None):
		return None
	else :
		if (searchnode(val, root, pos)):
			return root
		else:
			return search(val, root.child[pos], pos)
	

def searchnode(val, n, pos):
	if (val < n.value[1]):
		pos = 0
		return 0
	
  else :
		pos = n.count

		while ((val < n.value[pos]) and pos > 1):
			pos-=1
		if (val == n.value[pos]):
			return 1
		else:
			return 0
	

                        `,
                      },
                    },
                  }}
                />
                <Span>Examples: B Tree and B+ Tree</Span>
                <Span>
                  <b>B Tree</b>
                </Span>
                <Span>
                  They are perfectly balanced m way search trees where every
                  leaf node is at the same depth.Every node except root is
                  atleast half full (m/2).
                </Span>
                <Span>
                  Most of the tree operations require O(h) disk accesses , with
                  the help of fat b tree we can perform these operations with
                  O(log n). The height of B-Trees is kept low by putting maximum
                  possible keys in a B-Tree node. <br />
                  Minimum degree = t<br />
                  Nodes = 2*t -1
                </Span>
                <p>Basic Structure (Without Driver Code) :</p>
                <CodeEditor
                  options={{
                    title: "B Tree",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        
class Btree
{

	constructor(t)
	{
		this.root = null; 
    // BTreeNode
		this.t = t;
	}
	
	traverse()
	{
		if (this.root != null)
			this.root.traverse();
	}

	search(k)
	{
		if (this.root == null)
			return null;
		else
			return this.root.search(k);
	}
	
}

class BTreeNode
{
	constructor(t,leaf)
	{
		this.t = t;
    // degree
		this.leaf = leaf;
		this.keys = new Array(2 * t - 1);
		this.C = new Array(2 * t);
		this.n = 0;
	}

	traverse()
	{

		let i = 0;
		for (i = 0; i < this.n; i++) {

			if (this.leaf == false) {
				C[i].traverse();
			}
			console.log(keys[i] + " ");
		}

		if (leaf == false)
			C[i].traverse();
	}
	
	search(k) 
	{
		let i = 0;
		while (i < n && k > keys[i])
			i++;

		if (keys[i] == k)
			return this;

		if (leaf == true)
			return null;
		return C[i].search(k);
	}
}
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>B+ Tree</b>
                </Span>
                <Span>
                  This tree eliminates the indexing problem of B tree by storing
                  data pointers only at the leaf nodes whereas data pointers are
                  present at both internal and leaf nodes in case of b tree
                </Span>
                <Span>
                  Leaf nodes are present as structural linked list which makes
                  it easier for search and other operations
                </Span>
                <p>
                  Duplicates nodes may present in this tree unlike b tree , as
                  copy of desired node will be used during certain operations.
                </p>
                <p>Basic Structure (Without Driver Code) :</p>
                <CodeEditor
                  options={{
                    title: "B+ Tree",
                    output: null,
                    codes: {
                      python: {
                        code: `MAX = 3
                        
class Node :
  def __init__(self):
    self.IS_LEAF=False
    self.key, self.size=[None]*MAX,0
    self.ptr=[None]*(MAX+1)


class BPTree :

  def __init__(self):
    self.root = None

  def search(self,x):

    if (self.root == None) :
      cout << "Tree is empty\n"
        else :

      cursor = self.root

      while (not cursor.IS_LEAF) :

        for i in range(cursor.size) :
          if (x < cursor.key[i]) :
            cursor = cursor.ptr[i]
            break
          if (i == cursor.size - 1) :
            cursor = cursor.ptr[i + 1]
            break
      for i in range(cursor.size):
        if (cursor.key[i] == x) :
          print("Found")
          return				
      print("Not found")
  
  def insert(self, x):

    if (self.root == None) :
      self.root = Node()
      self.root.key[0] = x
      self.root.IS_LEAF = True
      self.root.size = 1
    
    else :
      cursor = self.root
      parent=None
      while (not cursor.IS_LEAF) :

        parent = cursor

        for i in range(cursor.size) :
          if (x < cursor.key[i]) :
            cursor = cursor.ptr[i]
            break
          if (i == cursor.size - 1) :
            cursor = cursor.ptr[i + 1]
            break
          
        
      if (cursor.size < MAX) :
        i = 0
        while (i < cursor.size and x > cursor.key[i]):
          i+=1
        

        for j in range(cursor.size,i,-1):
          cursor.key[j] = cursor.key[j - 1]
        

        cursor.key[i] = x
        cursor.size+=1

        cursor.ptr[cursor.size] = cursor.ptr[cursor.size - 1]
        cursor.ptr[cursor.size - 1] = None
      

      else :

        newLeaf = Node()

        virtualNode=[None]*(MAX + 1)

        for i in range(MAX):
          virtualNode[i] = cursor.key[i]
        
        i = 0


        while (i < MAX and x > virtualNode[i]) :
          i+=1

        for j in range(MAX,i,-1) :
          virtualNode[j] = virtualNode[j - 1]
        

        virtualNode[i] = x
        newLeaf.IS_LEAF = True

        cursor.size = int((MAX + 1) / 2)
        newLeaf.size = int(MAX + 1 - (MAX + 1) / 2)

        cursor.ptr[cursor.size] = newLeaf

        newLeaf.ptr[newLeaf.size] = cursor.ptr[MAX]

        cursor.ptr[MAX] = None

        for i in range(cursor.size):
          cursor.key[i] = virtualNode[i]
      
        j=cursor.size
        for i in range(newLeaf.size):
          newLeaf.key[i] = virtualNode[j]
          j+=1
        if (cursor == self.root) :

          newRoot = Node()
          newRoot.key[0] = newLeaf.key[0]
          newRoot.ptr[0] = cursor
          newRoot.ptr[1] = newLeaf
          newRoot.IS_LEAF = False
          newRoot.size = 1
          root = newRoot
        
        else :


          insertInternal(newLeaf.key[0],
                parent,
                newLeaf)
      
    

def insertInternal(x, cursor, child):

  if (cursor.size < MAX) :
    i = 0

    while (x > cursor.key[i] and i < cursor.size) :
      i+=1
    for j in range(cursor.size,i,-1) :

      cursor.key[j] = cursor.key[j - 1]

    for j in range(cursor.size + 1, i + 1,-1):
      cursor.ptr[j] = cursor.ptr[j - 1]
    

    cursor.key[i] = x
    cursor.size+=1
    cursor.ptr[i + 1] = child
  
  else :

    newInternal = Node()
    virtualKey=[None]*(MAX + 1)
    virtualPtr=[None]*(MAX + 2)
    for i in range(MAX) :
      virtualKey[i] = cursor.key[i]
    

    for i in range(MAX + 1):
      virtualPtr[i] = cursor.ptr[i]
    i = 0

    while (x > virtualKey[i] and i < MAX) :
      i+=1
    for j in range(MAX + 1,i,-1):

      virtualKey[j] = virtualKey[j - 1]
    

    virtualKey[i] = x
    for j in range(MAX + 2, i + 1,-1) :
      virtualPtr[j] = virtualPtr[j - 1]
    

    virtualPtr[i + 1] = child
    newInternal.IS_LEAF = false

    cursor.size = (MAX + 1) / 2

    newInternal.size = MAX - (MAX + 1) / 2
    j = cursor.size + 1
    for i in range(newInternal.size):
      newInternal.key[i] = virtualKey[j]
      j+=1
    

    j = cursor.size + 1
    for i in range(newInternal.size):
      newInternal.ptr[i] = virtualKey[j]
      j+=1
    

    if (cursor == self.root) :

      newRoot = self.root
      newRoot.key[0] = cursor.key[cursor.size]
      newRoot.ptr[0] = cursor
      newRoot.ptr[1] = newInternal
      newRoot.IS_LEAF = false
      newRoot.size = 1
      root = newRoot
    else :
      insertInternal(cursor.key[cursor.size],
            findParent(root,
                  cursor),
            newInternal)

  def findParent(self, cursor, child):

    if (cursor.IS_LEAF or (cursor.ptr[0]).IS_LEAF) :
      return None
    
    for i in range(cursor.size + 1) :

      if (cursor.ptr[i] == child) :
        parent = cursor
        return parent
      else :
        parent = findParent(cursor.ptr[i], child)

        if (parent != None):
          return parent
    return parent


  def getRoot(self):
    return self.root


if __name__=='__main__':
  node=BPTree()
  node.insert(6)
  node.insert(16)
  node.insert(26)
  node.insert(36)
  node.insert(46)
  node.search(16)
                        `,
                        output: `Found`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Graph</b>
                </Span>
                <Span>
                  It consists of finite number of nodes (vertices) and edges
                  which connect two nodes.
                </Span>
                <Span>In facebook, each person is represented by a node.</Span>
                <Span>
                  <b>BFS & DFS</b>
                </Span>
                <Span>
                  BFS (level order traversal)(queue) &
                  DFS(preorder,postorder,inorder tree trvaersal)(stack) for
                  graph is similar to that of a graph, but unlike trees it may
                  contain cycles as well. A node may be visited twice that's why
                  we make use of boolean array.
                </Span>
                <Span>Representations:</Span>
                <Span>
                  <b>Adjacency List</b>
                </Span>
                <p>
                  It's a array (array[]) of lists where earch vertex each
                  element array[i] represents all the vertices adjacent to ith
                  vertex.
                </p>
                <CodeEditor
                  options={{
                    title: "Adjacency List",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        Map.prototype.inspect = function() {
                          return 'Map('+ mapEntriesToString(this.entries()) +')'
                        }
                                                
                        function mapEntriesToString(entries) {
                          return Array
                          .from(entries, ([k, v]) => k+':'+ v)
                          .join("");
                        }                       
                                                
                        class Graph {
                          constructor(noOfVertices)
                          {
                                this.noOfVertices = noOfVertices;
                                this.adjList = new Map();
                          }
                                                  
                          addVertex(v){
                            this.adjList.set(v, [])
                          }
                         
                          addEdge(v, w)
                          {
                            this.adjList.get(v).push(w);
                            this.adjList.get(w).push(v);
                          }
                           
                          printAdjList(){
                            console.log(this.adjList)
                            // because of custom prototype
                            var get_keys = this.adjList.keys();
                            for (var i of get_keys)
                            {
                                var get_values = this.adjList.get(i);
                                var conc = "";
                                for (var j of get_values)
                                    conc += j + " ";
                                console.log(i + " -> " + conc);
                            }
                        }
                        
                        bfs(startingNode)
                        {
                            var visited = {};
                            var q = [];
                            visited[startingNode] = true;
                            q.push(startingNode);
                            while (q.length!=0) {
                                var getQueueElement = q.shift();
                                console.log(getQueueElement);
                                var get_List = this.adjList.get(getQueueElement);
                                for (var i in get_List) {
                                    var neighbour = get_List[i];
                                    if (!visited[neighbour]) {
                                        visited[neighbour] = true;
                                        q.push(neighbour);
                                    }
                                }
                            }
                        }
                        
                        dfs(start){
                          this.dfsHelper(start,{})
                        }
                        
                        dfsHelper(vert,visited){
                          visited[vert] = true;
                          console.log(vert);
                          var get_neighbours = this.adjList.get(vert);
                          for (let neighbour of get_neighbours) {
                            if (!visited[neighbour])
                              this.dfsHelper(neighbour, visited);
                          }
                        }
                        }
                         
                          
                        const g = new Graph(6)
                        const v = ['A','B','C','D','E','F']
                        for(let x of v){
                          g.addVertex(x)
                        }
                        
                        g.addEdge('A', 'B');
                        g.addEdge('A', 'D');
                        g.addEdge('A', 'E');
                        g.addEdge('B', 'C');
                        g.addEdge('D', 'E');
                        g.addEdge('E', 'F');
                        g.addEdge('E', 'C');
                        g.addEdge('C', 'F');
                        g.printAdjList();
                        console.log("BFS");
                        g.bfs(v[0]);        
                        console.log("DFS");
                        g.dfs(v[0]);    
                        
                        // function addEdge(adj,u,v)
                        // {
                        //     adj[u].push(v);
                        //     adj[v].push(u);
                        // }
                        // function printGraph(adj)
                        // {
                        //     for (let i = 0; i < adj.length; i++) {
                        //     console.log("Adjacency list of vertex" + i);
                        //     console.log("head");
                        //     for (let j = 0; j < adj[i].length; j++) {
                        //      console.log(" -> "+adj[i][j]);
                        //     }
                        //    }
                        // }
                        // let V = 5;
                        // let adj= [];        
                        // for (let i = 0; i < V; i++)
                        //     adj.push([]);
                        //  addEdge(adj, 0, 1);
                        //  addEdge(adj, 0, 4);
                        //  addEdge(adj, 1, 2);
                        //  addEdge(adj, 1, 3);
                        //  addEdge(adj, 1, 4);
                        //  addEdge(adj, 2, 3);
                        //  addEdge(adj, 3, 4);                    
                        `,
                      },
                    },
                    output: `
                    Map {
                      'A' => [ 'B', 'D', 'E' ],
                      'B' => [ 'A', 'C' ],
                      'C' => [ 'B', 'E', 'F' ],
                      'D' => [ 'A', 'E' ],
                      'E' => [ 'A', 'D', 'F', 'C' ],
                      'F' => [ 'E', 'C' ]
                    }
                    A -> B D E 
                    B -> A C 
                    C -> B E F 
                    D -> A E 
                    E -> A D F C 
                    F -> E C 
                    BFS
                    A
                    B
                    D
                    E
                    C
                    F
                    DFS
                    A
                    B
                    C
                    E
                    D
                    F`,
                  }}
                />
                <p>
                  <b>Practice</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Adjacency List(Practice)",
                    codes: {
                      Javacript: {
                        code: `class Graph{

                          constructor(n,v){
                            this.n = n
                            this.g = {}
                            this.v = v 
                          }
                          
                          addVertex(i){
                            this.g[i] = []
                          }
                        
                          removeVertex(i){
                            delete this.g[i]
                            for(let k in this.g){
                              this.g[k] = this.g[k].filter(x=>x!==i)
                            }
                          }
                        
                          addEdge(u,v){
                           this.g[u].push(v)
                           this.g[v].push(u)
                          }
                        
                          print(){
                            let res = {}
                            Object.entries(this.g).forEach((i,k)=>{
                              res[this.v[i[0]]] = i[1].map(x=>this.v[x])  
                            })
                            console.log(res)
                          }
                           
                          bfs(v = 0){
                            let q = []
                            let visited = {}
                            q.push(v)
                            visited[v] = true
                            while(q.length){
                              const ele = q.shift()
                              console.log(this.v[ele])
                              const list = this.g[ele]
                              for(let i of list){
                                if(!visited[i]){
                                  visited[i] = true
                                  q.push(i)
                                }
                              } 
                            }
                          }
                        
                          dfs(v=0,visited={}){
                            visited[v] = true
                            console.log(this.v[v])
                            const list = this.g[v]
                            for(let i of list){
                               if(!visited[i]) this.dfs(i,visited)
                            }
                          }
                        
                        }
                        
                        const v = ['A','B','C','D','E','F']
                        const g = new Graph(6,v)
                        for(let i in v)
                        g.addVertex(i)
                        g.addEdge(0, 1);
                        g.addEdge(0, 3);
                        g.addEdge(0, 4);
                        g.addEdge(1, 2);
                        g.addEdge(3, 4);
                        g.addEdge(4, 5);
                        g.addEdge(4, 2);
                        g.addEdge(2, 5);
                        // g.removeVertex(1)
                        g.print()
                        g.bfs()
                        g.dfs()`,
                        output: `{
                          A: [ 'B', 'D', 'E' ],
                          B: [ 'A', 'C' ],
                          C: [ 'B', 'E', 'F' ],
                          D: [ 'A', 'E' ],
                          E: [ 'A', 'D', 'F', 'C' ],
                          F: [ 'E', 'C' ]
                        }
                        A
                        B
                        D
                        E
                        C
                        F
                        A
                        B
                        C
                        E
                        D
                        F`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Adjacency Matrix</b>
                </Span>
                <Span>
                  It's a 2D array(adj[][]) of size V * V, where V is the number
                  of vertices in the graph. adj[u][v]= 1 for unweighted graph
                  means there is a edge between u and v.
                </Span>
                <p>
                  In case of weighted graphs , if adj[i][j] = w, then w will be
                  the weight of the edge between vertices u and v.
                  <br />
                  Adding a vertex: O(V^2)
                  <br />
                  Removing a vertex: O(1)
                </p>
                <CodeEditor
                  options={{
                    title: "Adjacency Matrix",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Graph
                        {
                          constructor(x)
                          {
                            this.n=x;
                            // numOfVertices
                            // this.g = new Array(10);
                            
                            // this.g = Array(10).fill(null).map(()=>Array(10).fill(0));
                            // ineffient and Array(10).fill(Array(10)) is bad as rows will be copied by reference
                            // var arr = Array(2).fill(Array(4))  
                            // arr[0][0] =1
                            // arr , arr[0][0] , arr1[0][1]
                            
                            this.g = Array.from(Array(10),()=>Array(10).fill(0))
                            // more efficient
                            
                            
                        
                            // for(let i=0;i<10;i++)
                            // {
                            // 	this.g[i]=new Array(10);
                            // 	for(let j=0;j<10;j++)
                            // 	{
                            // 		this.g[i][j]=0;
                            // 	}
                            // }
                            // adjMatrix
                          }
                          
                          displayAdjacencyMatrix()
                          {
                            console.log("Adjacency Matrix:");
                            for (let i = 0; i < this.n; ++i)
                            {
                              let output=""
                              for (let j = 0; j < this.n; ++j)
                              {
                                output += " " + this.g[i][j];
                              }
                              console.log(output)
                            }
                          }
                          
                          addEdge(x,y)
                          {
                            if ((x >= this.n) || (y > this.n))
                            {
                              console.log("Vertex does not exists!");
                            }
                        
                            if (x == y)
                            {
                              console.log("Same Vertex!");
                            }
                            else
                            {
                              this.g[y][x] = 1;
                              this.g[x][y] = 1;
                            }
                          }
                          
                          addVertex()
                          {
                            this.n++;
                            for (let i = 0; i < this.n; ++i)
                            {
                              this.g[i][this.n - 1] = 0;
                              this.g[this.n - 1][i] = 0;
                            }
                          }
                          
                          removeVertex(x)
                          {
                            if (x > this.n)
                            {
                              console.log("Vertex not present!");
                              return;
                            }
                            else
                            {
                              let i;
                              while (x < this.n)
                              {
                                for (i = 0; i < this.n; ++i)
                                {
                                  this.g[i][x] = this.g[i][x + 1];
                                }
                        
                                for (i = 0; i < this.n; ++i)
                                {
                                  this.g[x][i] = this.g[x + 1][i];
                                }
                                x++;
                              }
                              this.n--;
                            }
                          }
                          
                        }
                        
                        let obj = new Graph(4);
                        // 0 1 2 3 -> vertices
                        obj.addEdge(0, 1);
                        obj.addEdge(0, 2);
                        obj.addEdge(1, 2);
                        obj.addEdge(2, 3);
                        obj.displayAdjacencyMatrix();
                        obj.addVertex();
                        obj.addEdge(4, 1);
                        obj.addEdge(4, 3);
                        obj.displayAdjacencyMatrix();
                        obj.removeVertex(1);
                        obj.displayAdjacencyMatrix();                                              
                        `,
                      },
                    },
                    output: `
                    Adjacency Matrix:
                    0 1 1 0
                    1 0 1 0
                    1 1 0 1
                    0 0 1 0
                   Adjacency Matrix:
                    0 1 1 0 0
                    1 0 1 0 1
                    1 1 0 1 0
                    0 0 1 0 1
                    0 1 0 1 0
                   Adjacency Matrix:
                    0 1 0 0
                    1 0 1 0
                    0 1 0 1
                    0 0 1 0
                    `,
                  }}
                />
                <p>
                  <b>Practice:</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Adjacency Matrix(Practice)",
                    codes: {
                      Javascript: {
                        code: `class Graph{

                          constructor(n,v){
                            this.n = n
                            this.g = Array.from(Array(n*2),()=>Array(n*2).fill(0))
                            this.v = v 
                          }
                          
                          addVertex() {
                            this.n++;    
                            for (let i = 0; i < this.n; ++i) {
                              this.g[i][this.n - 1] = 0;
                              this.g[this.n - 1][i] = 0;
                            }
                          }
                        
                            removeVertex(x) {
                                if (x > this.n) {
                                    console.log("Vertex not present!");
                                    return;
                                } else {
                                    let i;
                                    while (x < this.n) {
                                        for (i = 0; i < this.n; ++i) {
                                            this.g[i][x] = this.g[i][x + 1];
                                        }
                        
                                        for (i = 0; i < this.n; ++i) {
                                            this.g[x][i] = this.g[x + 1][i];
                                        }
                                        x++;
                                    }
                                    this.n--;
                                }
                            }
                        
                          addEdge(u,v){
                           this.g[u][v] = 1
                           this.g[v][u] = 1
                          }
                        
                          print(){
                            this.g.slice(0,this.n).forEach((x,i)=>console.log(x.slice(0,this.n)))
                          }
                           
                          bfs(v = 0){
                            let q = []
                            let visited = {}
                            q.push(v)
                            visited[v] = true
                            while(q.length){
                              const ele = q.shift()
                              console.log(this.v[ele])
                              for(let i=0;i<this.n;i++){
                                if(!visited[i] && this.g[ele][i]){
                                  visited[i] = true
                                  q.push(i)
                                }
                              }
                            }
                          }
                        
                          dfs(v=0,visited={}){
                            visited[v] = true
                            console.log(this.v[v])
                            const list = this.g[v]
                            for(let i =0;i<this.n;i++){
                               if(!visited[i] && list[i]) this.dfs(i,visited)
                            }
                          }
                        
                        }
                        
                        const v = ['A','B','C','D','E','F']
                        const g = new Graph(5,v)
                        g.addEdge(0, 1);
                        g.addEdge(0, 3);
                        g.addEdge(0, 4);
                        g.addEdge(1, 2);
                        g.addEdge(3, 4);
                        g.addEdge(4, 2);
                        g.addVertex()
                        g.addEdge(4, 5);
                        g.addEdge(2, 5);
                        // g.removeVertex(1)
                        g.print()
                        g.bfs()
                        g.dfs()`,
                        output: `[ 0, 1, 0, 1, 1, 0 ]
                        [ 1, 0, 1, 0, 0, 0 ]
                        [ 0, 1, 0, 0, 1, 1 ]
                        [ 1, 0, 0, 0, 1, 0 ]
                        [ 1, 0, 1, 1, 0, 1 ]
                        [ 0, 0, 1, 0, 1, 0 ]
                        A
                        B
                        D
                        E
                        C
                        F
                        A
                        B
                        C
                        E
                        D
                        F`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Trie</b>
                </Span>
                <p>
                  Trie is a tree which stores strings that can be used for
                  efficient information re<b>trie</b>val. Using well balanced
                  bst we can perform insert, delete and search operations in M *
                  O(log n) where M is max length of string and n is number of
                  keys , but we can implement same set of operations in O(M) in
                  trie.
                </p>
                <CodeEditor
                  options={{
                    title: "Trie",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        let ALPHABET_SIZE = 26;

                        class TrieNode {
                            constructor() {
                                this.children = new Array(ALPHABET_SIZE);
                                this.isEndOfWord = false;
                            }
                        }
                        
                        let keys = ["the", "a", "there", "answer",
                                               "any", "by", "bye", "their" 
                        ];
                        
                        let n = keys.length;
                        
                        class Trie {
                            constructor() {
                                this.root = new TrieNode()
                            }
                        
                            insert(key) {
                                let level;
                                let length = key.length;
                                let index;
                               
                                let pCrawl = this.root;
                                // pointer pCrawl == this.root pCrawl === this.root
                        
                                for (level = 0; level < length; level++)
                                {
                                    index = key[level].charCodeAt(0) - 97;
                                    if (pCrawl.children[index] == null)
                                        pCrawl.children[index] = new TrieNode();
                               
                                    pCrawl = pCrawl.children[index];
                                }
                                pCrawl.isEndOfWord = true;
                            }
                        
                            search(key) {
                                let level;
                                let length = key.length;
                                let index;
                                let pCrawl = this.root;
                               
                                for (level = 0; level < length; level++)
                                {
                                    index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
                               
                                    if (!pCrawl.children[index])
                                        return false;
                               
                                    pCrawl = pCrawl.children[index];
                                }
                               
                                return (pCrawl.isEndOfWord);
                            }
                        
                            isEmpty(root=this.root) {
                                for (let i = 0; i < ALPHABET_SIZE; i++)
                                    if (root.children[i] != null)
                                        return false;
                                return true;
                            }
                        
                            remove(key,depth){
                             this.removeHelper(key,depth,this.root)
                            }
                        
                            removeHelper(key, depth,root) {
                                if (root == null)
                                    return null;
                                if (depth == key.length) {
                                    if (root.isEndOfWord)
                                        root.isEndOfWord = false;
                                    if (this.isEmpty(root)) {
                                        root = null;
                                    }
                                    return root;
                            }
                        
                            let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
                            root.children[index] =
                            this.removeHelper(key, depth + 1,root.children[index]);
                        
                            if (this.isEmpty(root) && root.isEndOfWord == false) {
                                    root = null;
                            }
                            return root
                            }
                        
                            isLeafNode(root)
                            {
                            return root.isEndOfWord !== false;
                            }
                          
                            print(){
                             this.printHelper(this.root,[],0)
                            }
                        
                            printHelper(root,str,level){
                        
                        
                            if (this.isLeafNode(root)) 
                            {
                                str[level] = '';
                                console.log(str.join('').substring(0,str.indexOf('')))
                            }
                            let i;
                            for (i = 0; i < ALPHABET_SIZE; i++) 
                            {
                        
                                if (root.children[i] !== undefined) 
                                {
                                    str[level] = String.fromCharCode(i+97);
                                    this.printHelper(root.children[i], str, level + 1);
                                }
                            }
                            }
                        
                        }
                        
                        const trie = new Trie();
                        
                        for (let i = 0; i < n; i++)
                            trie.insert(keys[i]);
                        
                        console.log(trie.search("the")) // true
                        console.log(trie.search("anyer")) // false
                        trie.print()
                        trie.remove("the", 0);
                        console.log(trie.search("the")) // false
                        trie.print()
                        
                        `,
                        output: `
                        true
                        false
                        a
                        answer
                        any
                        by
                        bye
                        the
                        their
                        there
                        false
                        a
                        answer
                        any
                        by
                        bye
                        their
                        there
                        `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Tabular",
            content: (
              <>
                <Span>
                  <b>Hash Table</b>
                </Span>
                <Span>
                  A Hash Table transforms a key into an integer index using a
                  hash function, and the index will decide where to store the
                  key/value pair in memory:
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    title: "Hash Table",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class HashTable {
                          constructor() {
                            this.table = new Array(127);
                            this.size = 0;
                          }
                        
                          _hash(key) {
                            let hash = 0;
                            for (let i = 0; i < key.length; i++) {
                              hash += key.charCodeAt(i);
                            }
                            return hash % this.table.length;
                          }
                        
                          set(key, value) {
                            const index = this._hash(key);
                            this.table[index] = [key, value];
                            this.size++;
                          }
                        
                          get(key) {
                            const target = this._hash(key);
                            return this.table[target];
                          }
                        
                          remove(key) {
                            const index = this._hash(key);
                        
                            if (this.table[index] && this.table[index].length) {
                              this.table[index] = [];
                              this.size--;
                              return true;
                            } else {
                              return false;
                            }
                          }
                        }
                        
                        const ht = new HashTable();
                        
                        ht.set("a", 1);
                        ht.set("b", 2);
                        console.log(ht.get("a")); 
                        console.log(ht.get("b"));
                        `,
                        output: `
                        [ 'a', 1 ]
[ 'b', 2 ]
                        `,
                      },
                    },
                  }}
                />
                <Span>Map</Span>
                <p>
                  A map stores a collection of (key,value) pairs, such that each
                  possible key appears at most once in the collection.
                </p>
                <CodeEditor
                  options={{
                    title: "Map",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map.get('a'));
map.set('a', 97);
console.log(map.get('a'));
console.log(map.size);
map.delete('b');
console.log(map.size);
console.log(map.has('a'))
for (const [key, value] of map) {
  console.log(key + ' = ' + value)
}
map.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
console.log([...map])
console.log(Array.from(map))
const original = new Map([
  [1, 'one']
])
const clonedMap = new Map(original)
console.log(Array.from(original))
console.log(map.entries())

                        `,
                        output: `
                        1
97
3
2
true
a = 97
c = 3
a = 97
c = 3
[ [ 'a', 97 ], [ 'c', 3 ] ]
[ [ 'a', 97 ], [ 'c', 3 ] ]
[ [ 1, 'one' ] ]
[Map Entries] { [ 'a', 97 ], [ 'c', 3 ] }
                        `,
                      },
                      Java: {
                        code: `
                        // All three classes HashMap, TreeMap and LinkedHashMap
// implements java.util.Map interface, and represents
// mapping from unique key to values.

import java.util.*;
import java.io.*;

class Main{

  static PrintStream ps = System.out;

  public static void main(String ...s){
  
  // HashMap is implemented by array of linked lists. It contains 
  // unique elements. It may have one null key and multiple null
  // values.
  // It maintains no order.
  // HashMap extends AbstractMap

  HashMap<Integer, String> map = new HashMap<Integer, String>();
  map.put(9,"b");
  map.put(8,"a");
  ps.println(map.get(9));
  ps.println(map.containsKey(8));
  ps.println(map.containsValue("b"));
  ps.println(map.keySet());
  map.entrySet().forEach(ps::println);
  
  // LinkedHashMap is same as hahmap but maintains insertion
  // order and is implemeted by doubly linked buckets.

  Map<Integer, String> map1 = new LinkedHashMap<Integer, String>();
  map1.put(8,"a");
  map1.put(9,"b");
  map1.entrySet().forEach(ps::println);

  // A TreeMap contains values based on the key
  // It is same as HashMap instead maintains ascending 
  // order(Sorted using the natural order of its key). 

  Map<Integer, String> map2 = new TreeMap<Integer, String>();
  map2.put(9,"a");
  map2.put(8,"b");
  map2.entrySet().forEach(ps::println);

  // A HashTable is an array of list (bucket). Position of
  // bucket is identified by calling hashcode()


  Hashtable<Integer, String> ht = new Hashtable<>(4);
  ht.put(1, "one");
  ht.put(2, "two");
  ht.put(3, "three");
  ps.println(ht);
  // It contains only unique elements . It is synchronized
  // and a legacy class.

  }

}
                        `,
                        output: `
                        b
true
true
[8, 9]
8=a
9=b
8=a
9=b
8=b
9=a
{3=three, 2=two, 1=one}
                        `,
                      },
                      Kotlin: {
                        code: `import java.util.*
                        import java.util.function.Consumer
                        
                        internal object Main {
                            private var ps = System.out
                            @JvmStatic
                            fun main(s: Array<String>) {
                                
                                val map = HashMap<Int, String>()
                                map[9] = "b"
                                map[8] = "a"
                                ps.println(map[9])
                                ps.println(map.containsKey(8))
                                ps.println(map.containsValue("b"))
                                ps.println(map.keys)
                                map.entries.forEach(Consumer<Map.Entry<Int, String>> { x: Map.Entry<Int, String>? ->
                                    ps.println(
                                        x
                                    )
                                })
                                val map1: MutableMap<Int, String> = LinkedHashMap()
                                map1[8] = "a"
                                map1[9] = "b"
                                map1.entries.forEach(Consumer<Map.Entry<Int, String>> { x: Map.Entry<Int, String>? ->
                                    ps.println(
                                        x
                                    )
                                })
                                val map2: MutableMap<Int, String> = TreeMap()
                                map2[9] = "a"
                                map2[8] = "b"
                                map2.entries.forEach(Consumer<Map.Entry<Int, String>> { x: Map.Entry<Int, String>? ->
                                    ps.println(
                                        x
                                    )
                                })
                                val ht = Hashtable<Int, String>(4)
                                ht[1] = "one"
                                ht[2] = "two"
                                ht[3] = "three"
                                ps.println(ht)
                            }
                        }`,
                        output: `
                        b
                        true
                        true
                        [8, 9]
                        8=a
                        9=b
                        8=a
                        9=b
                        8=b
                        9=a
                        {3=three, 2=two, 1=one}
                        `,
                      },
                      Python: {
                        code: `# Python Maps also called ChainMap is a type of data
# structure to manage multiple dictionaries together 
# as one unit. The combined dictionary contains the key
# and value pairs in a specific sequence eliminating 
# any duplicate keys. 

import collections

dict1 = {'day1': 'Mon', 'day2': 'Tue'}
dict2 = {'day3': 'Wed', 'day1': 'Thu'}

res = collections.ChainMap(dict1, dict2)

print(res.maps)

print('Keys = {}'.format(list(res.keys())))
print('Values = {}'.format(list(res.values())))
print()

print('elements:')
for key, val in res.items():
   print('{} = {}'.format(key, val))
print()

print('day3 in res: {}'.format(('day1' in res)))
print('day4 in res: {}'.format(('day4' in res)))

res2 = collections.ChainMap(dict2, dict1)
print(res2.maps)

dict2['day4'] = 'Fri'
print(res.maps)`,
                        output: `
                        [{'day1': 'Mon', 'day2': 'Tue'}, {'day3': 'Wed', 'day1': 'Thu'}]
Keys = ['day3', 'day1', 'day2']
Values = ['Wed', 'Mon', 'Tue']

elements:
day3 = Wed
day1 = Mon
day2 = Tue

day3 in res: True
day4 in res: False
[{'day3': 'Wed', 'day1': 'Thu'}, {'day1': 'Mon', 'day2': 'Tue'}]
[{'day1': 'Mon', 'day2': 'Tue'}, {'day3': 'Wed', 'day1': 'Thu', 'day4': 'Fri'}]
                        `,
                      },
                      "C++": {
                        code: `
                        // #include <iostream>
// #include <iterator>
// #include <map>
#include <bits/stdc++.h>

using namespace std;

// map vs unordered_map

// order is maintained in map and we need predecessor/successor 
// of elements whereas no order is required in case of
// unordered map, single element can be accessed w/o any 
// traversal and we need to keep count of some data.

int main()
{

	map<int, int> m;
  m[0] = 60;
	m.insert(pair<int, int>(1, 40));
	m.insert(pair<int, int>(2, 30));
	m.insert(pair<int, int>(3, 60));
	m.insert(pair<int, int>(4, 20));
	m.insert(pair<int, int>(5, 50));
	m.insert(pair<int, int>(6, 50));
	m.insert(pair<int, int>(7, 10));
	// m.erase(m.begin(), m.find(3));
  m.erase(m.find(3));
	map<int, int>::iterator itr;
	cout << "The map m is : "<< endl;
	for (itr = m.begin(); itr != m.end(); ++itr) {
		cout << itr->first << ':' << itr->second<< endl;
	}
	cout << endl;

  unordered_map<int, int> umap;

	umap[5] = 10;
	umap[3] = 5;
	umap[20] = 100;
	umap[1] = 1;
  umap.erase(1);

	for (auto i = umap.begin();
		i != umap.end(); i++)
	{
		cout << i->first
				<< " : "
				<< i->second << endl;
	}

  if(umap.find(9)==umap.end()){
    cout << "Not found"  << endl;
  }

	return 0;
}
                        `,
                        output: `
                        The map m is : 
0:60
1:40
2:30
4:20
5:50
6:50
7:10

20 : 100
5 : 10
3 : 5
Not found
                        `,
                      },
                    },
                  }}
                />
                <Span>Set</Span>
                <p>
                  A set is an abstract data type that can store unique values,
                  without any particular order.
                  {/* https://www.tutorialspoint.com/python_data_structure/python_maps.htm */}
                </p>
                <CodeEditor
                  options={{
                    title: "Set",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        const customSet = new Set()

                        customSet.add(1)          
                        customSet.add(5)           
                        customSet.add(5)    
                        customSet.add(true)           
                        customSet.add('abc') 
                        const o = {a: 1, b: 2}
                        customSet.add(o)
                        customSet.delete(1)
                        console.log(customSet)
                        console.log(customSet.has(o))
                        console.log(customSet.size)
                        const mySet1 = customSet
                        console.log(Array.from(new Set([1,2,3,3])))
                        for (let item of mySet1) console.log(item)
                        for (let item of mySet1.keys()) console.log(item)
                        for (let [key, value] of mySet1.entries()) console.log(key)
                        
                        `,
                        output: `
                        Set { 5, true, 'abc', { a: 1, b: 2 } }
                        true
                        4
                        [ 1, 2, 3 ]
                        5
                        true
                        abc
                        { a: 1, b: 2 }
                        5
                        true
                        abc
                        { a: 1, b: 2 }
                        5
                        true
                        abc
                        { a: 1, b: 2 }
                        `,
                      },
                      Java: {
                        code: `
                        // All three classes HashSet, TreeSet and LinkedHashSet
// implements java.util.Set interface, and represents
// mapping from unique key to values.

import java.util.*;
import java.io.*;

// HashSet: If you don't want to maintain insertion order but want  
// to store unique objects. (thread -safe)
// LinkedHashSet: If you want to maintain the insertion order of 
// elements then you can use LinkedHashSet. (not thread -safe)
// TreeSet: If you want to sort the elements according to some 
// Comparator then use TreeSet. (not thread -safe)

// Order of execution forinsertion and deletion operations:
// TreeSet > LinkedHashSet > HashSet

class Helper implements Comparator<String> {
  
    public int compare(String str1, String str2)
    {
  
        String first_Str;
        String second_Str;
  
        first_Str = str1;
        second_Str = str2;
  
        return second_Str.compareTo(first_Str);
    }
}


class Main{

  static PrintStream ps = System.out;

  public static void main(String ...s){

    LinkedHashSet<String> set1
            = new LinkedHashSet<>();
    TreeSet<String> set2 = new TreeSet<>();
    HashSet<String> set3 = new HashSet<String>();
    TreeSet<String> set4 = new TreeSet<String>(new Helper());

    for (String str : Arrays.asList("A", "B","C", "D")) {
      set1.add(str);
      set2.add(str);
      set3.add(str);
      set4.add(str);
    }

    set1.remove("D");

    ps.println(set1);
    ps.println(set2);
    ps.println(set3);
    ps.println(set4);
    ps.println(set1.contains("A"));

  }

}
                        `,
                        output: `
                        [A, B, C]
[A, B, C, D]
[A, B, C, D]
[D, C, B, A]
true
                        `,
                      },
                      Kotlin: {
                        code: `import java.io.PrintStream
                        import java.util.*
                        
                        internal class Helper : Comparator<String> {
                            override fun compare(str1: String, str2: String): Int {
                                val str1: String = str1
                                return str2.compareTo(str1)
                            }
                        }
                        
                        internal object Main {
                            private var ps: PrintStream = System.out
                            @JvmStatic
                            fun main(s: Array<String>) {
                                val set1 = LinkedHashSet<String>()
                                val set2 = TreeSet<String>()
                                val set3 = HashSet<String>()
                                val set4 = TreeSet(Helper())
                                for (str in listOf("A", "B", "C", "D")) {
                                    set1.add(str)
                                    set2.add(str)
                                    set3.add(str)
                                    set4.add(str)
                                }
                                set1.remove("D")
                                ps.println(set1)
                                ps.println(set2)
                                ps.println(set3)
                                ps.println(set4)
                                ps.println(set1.contains("A"))
                            }
                        }`,
                        output: `
                        [A, B, C]
                        [A, B, C, D]
                        [A, B, C, D]
                        [D, C, B, A]
                        true
                        `,
                      },
                      Python: {
                        code: `days=set(["Mon","Tue","Wed","Thu","Fri","Sat","Sun",1])

months={"Jan","Feb","Mar"}

dates={21,22,17}

days.add("Sun")

days.discard(1)

# set1 - set2 set1 & set2 

print(days)
print(months)
print(dates)
                        `,
                        output: `
                        {'Sat', 'Tue', 'Mon', 'Fri', 'Sun', 'Wed', 'Thu'}
{'Feb', 'Jan', 'Mar'}
{17, 21, 22}
                        `,
                      },
                      "C++": {
                        code: `
                        #include <bits/stdc++.h>
using namespace std;

set<int> s;

void inorderSuccessor(int key) {
	if (s.find(key) == s.end()) {
		cout << "Key doesn't exist"<<endl;
		return;
	}
	set<int>::iterator it;
	it = s.find(key);
	++it;
	if (it == s.end()) {
		cout << "No successor"<<endl;
		return;
	}
	cout << "successor of " << key << " is=";
	cout << *(it) << endl;
}

void inorderPredecessor(int key) {
	if (s.find(key) == s.end()) {
		cout << "Key doesn't exist"<<endl;
		return;
	}

	set<int>::iterator it;
	it = s.find(key);
	if (it == s.begin()) {
		cout << "No predecessor"<<endl;
		return;
	}
	--it;
	cout << "predecessor of " << key << " is=";
	cout << *(it) << endl;
}

int main() {
	s.insert(5);
	s.insert(1);
	s.insert(6);
	s.insert(3);
	s.insert(7);
	s.insert(2);
	s.erase(7);
	unordered_set<int> s1;
	s1.insert(5);
	s1.insert(1);
	s1.insert(6);
	s1.insert(3);
	s1.insert(7);
	s1.insert(2);
	s1.erase(7);

	cout << "Elements of set in sorted order:" << endl;
	for (auto it : s)
		cout << it << " ";
	cout << endl;

	cout << "Elements of unordered_set:" << endl;
	for (auto it1 : s1)
		cout << it1 << " ";
	cout << endl;
	inorderPredecessor(5);
	inorderPredecessor(1);
	inorderPredecessor(8);
	inorderSuccessor(5);
	inorderSuccessor(2);
	inorderSuccessor(9);

	return 0;
}
                        `,
                        output: `
                        Elements of set in sorted order:
1 2 3 5 6 
Elements of unordered_set:
2 3 6 5 1 
predecessor of 5 is=3
No predecessor
Key doesn't exist
successor of 5 is=6
successor of 2 is=3
Key doesn't exist
                        `,
                      },
                    },
                  }}
                />
              </>
            ),
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
              <b>Tabular Data Structure (Hash Tables)</b>
            </Span>
            <Span>
              It stores data in an associative manner. It can be linear as well
              as non linear. Access of data becomes really easy if its unique
              index is known.
            </Span>
            <Span>
              <b>Hashing</b>
            </Span>
            <Span>
              It's a technique to convert a range of keys into range of indexes
              of an array.
            </Span>
            <Span>array index h(x) = key % constant</Span>
            <Span>
              <b>Collision Resolution:</b>
            </Span>
            <Span>
              It may happen that hashing technique results into a index which
              already exists.This is known as collision. We make use of
              collision resolution to assign indexes to keys in such kind of
              scenarios.
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>Open Hashing (Separate Chaining) </b>
            </Span>
            <Span>
              We make each cell of point table point to a linked list of
              records.
            </Span>
            <Span>
              <b>Closed Hashing ( Open Addressing )</b>
            </Span>
            <Span>
              In Open Addressing, all elements are stored in the hash table
              itself. So at any point, the size of the table must be greater
              than or equal to the total number of keys
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>Linear Probing</b>
            </Span>
            <Span>
              In this type, we simply make use of next slot in case of
              collision.
            </Span>
            <Span>h(x) = (h(x) + i)% constant , i= 0,1,2,3</Span>
            <Span>
              Primary clustering and secondary clustering are two challenges for
              linear probing.
              <br /> In primary clusetring, many consecutive elements form
              groups and it starts taking time to find a free slot or to search
              for an element.
              <br />
              Two records only have the same collision chain (Probe Sequence) if
              their initial position is the same. It's less severe.
            </Span>
            <Span>
              <b>Quadratic Probing</b>
            </Span>
            <Span>We look for i*ith slot in ith iteration.</Span>
            <Span>h(x) = (h(x) + i*2) % constant ,and i= 0,1,2,3</Span>
            <Span>
              <b>Double hashing</b>
            </Span>
            <Span>
              We use another hash function g(x) and look for i*g(x) slot in ith
              rotation.{" "}
            </Span>
            <Span>h(x) = (h(x) + i*g(x))% constant</Span>
            <Span>
              <b>Hash functions:</b>
            </Span>
            <Span>
              Mod ( h(x) = x % size + 1 ) , Mid Square ( h(x) = |x*x| ) and
              Folding ( add all elements and ignore carry's )
            </Span>
          </>
        ),
      },
    },
  },
  algo: {
    title: "Algorithms",
    content: (
      <>
        <Span>
          It's a step by step procedure to solve computational problem.
        </Span>
        <Span>
          <b>Algorithm:</b>
        </Span>
        <Span>
          1. It's written at design time.
          <br />
          2. Author should have domain knowledge.
          <br />
          3. It can written in any language.
          <br />
          4. It should be machine independent.
          <br />
          5. It can be analyzed for space/time complexity.
          <br />
          6. Priori analysis is associated with algorithm.
        </Span>
        <Span>
          <b>Program:</b>
        </Span>
        <Span>
          1. It's written at implementation time.
          <br />
          2. Should be written by programmer.
          <br />
          3. It can written in a programming language.
          <br />
          4. It should be machine dependent ( hardware and operating system ).
          <br />
          5. It can be tested (watch time and bytes).
          <br />
          6. Posteriori analysis is associated with program.
        </Span>
        <Span>
          <b>Charactersitic's of algorithm:</b>
        </Span>
        <p>
          <p>1. Input: 0 or more</p>
          <p>2. Output: atleast 1</p>
          <p>3. Definiteness: every stmt. should be clear</p>
          <p>4. Finiteness: algorithm should have finite steps</p>
          <p>5. Effectiveness: every step must be used</p>
        </p>
        <br />
        <Span>
          <b>Algorithms can be analysed using following parameters:</b>
        </Span>
        <Span>
          1. Time <br /> 2. Space <br /> 3. N/W Consumption <br /> 4. Power
          Consumption <br /> 5. CPU Registers Consumption
        </Span>
      </>
    ),
    types: {
      sort: {
        title: "Sorting",
        types: [
          {
            title: "Comparison Based",
            content: (
              <>
                <Span>Let n be number of elements.</Span>
                <Span>
                  <b>Bubble Sort</b>
                </Span>
                <Span>
                  We can visualize this sort with the help of act of throwing
                  stones into the sea. More heavier stone will settle at tha
                  bottom compared to lighter ones. It's adaptive as well as
                  stable. We can't perform this sort at linked list due to time
                  consumption. Each of k passes, provides us the kth largest
                  element.
                </Span>
                <p>
                  Best TC: O(n) ( already sorted ) <br />
                  Average TC: O(n^2) <br />
                  Worst TC: O(n^2) <br />
                  Worst Space Complexity: O(1) <br />
                  Number of passes: n-1 <br />
                  Number of comparisons : n(n-1)/2 <br />
                  Max. Number of swaps: n(n-1)/2
                </p>
                <CodeEditor
                  options={{
                    title: "Bubble Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function bubbleSort(arr, n)
{
	  let i, j, temp;
		let flag;
		for (i = 0; i < n - 1; i++)
		{
			flag = false;
			for (j = 0; j < n - i - 1; j++)
			{
				if (arr[j] > arr[j + 1])
				{
					temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					flag = true;
				}
			}
      // optimized way to brak outer loop in b/w
      // if provided i/p is already sorted.
			if (flag == false)
				break;
		}
}

var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log(arr)
                        `,
                        output: `
                        [
                          11, 12, 22, 25,
                          34, 64, 90
                        ]
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Insertion Sort</b>
                </Span>
                <Span>
                  It works similar to the way we sort playing cards after each
                  iteration. We split original array virtually into two parts:
                  sorted and unsorted. Values from the unsorted part are picked
                  and placed at the correct position in the sorted part. It's
                  adaptive (by nature) and stable. And can be used to sort the
                  linked list.
                </Span>
                <Span>
                  We can use binary search to reduce the number of comparisons
                  in normal insertion sort. Binary Insertion Sort uses binary
                  search to find the proper location to insert the selected item
                  at each iteration. In normal insertion, sorting takes O(i) (at
                  ith iteration) in worst case. We can reduce it to O(logi) by
                  using binary search. It makes use of incremental approach.
                </Span>
                <Span>
                  Insertion sort is used when number of elements is small. It
                  can also be useful when input array is almost sorted, only few
                  elements are misplaced in complete big array.
                </Span>
                <Span>
                  For very small n, Insertion Sort is faster than more efficient
                  algorithms such as Quicksort or Merge Sort.
                </Span>
                <p>
                  Best TC: O(n) ( already sorted ) <br />
                  Average TC: O(n^2) <br />
                  Worst TC: O(n^2) <br />
                  Worst Space Complexity: O(1) <br />
                  Number of passes: n-1 <br />
                  Number of comparisons : n(n-1)/2 <br />
                  Max. Number of swaps: n(n-1)/2 O(n*n)
                </p>
                <CodeEditor
                  options={{
                    title: "Insertion Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

let arr = [12, 11, 13, 5, 6 ]; 
let n = arr.length; 
insertionSort(arr, n); 
console.log(arr)
                        `,
                        output: `
                        [ 5, 6, 11, 12, 13 ]
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Selection Sort</b>
                </Span>
                <Span>
                  This is used to place smallest element at the start after each
                  iteration. It's neither adaptive nor stable.Each of k passes,
                  provides us the kth smallest element. It can be made stable.
                  It's used when no. of swaps are limited.
                </Span>
                <Span>
                  Selection sort performs a smaller number of swaps compared to
                  bubble sort; therefore, even though both sorting methods are
                  of O(N2), selection sort performs faster and more efficiently!
                </Span>
                <p>
                  Best TC: O(n^2)
                  <br />
                  Average TC: O(n^2) <br />
                  Worst TC: O(n^2) <br />
                  Worst Space Complexity: O(1) <br />
                  Number of swap: n-1 ( minimum among all kinds of sorts ){" "}
                  <br />
                  No. of comparisons: n(n-1)/2, O(n*n)
                </p>
                <CodeEditor
                  options={{
                    title: "Selection Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function selectionSort(arr, n)
{
	let i, j, min, temp;
	for (i = 0; i < n-1; i++)
	{
    min = i;
    for(j = i+1; j<n; j++)
    if(arr[j]<arr[min]){
      min = j;
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
	}
}

let arr = [12, 11, 13, 5, 6 ]; 
let n = arr.length; 
selectionSort(arr, n); 
console.log(arr)
                        `,
                        output: `
                        [ 5, 6, 11, 12, 13 ]
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Heap Sort</b>
                </Span>
                <Span>
                  It is based on binary heap. It's similar to selection sort
                  where place the minimum element at start after each iteration.
                </Span>
                <Span>
                  The time required to perform Heap sort increases
                  logarithmically while other algorithms may grow exponentially
                  slower as the number of items to sort increases. This sorting
                  algorithm is very efficient. Memory usage is minimal because
                  apart from what is necessary to hold the initial list of items
                  to be sorted, it needs no additional memory space to work
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  Average TC: O(nlogn) <br />
                  Worst TC: O(nlogn) <br />
                  Space Complexity: O(n)
                </Span>
                <Span>
                  <b>Array representation for binary heap:</b>
                </Span>
                <Span>
                  Since , binary heap is a complete binary tree , if the parent
                  node is stored at index i, then left child can be calculated
                  using 2*i + 1 and right can be defined using 2*i +2
                </Span>
                <Span>
                  <b>Heapify</b>
                </Span>
                <p>
                  The process of reshaping a binary tree into a Heap data
                  structure is known as "heapify".{" "}
                </p>
                <CodeEditor
                  options={{
                    title: "Heap Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function sort(arr)
                        {
                          var n = arr.length;
                      
                          for (var i = Math.floor(n / 2) - 1; i >= 0; i--) // O(n)
                            heapify(arr, n, i); // O(log n)
                            // O(nlogn)
                      
                          for (var i = n - 1; i > 0; i--) {
                            var temp = arr[0];
                            arr[0] = arr[i];
                            arr[i] = temp;
                            heapify(arr, i, 0);
                          }
                        }
                      
                          function heapify(arr, n, i)
                          {
                              var largest = i; 
                              var l = 2 * i + 1; 
                              var r = 2 * i + 2; 
                      
                              if (l < n && arr[l] > arr[largest])
                                  largest = l;
                      
                               if (r < n && arr[r] > arr[largest])
                                  largest = r;
                      
                              if (largest != i) {
                                  var swap = arr[i];
                                  arr[i] = arr[largest];
                                  arr[largest] = swap;
                                  heapify(arr, n, largest);
                              }
                          }
                      
                      const arr = [9,2,7,1,0]
                      sort(arr)
                      console.log(arr)                      
                        `,
                        output: `[ 0, 1, 2, 7, 9 ]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Merge Sort</b>
                </Span>
                <Span>
                  It is a divide and conquer algorithm. It divides the array
                  into two parts, calls itself for each half and merges two
                  halves.It's stable.
                </Span>
                <Span>
                  Unlike arrays, linked list nodes may not be adjacent in
                  memory. Unlike array, in linked list, we can insert items in
                  the middle in O(1) extra space and O(1) time. Therefore merge
                  operation of merge sort can be implemented without extra space
                  for linked lists.
                </Span>
                <Span>
                  Merge Sort is a recursive algorithm and time complexity can be
                  expressed as following recurrence relation.
                  <br /> T(n) = 2T(n/2) + θ(n)
                </Span>
                <Span>
                  It's used for sorting linked list in nlog(n) time.And it's
                  used in external sorting. It's slower than other algorithms
                  for smaller tasks. Merge sort algorithm requires an additional
                  memory space of 0(n) for the temporary array. It goes through
                  the whole process even if the array is sorted.
                </Span>
                <Span>
                  <b>External sorting</b>
                </Span>
                <Span>
                  External sorting is a class of sorting algorithms that can
                  handle massive amounts of data. External sorting is required
                  when the data being sorted do not fit into the main memory of
                  a computing device (usually RAM) and instead they must reside
                  in the slower external memory, usually a hard disk drive.
                  Thus, external sorting algorithms are external memory
                  algorithms and thus applicable in the external memory model of
                  computation. External sorting algorithms generally fall into
                  two types, distribution sorting, which resembles quicksort,
                  and external merge sort, which resembles merge sort.
                </Span>
                <Span>
                  merge sort always divides the array into two halves and takes
                  linear time to merge two halves.
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  Average TC: O(nlogn) <br />
                  Worst TC: O(nlogn) <br />
                  Space Complexity: O(n) //depends
                </Span>
                <Span>
                  <b>Merge vs heap sort:</b>
                </Span>
                <p>
                  HeapSort is the slowest of the sorting algorithms but unlike
                  merge and quick sort it does not require massive recursion or
                  multiple arrays to work. The merge sort is slightly faster
                  than the heap sort for larger sets, but it requires twice the
                  memory of the heap sort because of the second array.
                </p>
                <CodeEditor
                  options={{
                    title: "Merge Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = Array(n1); 
    var R = Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
var arr_size = arr.length;
mergeSort(arr, 0, arr_size - 1);
console.log(arr, arr_size);
                        `,
                        output: `
                        [ 5, 6, 7, 11, 12, 13 ] 6
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Quick Sort (Partition/Selection exchange sort)</b>
                </Span>
                <Span>
                  It's also a divide and conquer algorithm. It's a internal
                  sorting algorithm. It picks an element as pivot and partitions
                  the given array around the picked pivot. There are many
                  different versions of quickSort that pick pivot in different
                  ways.
                </Span>
                <Span>
                  The key process in quickSort is partition(). Target of
                  partitions is, given an array and an element x of array as
                  pivot, put x at its correct position in sorted array and put
                  all smaller elements (smaller than x) before x, and put all
                  greater elements (greater than x) after x. All this should be
                  done in linear time
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  Average TC: O(nlogn) <br />
                  Worst TC: O(n*n) <br />
                  Space Complexity: O(n)
                </Span>
                <Span>
                  Quick Sort is preferred over MergeSort for sorting Arrays. For
                  arrays, merge sort loses due to the use of extra O(N) storage
                  space. Quick Sort is also a cache friendly sorting algorithm
                  as it has good locality of reference when used for arrays.
                  Quick Sort is also tail recursive, therefore tail call
                  optimizations is done.
                </Span>
                <Span>
                  The time complexity of Quicksort is O(n log n) in the best
                  case, O(n log n) in the average case, and O(n^2) in the worst
                  case. But because it has the best performance in the average
                  case for most inputs, Quicksort is generally considered the
                  “fastest” sorting algorithm.
                </Span>
                <p>
                  Quick sort is not stable and merge sort is preferred over
                  quick sort for linked lists.
                </p>
                <CodeEditor
                  options={{
                    title: "Quick Sort",
                    output: null,
                    codes: {
                      Python: {
                        code: `def partition(start, end, array):
	
    pivot_index = start
    pivot = array[pivot_index]
    while start < end:
      while start < len(array) and array[start] <= pivot:
        start += 1
      while array[end] > pivot:
        end -= 1
      if(start < end):
        array[start], array[end] = array[end], array[start]
    array[end], array[pivot_index] = array[pivot_index], array[end]
    return end
    
def quick_sort(start, end, array):
    
    if (start < end):
      p = partition(start, end, array)
      quick_sort(start, p - 1, array)
      quick_sort(p + 1, end, array)
      
array = [ 10, 7, 8, 9, 1, 5 ]
quick_sort(0, len(array) - 1, array)  
print(f'Sorted array: {array}')
                        `,
                        output: `Sorted array: [1, 5, 7, 8, 9, 10]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Shell Sort</b>
                </Span>
                <Span>
                  ShellSort is mainly a variation of Insertion Sort. In
                  insertion sort, we move elements only one position ahead. When
                  an element has to be moved far ahead, many movements are
                  involved.
                </Span>
                <Span>
                  Best TC: O(nlogn) // already sorted
                  <br />
                  For other cases it depends on gap sequence. Generally, Average
                  TC: O(nlogn) <br />
                  Worst TC: O(nlog^2n) <br />
                  Space Complexity: O(1)
                </Span>
                <Span>
                  Shell Sort improves its time complexity by taking the
                  advantage of the fact that using Insertion Sort on a partially
                  sorted array results in less number of moves.
                </Span>
                <p>
                  Time complexity of below implementation of shellsort is
                  O(n^2).
                </p>
                <CodeEditor
                  options={{
                    title: "Shell Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function sort(arr)
{
	let n = arr.length;

		for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
		{
			for (let i = gap; i < n; i += 1)
			{
				let temp = arr[i];
				let j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
					arr[j] = arr[j - gap];
				arr[j] = temp;
			}
		}
		return arr;
}

let arr = [12, 34, 54, 2, 3];
arr = sort(arr);
console.log(arr);

                        `,
                        output: `[ 2, 3, 12, 34, 54 ]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Tree Sort</b>
                </Span>
                <Span>
                  Tree sort is a sorting algorithm that is based on Binary
                  Search Tree data structure. It first creates a binary search
                  tree from the elements of the input list or array and then
                  performs an in-order traversal on the created binary search
                  tree to get the elements in sorted order.
                </Span>
                <Span>
                  For implementation please refer to non linear data structures.
                </Span>
                <Span>
                  O(n log n) Adding one item to a Binary Search tree on average
                  takes O(log n) time. Therefore, adding n items will take O(n
                  log n) time.The worst case time complexity of Tree Sort can be
                  improved by using a self-balancing binary search tree like Red
                  Black Tree, AVL Tree. Using self-balancing binary tree Tree
                  Sort will take O(n log n) time to sort the array in worst
                  case.
                </Span>
                <Span>
                  tree sort algorithms require separate memory to be allocated
                  for the tree, as opposed to in-place algorithms such as
                  quicksort or heapsort. On most common platforms, this means
                  that heap memory has to be used, which is a significant
                  performance hit when compared to quicksort and heapsort. When
                  using a splay tree as the binary search tree, the resulting
                  algorithm (called splaysort) has the additional property that
                  it is an adaptive sort, meaning that its running time is
                  faster than O(n log n) for inputs that are nearly sorted.
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  TC: O(nlogn) <br />
                  Worst TC: O(n^2) <br />
                  Space Complexity: O(n)
                </Span>
              </>
            ),
          },
          {
            title: "Index ( Non Comparison ) Based",
            content: (
              <>
                <Span>
                  <b>Count Sort</b>
                </Span>
                <Span>
                  Counting sort is a sorting technique based on keys between a
                  specific range. It works by counting the number of objects
                  having distinct key values (kind of hashing). Then doing some
                  arithmetic to calculate the position of each object in the
                  output sequence.
                </Span>
                <p>
                  Best TC: O(n+k) k is size of count array
                  <br />
                  TC: O(n+k) <br />
                  Worst TC: O(n+k) <br />
                  Space Complexity: O(n+k)
                </p>
                <CodeEditor
                  options={{
                    title: "Count Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function sort(arr)
{
	var n = arr.length;

	var output = Array(n).fill(0)

	var count = Array.from({length: 256}, (_, i) => 0);

	for (var i = 0; i < n; ++i)
		++count[arr[i].charCodeAt(0)];

	for (var i = 1; i <= 255; ++i)
		count[i] += count[i - 1];

	for (var i = n - 1; i >= 0; i--) {
		output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
		--count[arr[i].charCodeAt(0)];
	}
	for (var i = 0; i < n; ++i)
		arr[i] = output[i];
	return arr;
}

	var arr = ['s','a','i','a','s','h','i','s','h'];

	arr = sort(arr);
	for (var i = 0; i < arr.length; ++i)
		console.log(arr[i]);

                        `,
                        output: `
                        a
a
h
h
i
i
s
s
s
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Bin / Bucket Sort</b>
                </Span>
                <Span>
                  Bucket sort is mainly useful when input is uniformly
                  distributed over a range. Counting sort can by used here
                  because of floating numbers
                </Span>
                <p>
                  Best TC: O(n+k) k is number of buckets
                  <br />
                  TC: O(n+k) <br />
                  Worst TC: O(n^2) <br />
                  Space Complexity: O(n+k)
                </p>
                <CodeEditor
                  options={{
                    title: "Bin / Bucket Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `function bucketSort(arr,n)
                        {
                          if (n <= 0)
                              return;
                            let buckets = new Array(n);
                        
                            for (let i = 0; i < n; i++)
                            {
                              buckets[i] = [];
                            }
                            for (let i = 0; i < n; i++) {
                              let idx = arr[i] * n;
                              buckets[Math.floor(idx)].push(arr[i]);
                            }
                            for (let i = 0; i < n; i++) {
                              buckets[i].sort(function(a,b){return a-b;});
                            }
                            let index = 0;
                            for (let i = 0; i < n; i++) {
                              for (let j = 0; j < buckets[i].length; j++) {
                                arr[index++] = buckets[i][j];
                              }
                            }
                        }
                        
                        let arr = [0.897, 0.565,
                            0.656, 0.1234,
                            0.665, 0.3434];
                        let n = arr.length;
                        bucketSort(arr, n);
                        
                        for (let el of arr.values()) {
                          console.log(el + " ");
                        }
                        `,
                        output: `
                        .1234 
0.3434 
0.565 
0.656 
0.665 
0.897 
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Radix Sort</b>
                </Span>
                <Span>
                  We can't use counting sort when elements are range of 1 to n*n
                  because counting sort will take O(n^2) which is worse than
                  comparison-based sorting algorithms.
                </Span>
                <Span>
                  After every iteration, we make of corresponding number at
                  digit's place using % operator.
                </Span>
                <Span>
                  Radix Sort takes O(d*(n+b)) time where b is the base for
                  representing numbers, for example, for the decimal system, b
                  is 10. What is the value of d? If k is the maximum possible
                  value, then d would be O(logb(k)). So overall time complexity
                  is O((n+b) * logb(k))
                </Span>
                <p>
                  Best TC: O(d*(n+b))
                  <br />
                  TC: O(d*(n+b)) <br />
                  Worst TC: O(d*(n+b)) <br />
                  Space Complexity: O(n+2^d).
                </p>
                <CodeEditor
                  options={{
                    title: "Radix Sort",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `function getMax(arr,n)
                        {
                          let mx = arr[0];
                            for (let i = 1; i < n; i++)
                              if (arr[i] > mx)
                                mx = arr[i];
                            return mx;
                        }
                        
                        // can be solved using linked list as well
                        
                        function countSort(arr,n,exp)
                        {
                          let output = new Array(n); 
                            let i;
                            let count = new Array(10);
                            for(let i=0;i<10;i++)
                              count[i]=0;
                        
                            for (i = 0; i < n; i++)
                              count[Math.floor(arr[i] / exp) % 10]++;
                        
                            for (i = 1; i < 10; i++)
                              count[i] += count[i - 1];
                        
                            for (i = n - 1; i >= 0; i--) {
                              output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
                              count[Math.floor(arr[i] / exp) % 10]--;
                            }
                        
                            for (i = 0; i < n; i++)
                              arr[i] = output[i];
                        }
                        
                        function radixsort(arr,n)
                        {
                            let m = getMax(arr, n);
                            for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
                              countSort(arr, n, exp);
                        }
                        
                        
                        let arr=[170, 45, 75, 90, 802, 24, 2, 66];
                        let n = arr.length;
                        radixsort(arr, n);
                        console.log(arr)
                        `,
                        output: `
                        [
                          2, 24,  45,  66,
                         75, 90, 170, 802
                       ]
                        `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
        ],
        content: (
          <>
            <Span>
              This algorithm is basically used to reorder elements in the
              respective data structure based on a comparison operator.
            </Span>
            <Span>
              <b>Criteria of analysis:</b>
            </Span>
            <p>
              1. No. of comparisons <br />
              2. No. of swaps <br />
              3. Adaptive ( we can detect already sorted lists using this
              feature ) <br />
              4. Stable ( order of duplicate elements should be maintained ){" "}
              <br />
              5. Extra Memory <br />
              <br />
            </p>
            <Span>Types of sorting:</Span>
            <Span>(a) Comparison based:</Span>
            <Span>
              Elements are compared with each other to get sorted array.
            </Span>
            <Span>Examples:</Span>
            <Span>
              Avg. Complexity (O(n*n)) : Bubble, Insertion and Selection. <br />
              Avg. Complexity (O(n*(log n))) : Heap, Merge, Quick, and Tree{" "}
              <br />
              Avg. Complexity (O(n^1.5)) : Shell{" "}
            </Span>
            <Span>(b) Index based:</Span>
            <Span>
              This method makes use of hashing and sort elements by creating
              index recursively.
            </Span>
            <Span>Examples:</Span>
            <p>Avg. Complexity (O(n)): Count, Bucket( Bin ) and Radix</p>
          </>
        ),
      },
      search: {
        title: "Searching",
        content: (
          <>
            <Span>
              It's used to check for an element or retrieve an element from any
              data structure where it is stored.
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>1. Sequential Search:</b>
            </Span>
            <Span>
              In this type, data structure is traversed sequentially and every
              element is checked.
            </Span>
            <Span>
              <b>Example:</b>
            </Span>
            <Span>
              <b>Linear search:</b>
            </Span>
            <Span>
              It's a basic algorithm to find a element in the data structure.
            </Span>
            <Span>
              <b>Best case TC: </b> O(1) <br />
              <b>Worst case TC: </b> O(n) <br />
              <b>Space Complexity: </b> O(1)
            </Span>
            <p>
              <b>Implemtation (basic + optimized):</b>
            </p>
            <CodeEditor
              options={{
                title: "Linear Search",
                output: null,
                codes: {
                  Javascript: {
                    code: `function basicSearch(arr,ele){
                      let flag = false;
                      for(let index in arr){
                        if(arr[index] === ele)
                        {
                          flag = true
                          return Number(index) + 1 +"th"
                        }
                      }
                      if(!flag) return "Not found"
                    }
                    
                    function optimizedSearch(arr, ele)
                    {
                      let left = 0;
                      let length = arr.length;
                      let right = length - 1;
                      let position = -1;
                      for(left = 0; left <= right;)
                      {
                        if (arr[left] == ele)
                        {
                          position = left;
                          console.log(
                            "Element found in array at " +
                            (position+1) + "th position with " +
                              (left + 1) + " attempt");
                          break;
                        }
                    
                        if (arr[right] == ele)
                        {
                          position = right;
                          console.log(
                            "Element found in array at " +
                            (position + 1) + "th position with " +
                            (length - right) + " attempt");
                          break;
                        }
                        left++;
                        right--;
                      }
                    
                      if (position == -1)
                        console.log("Not found in Array with " +
                              left + " Attempt");
                    }
                      
                    let arr = [ 1, 2, 3, 4, 5 ];
                    let search_element = 5;
                    console.log(basicSearch(arr, search_element))
                    optimizedSearch(arr, search_element);
                    `,
                    output: `
                    5th
Element found in array at 5th position with 1 attempt
                    `,
                  },
                },
              }}
            />
            <Span>
              <b>2. Interval Search:</b>
            </Span>
            <Span>
              These algorithms are specifically designed for sorted data
              structures. These types of algorithms are much more efficient than
              linear search as they repeatedly target the center of the search
              structure and divide the search space in half.
            </Span>
            <Span>
              <b>Binary search:</b>
            </Span>
            <Span>
              The original Binary search algorithm can not be applied to linked
              list because linked list by nature is dynamic and it is not known
              where the middle element is actually allocated. So, some of the
              efforts are required to apply binary search over a linked list to
              obtain the advantages. The main problem that binary search takes
              O(n) time in Linked List due to fact that in linked list we are
              not able to do indexing which led traversing of each element in
              Linked list take O(n) time.
            </Span>
            <Span>Complexities</Span>
            <Span>
              Best TC: O(1) // central index would directly match the desired
              value. <br />
              Avg. TC: O(log n) <br />
              Worst TC: O(log n) <br />
              Space Complexity (Iteration): O(1) <br />
              Space Complexity (Recursion): O(log n)
            </Span>
            <Span>
              Here we are using int mid = low + (high - low)/2; instead of int
              mid = (low + high)/2;
            </Span>
            <Span>
              If we calculate the middle index using (low + high)/2 means our
              code is not 100% correct, it contains bugs. That is, it fails for
              larger values of int variables low and high. Specifically, it
              fails if the sum of low and high is greater than the maximum
              positive int value(2^31 - 1 ). The sum overflows to a negative
              value and the value stays negative when divided by 2. In java, it
              throws ArrayIndexOutOfBoundException. int mid = low + (high -
              low)/2; So it's better to use it like this. This bug applies
              equally to merge sort and other divide and conquer algorithms.
            </Span>
            <p>Implementation</p>
            <CodeEditor
              options={{
                title: "Binary Search",
                output: null,
                codes: {
                  Javascript: {
                    code: `function recBinarySearch(arr, l, r, x){
                      if (r >= l) {
                          let mid = l + Math.floor((r - l) / 2);
                          if (arr[mid] == x)
                              return mid;
                          if (arr[mid] > x)
                              return binarySearch(arr, l, mid - 1, x);
                          return binarySearch(arr, mid + 1, r, x);
                      }
                      return -1;
                  }
                  
                  // every number can be represented as the sum of powers of 2.
                  // Hence it can solved using bitwise approach
                  
                  function binarySearch(arr, x)
                  {
                    let l = 0;
                    let r = arr.length - 1;
                    let mid;
                    while (r >= l) {
                      mid = l + Math.floor((r - l) / 2);
                      if (arr[mid] == x)
                        return mid;
                      if (arr[mid] > x)
                        r = mid - 1;
                      else
                        l = mid + 1;
                    }
                    return -1;
                  }
                  
                  const	arr =new Array(2, 3, 4, 10, 40);
                  const	x = 10;
                  const	n = arr.length;
                  const	result = binarySearch(arr, x);
                  console.log(result)
                  `,
                    output: `3`,
                  },
                },
              }}
            />
            <Span>
              <b>Two pointers technique:</b>
            </Span>
            <Span>
              Two pointers is really an easy and effective technique that is
              typically used for searching pairs in a sorted array.
            </Span>

            <Span>
              <b>Time complexity: </b> O(n)
            </Span>
            <p>
              Pairs can also be searched in a sorted array in O(n) with the help
              of map ( / dictionary / object )
            </p>
            <CodeEditor
              options={{
                title: "Two pointers technique",
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function isPairSum(A, N, X)
{
	var i = 0;
	var j = N - 1;

	while (i < j) {

		if (A[i] + A[j] == X)
    {
      console.log({
        i,
        j,
        l: A[i],r:A[j] , X
      })
			return true;
    }
		else if (A[i] + A[j] < X)
			i++;
		else
			j--;
	}
	return false;
}

var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
var val = 17;
var arrSize =7;

console.log(isPairSum(arr, arrSize, val));
                    `,
                    output: `{ i: 2, j: 4, l: 9, r: 8, X: 17 }
                    true`,
                  },
                },
              }}
            />
            <Span>
              <b>BFS and DFS</b>
            </Span>
            <Span>
              For their implementations at trees and graphs , please refer to
              non-linear data structures.
            </Span>
            <Span>
              <b>Practice Questions:</b>
            </Span>
            <Span>
              https://medium.com/techie-delight/top-20-breadth-first-search-bfs-practice-problems-ac2812283ab1
            </Span>
          </>
        ),
      },
      Complexity: {
        title: "Algorithmic Analysis",
        content: (
          <>
            <Img src={BigOChart} />
            <Span>
              O(1) === constant <br />
              O(log n) === usually searching algorithms <br />
              O(n) === linear , single loop <br />
              O(n^2) === nested loops <br />
              O(2^n) === exponential === recursion <br />
              O(n!) === loop for every element.
            </Span>
            <Span>
              <b>Analysis of algorithms:</b>
            </Span>
            <Span>
              Similar to other factors such as user friendliness, modularity,
              security, maintainability, performance of algorithms is also
              important.The answer to this is simple, we can have all the above
              things only if we have performance. So performance is like
              currency through which we can buy all the above things. Another
              reason for studying performance is – speed is fun! To summarize,
              performance == scale. Imagine a text editor that can load 1000
              pages, but can spell check 1 page per minute OR an image editor
              that takes 1 hour to rotate your image 90 degrees left OR … you
              get it. If a software feature can not cope with the scale of tasks
              users need to perform – it is as good as dead.
            </Span>
            <Span>
              <b>Asymptotic Analysis:</b>
            </Span>
            <Span>
              In Asymptotic Analysis, we evaluate the performance of an
              algorithm in terms of input size (we don’t measure the actual
              running time). We calculate, how the time (or space) taken by an
              algorithm increases with the input size.
            </Span>
            <Span>
              Linear Search on a fast computer A and Binary Search on a slow
              computer B and we pick the constant values for the two computers
              so that it tells us exactly how long it takes for the given
              machine to perform the search in seconds. Let’s say the constant
              for A is 0.2 and the constant for B is 1000 which means that A is
              5000 times more powerful than B. For small values of input array
              size n, the fast computer may take less time. But, after a certain
              value of input array size, the Binary Search will definitely start
              taking less time compared to the Linear Search even though the
              Binary Search is being run on a slow machine. The reason is the
              order of growth of Binary Search with respect to input size is
              logarithmic while the order of growth of Linear Search is linear.
              So the machine dependent constants can always be ignored after a
              certain value of input size. Here are some running times for this
              example: Linear Search running time in seconds on A: 0.2 * n
              Binary Search running time in seconds on B: 1000*log(n)
            </Span>
            <Span>
              <b>Complexity</b>
            </Span>
            <Span>
              The complexity of an algorithm is a function describing the
              efficiency of the algorithm in terms of the amount of data the
              algorithm must process.
            </Span>
            <Span>
              <b>Time Complexity</b>
            </Span>
            <Span>
              Time Complexity of algorithm/code is not equal to the actual time
              required to execute a particular code but the number of times a
              statement executes. We can prove this by using time command.
            </Span>
            <Span>
              O(n^2): You go and ask the first person of the class, if he has
              the pen. Also, you ask this person about other 99 people in the
              classroom if they have that pen and so on, This is what we call
              O(n^2). O(n): Going and asking each student individually is O(N).
              O(log n): Now I divide the class into two groups, then ask: “Is it
              on the left side, or the right side of the classroom?” Then I take
              that group and divide it into two and ask again, and so on. Repeat
              the process till you are left with one student who has your pen.
              This is what you mean by O(log n).
            </Span>
            <Span>
              <b>Space Complexity</b>
            </Span>
            <Span>
              Space Complexity of an algorithm is the total space taken by the
              algorithm with respect to the input size. Space complexity
              includes both Auxiliary space and space used by input. If we want
              to compare standard sorting algorithms on the basis of space, then
              Auxiliary Space would be a better criterion than Space Complexity.
              Merge Sort uses O(n) auxiliary space, Insertion sort, and Heap
              Sort use O(1) auxiliary space. The space complexity of all these
              sorting algorithms is O(n) though.
            </Span>
            <Span>
              <b>Worst Case vs Average Case vs Best Case</b>
            </Span>
            <Span>
              <b>Worst Case ( Upper bound ) Analysis</b>
            </Span>
            <Span>
              This case computes maximum number of operations to be executed.
            </Span>
            <Span>
              <b>Average Case Analysis</b>
            </Span>
            <Span>
              In average case analysis, we take all possible inputs and
              calculate computing time for all of the inputs. Sum all the
              calculated values and divide the sum by the total number of
              inputs. We sum all the cases and divide the sum by (n+1)
            </Span>
            <Span>
              <b>Best Case ( Lower bound ) Analysis</b>
            </Span>
            <Span>
              This case computes minimum number of operations to be executed.
            </Span>
            <Span>
              <b>Space Time Trade Off</b>
            </Span>
            <Span>
              A tradeoff is a situation where one thing increases and another
              thing decreases. More time-efficient algorithms will be less space
              efficient and vice versa.
            </Span>
            <Span>
              <b>Asynmptotic Notations</b>
            </Span>
            <Span>
              These are the mathematical tools used to compute efficiency of the
              algorithm which doesn't require algorithms to be implemented.
            </Span>
            <Span>
              n refers to the size of the input, in your case it's the number of
              items in your list. O(n) means that your algorithm will take on
              the order of n operations to insert an item
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>1. Theta notation:</Span>
            <Span>
              The theta notation bounds a function from above and below, so it
              defines exact asymptotic behavior. A simple way to get the Theta
              notation of an expression is to drop low-order terms and ignore
              leading constants. For example, consider the following expression.
              3n3 + 6n2 + 6000 = Θ(n3) Dropping lower order terms is always fine
              because there will always be a number(n) after which Θ(n3) has
              higher values than Θ(n2) irrespective of the constants involved.
              For a given function g(n), we denote Θ(g(n)) is following set of
              functions. Θ(g(n)) = [f(n): there exist positive constants c1, c2
              and n0 such that 0 less than or equal to c1*g(n) less than or
              equal to f(n) less than or equal to c2*g(n) for all n greater than
              or equal to n0]
            </Span>
            <Span>2. Big O notation:</Span>
            <Span>
              The Big O notation defines an upper bound of an algorithm, it
              bounds a function only from above. The Big O notation is useful
              when we only have an upper bound on the time complexity of an
              algorithm. Many times we easily find an upper bound by simply
              looking at the algorithm.
            </Span>
            <Span>
              O(g(n)) = [ f(n): there exist positive constants c and n0 such
              that 0 less than or equal to f(n) less than or equal to c*g(n) for
              all n greater than or equal to n0]
            </Span>
            <Span>3. Omega notation:</Span>
            <Span>
              Just as Big O notation provides an asymptotic upper bound on a
              function, Ω notation provides an asymptotic lower bound.
            </Span>
            <Span>
              Ω (g(n)) = [f(n): there exist positive constants c and n0 such
              that 0 less than or equal to c*g(n) less than or equal to f(n) for
              all n greater than or equal to n0].
            </Span>
          </>
        ),
      },
      tradeOf: {
        title: "Master's Theorem",
        content: (
          <>
            <Span>
              In the analysis of algorithms, the master theorem for
              divide-and-conquer recurrences provides an asymptotic analysis
              (using Big O notation) for recurrence relations of types that
              occur in the analysis of many divide and conquer algorithms.
            </Span>

            <Span>
              for(i=0; i&gt;n; i++) <br />
              O(n) <br />
            </Span>
            <Span>
              for(i=0; i&gt;n; i+=2) <br />
              O(n/2) === O(n) <br />
            </Span>

            <Span>
              for(i=0; i&gt;n; i/=2) <br />
              O(log2 n) <br />
            </Span>
            <Span>
              for(i=0; i&gt;n; i*/2) <br />
              O(log2 n) <br />
            </Span>

            <Span>
              for(i=0; i&gt;n; i*=3) <br />
              O(log3 n) <br />
            </Span>

            <Span>
              <b>Decreasing functions</b>
            </Span>

            <Span>
              T(n) = aT(n-b) + f(n) , f(n) = O(n^k) , f(n) &lt;= c*g(n) ,
              k&gt;=0 , a&gt;0 , b&gt;0
            </Span>
            <Span>if a = 1,</Span>
            <Span>O(n^(k+1)) O(n*f(n))</Span>
            <Span>if a &gt; 1,</Span>
            <Span>O(a^(n/b) * n^k)</Span>
            <Span>if a &lt; 1,</Span>
            <Span>O(f(n))</Span>
            <Span>Examples:</Span>
            <Span>
              1. T(n) = T(n-1) + constant <br />
              O(n)
            </Span>
            <Span>
              2. T(n) = T(n-1) + n <br /> O(n^2)
            </Span>
            <Span>
              3. T(n) = T(n-1) + logn <br /> O(nlogn)
            </Span>
            <Span>
              <pre>
                void Test(int n){"{"} // T(n) <br />
                if(n&gt;gt) // 1 <br />
                for(int i=0;i&lt;n;i*=2) // log2 n <br />
                printf("%d",i); // 1 <br />
                Test(n-1); // T(n-1) <br />
                {"}"}
              </pre>
            </Span>
            <Span>
              4. T(n) = 2T(n-1) + 1 <br /> O(2^n)
            </Span>
            <Span>
              5. T(n) = 3T(n-1) + 1 <br /> O(3^n)
            </Span>
            <Span>
              6. T(n) = 2T(n-1) + n <br /> O(n2^n)
            </Span>

            <Span>
              <b>Dividing functions</b>
            </Span>

            <Span>
              T(n) = aT(n/b) + f(n) , f(n) = O(n^k * log^p n) , f(n) &lt;=
              c*g(n) , a&gt;=1 , b&gt;1
            </Span>
            <Span>
              Case 1: logb a &gt; k <br />
              O(n^logb a)
            </Span>

            <Span>Case 2: logb a = k</Span>
            <Span>a. p &gt; -1</Span>
            <Span>O(n^k * logp+1 n)</Span>
            <Span>b. p = -1</Span>
            <Span>O(n^k * log logn)</Span>
            <Span>a. p &lt; -1</Span>
            <Span>O(n^k)</Span>
            <Span>Case 3: if logb a &lt; k</Span>
            <Span>a. p &gt;= 0</Span>
            <Span>O(n^k * logp n)</Span>
            <Span>b. p &lt; 0</Span>
            <Span>O(n^k)</Span>

            <Span>There are following three cases:</Span>
            <Span>
              1. If f(n) = O(n^k) where k &lt; logb a then T(n) = Θ(n^logb a)
            </Span>
            <Span>
              2. If f(n) = Θ(n^k) where k = logb a then T(n) = Θ(n^k log n)
            </Span>
            <Span>
              3.If f(n) = Ω(n^k) where k &gt; logb a then T(n) = Θ(f(n))
            </Span>

            <Span>
              Binary search: T(n) = T(n/2) + Θ(1). log2 1 == 0 O(n^k * logn)
            </Span>
            <Span>T(n) = 2T(n/2) + Θ(n). log2 2 === 1, n^1 * log2 n</Span>
          </>
        ),
      },
      recursive: {
        title: "Recursion",
        content: (
          <>
            <Span>
              It is a process in which a fn ( recursive fn ) calls itself.
            </Span>
            <Span>
              Examples: TOH <br /> DFS Tree Traversals <br /> DFS of graph ,
            </Span>
            <Span>
              When the program executes,the main memory gets divided into three
              parts. One part for code section, the second one is heap memory
              and another one is stack memory.
            </Span>
            <Span>
              Heap memory is a Dynamic memory(its size changes as program run)
              used to store arrays, global variables(with global
              scope/accessible from any function) and any created class
              instances(objects) at runtime in Java which are referred by the
              reference variables from Stack memory.
            </Span>
            <Span>Types:</Span>
            <Span>
              <b>Direct Recursion:</b>
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>(a) Tail Recursion:</b>
            </Span>
            <Span>
              If recursive call is the last statement in the fn then it's called
              recursive fn.
            </Span>
            <Img src="https://media.geeksforgeeks.org/wp-content/uploads/20190621015455/tail1.jpg" />
            <p>
              It occurs when a function calls itself. This results in a one-step
              recursive call: the function makes a recursive call inside its own
              function body.
            </p>
            <CodeEditor
              options={{
                title: "Tail Recursion",
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function fun(n)
                    {
                      if (n > 0)
                      {
                        console.log(n + " ");
                        fun(n - 1);
                      }
                    }
                      var x = 3;
                      fun(x);

                // Time Complexity : O(n)
                // Space Complexity: O(n) // n activation records are
                // created in main menory

                // Using simple for loop, SC will be O(1)
                // as we're making use of only one activation record 

                // Driver code
                  var x = 3;
                    fun(x);
                    `,
                    output: `3 2 1`,
                  },
                },
              }}
            />
            <Span>
              <b>(b) Head Recursion:</b>
            </Span>
            <Img src="https://media.geeksforgeeks.org/wp-content/uploads/20190621015721/head3.jpg" />
            <p>
              If recursive call is the first statement in the fn then it's
              called recursive fn.
            </p>
            <CodeEditor
              options={{
                title: "Head Recursion",
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function fun(n)
                    {
                      if (n > 0)
                      {
                        fun(n - 1);
                        console.log(n + " ");
                      }
                    }
                    // Time Complexity : O(n)
                    // Space Complexity: O(n) 
                      var x = 3;
                      fun(x);
                    `,
                    output: `1 2 3`,
                  },
                },
              }}
            />
            <Span>
              Note: Time & Space Complexity is given for this specific example.
              It may vary for another example. Note: Head recursion can’t easily
              convert into loop as Tail Recursion but it can. Let’s convert the
              above code into the loop.
            </Span>
            <Span>
              <b>(c) Tree Recursion:</b>
            </Span>
            <Span>
              If a recursive function calling itself for one time then it’s
              known as Linear Recursion. Otherwise if a recursive function
              calling itself for more than one time then it’s known as Tree
              Recursion.
            </Span>
            <Img src="https://media.geeksforgeeks.org/wp-content/uploads/20190621015814/tree4.jpg" />
            <p>tracing tree of recursive function.</p>
            <CodeEditor
              options={{
                title: "Tree Recursion",
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function fun(n)
                    {
                        if (n > 0) {
                            console.log(" "+ n);
                    
                            fun(n - 1);
                     
                            // Calling twice
                            fun(n - 1);
                        }
                    }
                        fun(3);                     
                    `,
                    output: `3 2 1 1 2 1 1`,
                  },
                },
              }}
            />
            <Span>
              <b>(d) Nested Recursion (recursion inside recursion):</b>
            </Span>
            <p>
              a recursive function will pass the parameter as a recursive call
            </p>
            <CodeEditor
              options={{
                title: "Nested Recursion (recursion inside recursion)",
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function fun( n)
                    {
                        if (n > 100)
                            return n - 10;
                        return fun(fun(n + 11));
                    }
                    
                    console.log(fun(95));                     
                    `,
                    output: `91`,
                  },
                },
              }}
            />

            <Span>
              <b>Indirect Recursion:</b>
            </Span>
            <Span>
              In this recursion, there may be more than one functions and they
              are calling one another in a circular manner.
            </Span>
            <CodeEditor
              options={{
                title: "Indirect Recursion",
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function funA(n)
                    {
                        if (n > 0) {
                            console.log(n.toFixed(0));
                            funB(n - 1);
                        }
                    }
                     
                    function funB(n)
                    {
                        if (n > 1) {
                            console.log(n.toFixed(0));
                            funA(n / 2);
                        }
                    }
                     
                    funA(20);                     
                    `,
                    output: `20 19 9 8 4 3 1`,
                  },
                },
              }}
            />
            <Span>
              <b>Tower of hanoi problem</b>
            </Span>
            <p>
              Tower of Hanoi is a mathematical puzzle where we have three rods
              and n disks. The objective of the puzzle is to move the entire
              stack to another rod, obeying the following simple rules:
              <br />
              1.Only one disk can be moved at a time.
              <br />
              2.Each move consists of taking the upper disk from one of the
              stacks and placing it on top of another stack i.e. a disk can only
              be moved if it is the uppermost disk on a stack.
              <br />
              3.No disk may be placed on top of a smaller disk.
            </p>

            <CodeEditor
              options={{
                title: "Tower of hanoi problem",
                output: ``,
                codes: {
                  Javascript: {
                    code: `function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
                  {
                    const A = from_rod
                    const B = to_rod
                    const C = aux_rod
                  
                    if (n == 1){
                    console.log("Move disk 1 from rod " + from_rod + " to rod " + to_rod);
                              return;
                    }
                          towerOfHanoi(n - 1, A, C, B);
                          // shift left
                          console.log("Move disk " + n + " from rod " + from_rod +
                          " to rod " + to_rod);
                          towerOfHanoi(n - 1, C, B, A);
                  }
                   
                  var n = 4; 
                  towerOfHanoi(n, 'A', 'C', 'B');
                  
                  // 3 -> 1
                  // T(n) = 2T(n-1) + 1 // 2^n`,
                    output: `Move disk 1 from rod A to rod B
                  Move disk 2 from rod A to rod C
                  Move disk 1 from rod B to rod C
                  Move disk 3 from rod A to rod B
                  Move disk 1 from rod C to rod A
                  Move disk 2 from rod C to rod B
                  Move disk 1 from rod A to rod B
                  Move disk 4 from rod A to rod C
                  Move disk 1 from rod B to rod C
                  Move disk 2 from rod B to rod A
                  Move disk 1 from rod C to rod A
                  Move disk 3 from rod B to rod C
                  Move disk 1 from rod A to rod B
                  Move disk 2 from rod A to rod C
                  Move disk 1 from rod B to rod C`,
                  },
                },
              }}
            />

            <Span>Recursion vs backtracking:</Span>
            <Span>
              In recursion, the function calls itself until it reaches a base
              case. In backtracking, we use recursion to explore all the
              possibilities until we get the best result for the problem.
            </Span>
            <Span>There are mainly three ways for solving recurrences.</Span>
            <Span>
              1) Substitution Method: We make a guess for the solution and then
              we use mathematical induction to prove the guess is correct or
              incorrect.
            </Span>
            <Span>
              For example consider the recurrence T(n) = 2T(n/2) + n We guess
              the solution as T(n) = O(nLogn). Now we use induction to prove our
              guess. We need to prove that T(n) &lt;= cnLogn. We can assume that
              it is true for values smaller than n.
            </Span>
            <pre>
              T(n) = 2T(n/2) + n <br /> &lt;= 2cn/2Log(n/2) + n <br /> = cnLogn
              - cnLog2 + n <br /> = cnLogn - cn + n <br /> &lt;= cnLogn <br />
            </pre>
            <br />
            <Span>
              2) Recurrence Tree Method: In this method, we draw a recurrence
              tree and calculate the time taken by every level of tree. Finally,
              we sum the work done at all levels. To draw the recurrence tree,
              we start from the given recurrence and keep drawing till we find a
              pattern among levels. The pattern is typically a arithmetic or
              geometric series.
            </Span>
            <Span>3. Master's method</Span>
            <Span>I created separate section for this.</Span>
          </>
        ),
      },
      "divide&Conquer": {
        title: "Divide & Conquer",
        content: (
          <>
            <Span>
              This technique is used to solve the given problem by dividing it
              into smaller sub problems , solving them recursively and combining
              the solutions.
            </Span>
            <Span>Examples: Merge sort, quick sort and toh</Span>

            <Span>
              <b>DAC ( Divide And Conquer ) Vs DP (Dynamic Programming)</b>
            </Span>
            <Span>
              Divide and Conquer should be used when the same subproblems are
              not evaluated many times. Otherwise Dynamic Programming or
              Memoization should be used. For example, Quicksort is a Divide and
              Conquer algorithm, we never evaluate the same subproblems again.
              On the other hand, for calculating the nth Fibonacci number,
              Dynamic Programming should be preferred
            </Span>
            <p>Function to find the maximum no. in a given array.</p>
            {/* Function to find the maximum no. */}
            {/* https://www.geeksforgeeks.org/divide-and-conquer-algorithm-introduction/ */}
            <CodeEditor
              options={{
                output: ``,
                title: "Divide & Conquer",
                codes: {
                  Javascript: {
                    code: `function DAC_Max(a,index,l)
                    {
                        let max;
                        if (index >= l - 2)
                        {
                          // only two elements are left
                            if (a[index] > a[index + 1])
                                return a[index];
                            else
                                return a[index + 1];
                        }
                        max = DAC_Max(a, index + 1, l);
                        // we need max here for comparison
                        if (a[index] > max)
                            return a[index];
                        else
                            return max;
                    }
                    
                    function DAC_Min(a,index,l)
                    {
                        let min;
                        if (index >= l - 2)
                        {
                            if (a[index] < a[index + 1])
                                return a[index];
                            else
                                return a[index + 1];
                        }
                        min = DAC_Min(a, index + 1, l);
                        if (a[index] < min)
                            return a[index];
                        else
                            return min;
                    }
                    
                    let min, max;
                    let a=[70, 250, 50, 80, 140, 12, 14];
                    max = DAC_Max(a, 0, 7);
                    min = DAC_Min(a, 0, 7);
                    console.log("The minimum number in " +
                                      "a given array is : ", min);
                    console.log("The maximum number in " +
                                      "a given array is : "+ max);
                     `,
                    output: `
                    The minimum number in a given array is :  12
The maximum number in a given array is : 250
                    `,
                  },
                },
              }}
            />
          </>
        ),
      },
      greedy: {
        title: "Greedy",
        content: (
          <>
            <Span>
              An algorithmic paradigm that follows the problem solving approach
              of making the locally optimal choice at each stage with the hope
              of finding a global optimum.
            </Span>
            <Span>
              <b>Pros: </b>
              simple,easy to implement, and runs fast
            </Span>
            <Span>
              <b>Cons: </b>
              very often they don't provide a globally optimim solution
            </Span>
            <Span>
              consider the below min heap , and let's select the largest number
              at each level starting from the root. <br /> 3 4 7 6 20 9 11
            </Span>
            <Span>
              total sum will be 21 ( 3 + 7 + 11 )
              <br />
              but the maximum possible sum is 27 ( 3 + 4 + 20 )
            </Span>

            <Span>
              <b>Naive vs Greedy vs Brute Force ( Enumeration ) </b>
            </Span>
            <Span>
              Naive algorithm is simply used to find a basic solution to a
              problem. Greedy algorithm at each step makes use of local optimum
              in order to find the global optimum but it doesn't guarantee that
              the last solution is an optimal solution. ( Example: Fractional
              knapsack ). Brute force provides the optimal solution
              everytime.The principle is simple, it is necessary to enumerate
              all the possible solutions of the problem and to choose the best
              solution.
            </Span>
            <Span>
              <b>Properties:</b>
            </Span>
            <Span>
              1 .<b>Greedy Choice Property: </b>
              According to this property, a global optimum can be arrived by
              selecting local optimum.
            </Span>

            <Span>
              2.
              <b>Optimal Substructure: </b> Acc. to this , an optimal solution
              to the problem contains optimal solution to subproblems.
            </Span>
            <Span>
              <b>Feasible Solution:</b>
            </Span>
            <Span>It satisfies given condition</Span>
            <Span>
              <b>Optimal Solution:</b>
            </Span>
            <Span>
              <b>Optimization Problems</b>
            </Span>
            <Span>They require either min or max results</Span>
            <Span>It's feasible and gives best result</Span>
            <Span>Various Applications are specified at the top section.</Span>
          </>
        ),
        types: [
          {
            title: "Activity Selection",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Find out maximum number activities that a person can perform
                  if starting and finishing time of each activity is provided.
                </Span>
                <Span>
                  <b>Greedy approach:</b>
                </Span>
                1. Sort the activities according to their finishing time.
                <br />
                2. Select the first activity from the sorted array and print it
                <br />
                3. For the remaining activities , if the start time of this
                activity is greater then or equal to the finish time of
                previously selected activity then select this activity and print
                it .<p>Implementation</p>
                <CodeEditor
                  options={{
                    title: "Activity Selection",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `function printMaxActivities(s,f){
                          let i,j;
                          console.log("Following activities are selected")
                          i=0;
                          console.log(i)
                          for (j = 1; j < f.length; j++)
                          {
                          if (s[j] >= f[i])
                          {
                          console.log(j);
                          i = j;
                          }}}
                          const s = [1,3,0,5,8,5]
                          const f = [9,4,1,7,9,9]
                          f.sort()
                          printMaxActivities(s,f)
                          `,
                        output: `Following activities are selected
                          0
                          1
                          3`,
                      },
                      Java: {
                        code: `import java.io.*;
                        import java.util.Arrays;
                        class Main{
                        static PrintStream ps = System.out;
                        static void printMaxActivities(int s[], int f[])
                        {
                        int i, j;
                        ps.println("Following activities are selected ");
                        i = 0;
                        ps.print(" "+i);
                        for (j = 1; j < f.length; j++)
                        {
                        if (s[j] >= f[i])
                        {
                        ps.print(" " + j);
                        i = j;
                        }
                        }
                        ps.println("");
                        }
                        public static void main(String ...st){
                        int s[] = {1, 3, 0, 5, 8, 5};
                        int f[] = {9, 4, 1, 7, 9, 9};
                        Arrays.sort(f);
                        printMaxActivities(s, f);
                        }
                        }`,
                        output: `Following activities are selected 
                        0 1 3`,
                      },
                      Python: {
                        code: `def printMaxActivities(s,f):
  print("Following activities are selected ")
  i = 0
  print(i)
  for j in range(1,len(f)):
    if s[j] >= f[i]:
      print(j)
      i=j


s = [1,3,0,5,8,5]
f = [9,4,1,7,9,9]
f.sort()
printMaxActivities(s,f)`,
                        output: `Following activities are selected 
                        0
                        1
                        3`,
                      },
                      "C++": {
                        code: `#include <iostream>
                        #include <bits/stdc++.h>
                        using namespace std;
                        void printMaxActivities(int s[], int f[], int n)
                        {
                        int i, j;
                        cout <<"Following activities are selected "<< endl;
                        i = 0;
                        cout <<" "<< i;
                        for (j = 1; j < n; j++)
                        {
                        if (s[j] >= f[i])
                        {
                        cout <<" " << j;
                        i = j;
                        }
                        }
                        cout << endl;
                        }
                        int main()
                        {
                        int s[] = {1, 3, 0, 5, 8, 5};
                        int f[] = {9, 4, 1, 7, 9, 9};
                        int len = sizeof(f)/sizeof(f[0]);
                        sort(f,f+len);
                        int n = sizeof(s)/sizeof(s[0]);
                        printMaxActivities(s, f, n);
                        return 0;
                        }
                        // 0 3 5 5 8 1
                        // 1 4 7 9 9 9`,
                        output: `Following activities are selected 
                        0 1 3`,
                      },
                      Kotlin: {
                        code: ``,
                        output: `Following activities are selected 
                        0 1 3`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Job Sequencing With Deadlines",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given an array of jobs where every job has a deadline and
                  associated profit if the job is finished before the deadline.
                  It is also given that every job takes single unit of time, so
                  the minimum possible deadline of any job is 1. How to maximize
                  the total profit if only one job can be scheduled at a time
                </Span>
                <Span>
                  <b>Greedy Approach</b>
                </Span>
                <Span>
                  Sort all the jobs in decreasing order of their profit. And
                  then with the help of result boolean array , assign values to
                  jobs array with the help of corresponding deadlines.
                </Span>
                <Span>
                  <b>Example</b>
                </Span>
                <p>
                  JobId: A , B , C , D , E <br />
                  Deadline (Units/time): 2 , 1 , 2 ,1 ,3 <br />
                  Profit 100, 19, 27, 25, 15 <br />
                  answer (a to b units / time) will be : 0 C 1 A 2 E 3 <br />( E
                  can be completed within 3 units of time and both A and C with
                  comparatively larger profit than D and B can be completed
                  within 2 units of time )
                </p>
                <CodeEditor
                  options={{
                    title: "Job Sequencing With Deadlines",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Job {
                          constructor(j,d,p){
                            this.job = j
                            this.profit = p
                            this.deadline = d
                          }
                        }
                        
                        function print(jobs,t){
                        let result = Array(t).fill(false)
                        let answer = Array(t).fill(null)
                        jobs.sort((a,b)=>b.deadline-a.deadline)
                        for(let i in jobs)
                          for(let j=Math.min(t-1,jobs[i].deadline-1);j>=0;j--){
                                if(!result[j]){
                                  result[j] = true
                                  answer[j] = jobs[i].job
                                  break
                                }
                          }
                        console.log(answer)
                        }
                        
                        const jobs = [
                          new Job('A',2,100),
                          new Job('B',1,19),
                          new Job('C',2,27),
                          new Job('D',1,25),
                          new Job('E',3,15),
                        ]
                        
                        print(jobs,3)`,
                        output: `[ 'C', 'A', 'E' ]`,
                      },
                      Java: {
                        code: `import java.util.*;
 
                        class Main
                        {
                            char id;
                            int deadline, profit;
                         
                            public Main() {}
                         
                            public Main(char id, int deadline, int profit)
                            {
                                this.id = id;
                                this.deadline = deadline;
                                this.profit = profit;
                            }
                         
                            void printJobScheduling(ArrayList<Main> arr, int t)
                            {
                                int n = arr.size();
                        
                                Collections.sort(arr,
                                                 (a, b) -> b.profit - a.profit);
                         
                        // sort jobs on the basis of deadlines
                        
                                boolean result[] = new boolean[t];
                         
                                char job[] = new char[t];
                         
                                for (int i = 0; i < n; i++)
                                {
                                    for (int j
                                         = Math.min(t - 1, arr.get(i).deadline - 1);
                                         j >= 0; j--) {
                        
                                          // iterate from max dealine to 0
                                          // and choose appropriate jobs using their respective index
                                          // as we already sorted them  
                        
                                        if (result[j] == false)
                                        {
                                            result[j] = true;
                                            job[j] = arr.get(i).id;
                                            break;
                                        }
                                    }
                                }
                         
                                 for (char jb : job)
                                {
                                    System.out.print(jb + " ");
                                }
                                System.out.println();
                            }
                         
                            public static void main(String args[])
                            {
                                ArrayList<Main> arr = new ArrayList<Main>();
                         
                                arr.add(new Main('a', 2, 100));
                                arr.add(new Main('b', 1, 19));
                                arr.add(new Main('c', 2, 27));
                                arr.add(new Main('d', 1, 25));
                                arr.add(new Main('e', 3, 15));
                               
                                System.out.println("Following is maximum "
                                                   + "profit sequence of jobs");
                         
                                Main job = new Main();
                         
                                job.printJobScheduling(arr, 3);
                            }
                        }`,
                        output: `Following is maximum profit sequence of jobs
                        c a e `,
                      },
                      Python: {
                        code: `def printJobScheduling(arr, t):

  n = len(arr)

  for i in range(n):
    for j in range(n - 1 - i):
      if arr[j][2] < arr[j + 1][2]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]

  result = [False] * t

  job = ['-1'] * t

  for i in range(len(arr)):
    for j in range(min(t - 1, arr[i][1] - 1), -1, -1):
      if result[j] is False:
        result[j] = True
        job[j] = arr[i][0]
        break

  print(job)

arr = [['a', 2, 100], 
  ['b', 1, 19],
  ['c', 2, 27],
  ['d', 1, 25],
  ['e', 3, 15]]


print("Following is maximum profit sequence of jobs")
printJobScheduling(arr, 3)`,
                        output: `['c', 'a', 'e']`,
                      },
                      "C++": {
                        code: `#include<iostream>
                        #include<algorithm>
                        using namespace std;
                         
                        struct Job
                        {
                           char id;    
                           int dead;    
                           int profit;  
                        };
                         
                        bool comparison(Job a, Job b)
                        {
                             return (a.profit > b.profit);
                        }
                         
                        void printJobScheduling(Job arr[], int n)
                        {
                            sort(arr, arr+n, comparison);
                         
                            int result[n]; 
                            bool slot[n];  
                         
                            for (int i=0; i<n; i++)
                                slot[i] = false;
                         
                            for (int i=0; i<n; i++)
                            {
                               for (int j=min(n, arr[i].dead)-1; j>=0; j--)
                               {
                                  if (slot[j]==false)
                                  {
                                     result[j] = i; 
                                     slot[j] = true; 
                                     break;
                                  }
                               }
                            }
                             for (int i=0; i<n; i++)
                               if (slot[i])
                                 cout << arr[result[i]].id << " ";
                        }
                         
                        int main()
                        {
                            Job arr[] = { {'a', 2, 100}, {'b', 1, 19}, {'c', 2, 27},
                                           {'d', 1, 25}, {'e', 3, 15}};
                            int n = sizeof(arr)/sizeof(arr[0]);
                            cout << "Following is maximum profit sequence of jobs \n";
                               printJobScheduling(arr, n);
                            return 0;
                        }`,
                        output: `Following is maximum profit sequence of jobs 
                        c a e`,
                      },
                      Kotlin: {
                        code: `import java.util.*

                        internal class Main {
                            var id = 0.toChar()
                            var deadline = 0
                            var profit = 0
                        
                            constructor() {}
                            constructor(id: Char, deadline: Int, profit: Int) {
                                this.id = id
                                this.deadline = deadline
                                this.profit = profit
                            }
                        
                            fun printJobScheduling(arr: ArrayList<Main?>, t: Int) {
                                val n: Int = arr.size()
                                Collections.sort(
                                    arr
                                ) { a, b -> b.profit - a.profit }
                        
                        // sort jobs on the basis of deadlines
                                val result = BooleanArray(t)
                                val job = CharArray(t)
                                for (i in 0 until n) {
                                    for (j in Math.min(t - 1, arr.get(i).deadline - 1) downTo 0) {
                        
                                        // iterate from max dealine to 0
                                        // and choose appropriate jobs using their respective index
                                        // as we already sorted them  
                                        if (result[j] == false) {
                                            result[j] = true
                                            job[j] = arr.get(i).id
                                            break
                                        }
                                    }
                                }
                                for (jb: Char in job) {
                                    System.out.print("$jb ")
                                }
                                System.out.println()
                            }
                        
                            companion object {
                                fun main(args: Array<String?>?) {
                                    val arr: ArrayList<Main?> = ArrayList<Main>()
                                    arr.add(Main('a', 2, 100))
                                    arr.add(Main('b', 1, 19))
                                    arr.add(Main('c', 2, 27))
                                    arr.add(Main('d', 1, 25))
                                    arr.add(Main('e', 3, 15))
                                    System.out.println(
                                        "Following is maximum "
                                                + "profit sequence of jobs"
                                    )
                                    val job = Main()
                                    job.printJobScheduling(arr, 3)
                                }
                            }
                        }`,
                        output: `Following is maximum profit sequence of jobs
                        c a e `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Fractional Knapsack",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given weights and values of n items, we need to put these
                  items in a knapsack of capacity W to get the maximum total
                  value in the knapsack.
                </Span>
                <Span>
                  <b> Greedy Approach</b>
                </Span>
                <Span>
                  1. Calculate the ratio(value/weight) for each item
                  <br /> 2. Sort the items based on this ratio (desc)
                  <br /> 3. Take the item with highest ratio and add them until
                  we can't add the next item as whole. <br /> 4. At the end add
                  the next item as much(fraction) as we can.
                </Span>
                <Span>
                  <b>Example</b>
                </Span>
                <Span>
                  Label: A , B , C <br />
                  Weight : 10 , 20 , 30 <br />
                  Value: 60 , 100 , 120 <br />
                  Total Capacity =&lt; 50 <br />
                  0-1 Knapsack solution will be : B +C ( profit: 100 + 120 = 220
                  ) (wt. : 20 + 30 = 50) <br />
                  Fractional knapsack solution will be : A + B + (2/3) * C (
                  profit: 60+ 100 + 2* 120 / 3 = 240 ) (wt. : 10 + 20 + 2 * 30 /
                  3 = 50)
                </Span>
                <Span>
                  <b>
                    Drawbacks of using brute force approach for solving this
                    problem:
                  </b>
                </Span>
                <p>
                  A brute-force solution would be to try all possible subset
                  with all different fraction but that will be too much time
                  taking.
                </p>
                <CodeEditor
                  options={{
                    title: "Fractional Knapsack",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Item {
                          constructor(value,weight){
                            this.value = value
                            this.weight = weight
                          }
                        }
                        
                        function fractionalKnapsack(W,arr,n){
                        
                        arr.sort((a,b) => (a.value,a.weight) - (b.value/b.weight))
                        
                        let curWeight = 0
                        let finalvalue = 0.0
                        
                        for (let i = 0; i < n; i++) {
                          if (curWeight + arr[i].weight <= W) {
                            curWeight += arr[i].weight;
                            finalvalue += arr[i].value;
                          }
                          else {
                            let remain = W - curWeight;
                            finalvalue += arr[i].value * (remain/ arr[i].weight);
                            break;
                          }
                        }
                        return finalvalue;
                        }
                        
                        let W = 50; 
                        let arr = []
                        arr.push(new Item(60, 10 ), new Item(100, 20), new Item(120, 30))
                         
                        console.log(fractionalKnapsack(W, arr, arr.length))`,
                        output: `240`,
                      },
                      Java: {
                        code: `import java.util.Arrays;
                        import java.util.Comparator;
                        
                        
                        class Main {
                            private static double getMaxValue(int[] wt, int[] val,
                                                              int capacity)
                            {
                                ItemValue[] iVal = new ItemValue[wt.length];
                         
                                for (int i = 0; i < wt.length; i++) {
                                    iVal[i] = new ItemValue(wt[i], val[i], i);
                                }
                         
                                Arrays.sort(iVal, new Comparator<ItemValue>() {
                                    @Override
                                    public int compare(ItemValue o1, ItemValue o2)
                                    {
                                        return o2.cost.compareTo(o1.cost);
                                    }
                                });
                         
                                double totalValue = 0d;
                         
                                for (ItemValue i : iVal) {
                         
                                    int curWt = (int)i.wt;
                                    int curVal = (int)i.val;
                         
                                    if (capacity - curWt >= 0) {
                                        capacity = capacity - curWt;
                                        totalValue += curVal;
                                    }
                                    else {
                                        double fraction
                                            = ((double)capacity / (double)curWt);
                                        totalValue += (curVal * fraction);
                                        capacity
                                            = (int)(capacity - (curWt * fraction));
                                        break;
                                    }
                                }
                         
                                return totalValue;
                            }
                         
                            static class ItemValue {
                                Double cost;
                                double wt, val, ind;
                         
                                public ItemValue(int wt, int val, int ind)
                                {
                                    this.wt = wt;
                                    this.val = val;
                                    this.ind = ind;
                                    cost = new Double((double)val / (double)wt);
                                }
                            }
                         
                            public static void main(String[] args)
                            {
                                int[] wt = { 10, 40, 20, 30 };
                                int[] val = { 60, 40, 100, 120 };
                                int capacity = 50;
                         
                                double maxValue = getMaxValue(wt, val, capacity);
                                 System.out.println("Maximum value we can obtain = "
                                                   + maxValue);
                            }
                        }`,
                        output: `Maximum value we can obtain = 240.0`,
                      },
                      Python: {
                        code: `class ItemValue:
    def __init__(self, wt, val, ind):
        self.wt = wt
        self.val = val
        self.ind = ind
        self.cost = val // wt
    def __lt__(self, other):
        return self.cost < other.cost
  
class FractionalKnapSack:
    @staticmethod
    def getMaxValue(wt, val, capacity):
        iVal = []
        for i in range(len(wt)):
            iVal.append(ItemValue(wt[i], val[i], i))
        iVal.sort(reverse=True)
        totalValue = 0
        for i in iVal:
            curWt = int(i.wt)
            curVal = int(i.val)
            if capacity - curWt >= 0:
                capacity -= curWt
                totalValue += curVal
            else:
                fraction = capacity / curWt
                totalValue += curVal * fraction
                capacity = int(capacity - (curWt * fraction))
                break
        return totalValue

if __name__ == "__main__":
    wt = [10, 40, 20, 30]
    val = [60, 40, 100, 120]
    capacity = 50
    maxValue = FractionalKnapSack.getMaxValue(wt, val, capacity)
    print("Maximum value in Knapsack =", maxValue)`,
                        output: `Maximum value in Knapsack = 240.0`,
                      },
                      "C++": {
                        code: `#include <bits/stdc++.h>
 
                        using namespace std;
                         
                        struct Item {
                            int value, weight;
                             Item(int value, int weight)
                            {
                               this->value=value;
                               this->weight=weight;
                            }
                        };
                         
                        bool cmp(struct Item a, struct Item b)
                        {
                            double r1 = (double)a.value / (double)a.weight;
                            double r2 = (double)b.value / (double)b.weight;
                            return r1 > r2;
                        }
                         
                        double fractionalKnapsack(int W, struct Item arr[], int n)
                        {
                            sort(arr, arr + n, cmp);
                         
                            int curWeight = 0;
                            double finalvalue = 0.0;
                         
                            for (int i = 0; i < n; i++) {
                                if (curWeight + arr[i].weight <= W) {
                                    curWeight += arr[i].weight;
                                    finalvalue += arr[i].value;
                                }
                                else {
                                    int remain = W - curWeight;
                                    finalvalue += arr[i].value
                                                  * ((double)remain
                                                     / (double)arr[i].weight);
                                    break;
                                }
                            }
                             return finalvalue;
                        }
                         
                        int main()
                        {
                            int W = 50; 
                            Item arr[] = { { 60, 10 }, { 100, 20 }, { 120, 30 } };
                         
                            int n = sizeof(arr) / sizeof(arr[0]);
                             cout << "Maximum value we can obtain = "
                                 << fractionalKnapsack(W, arr, n) << endl;
                            return 0;
                        }`,
                        output: `Maximum value we can obtain = 240`,
                      },
                      Kotlin: {
                        code: `import java.util.Arrays
                        import java.util.Comparator
                        
                        object Main {
                            private fun getMaxValue(
                                wt: IntArray, 'val': IntArray,
                                capacity: Int
                            ): Double {
                                var capacity = capacity
                                val iVal: Array<ItemValue> = arrayOfNulls(wt.size)
                                for (i in wt.indices) {
                                    iVal[i] = ItemValue(wt[i], 'val'[i], i)
                                }
                                Arrays.sort(iVal, object : Comparator<ItemValue?>() {
                                    @Override
                                    fun compare(o1: ItemValue, o2: ItemValue): Int {
                                        return o2.cost.compareTo(o1.cost)
                                    }
                                })
                                var totalValue = 0.0
                                for (i: ItemValue in iVal) {
                                    val curWt = i.wt.toInt()
                                    val curVal = i.'val'.toInt()
                                    if (capacity - curWt >= 0) {
                                        capacity = capacity - curWt
                                        totalValue += curVal.toDouble()
                                    } else {
                                        val fraction = capacity.toDouble() / curWt.toDouble()
                                        totalValue += curVal * fraction
                                        capacity = (capacity - curWt * fraction).toInt()
                                        break
                                    }
                                }
                                return totalValue
                            }
                        
                            fun main(args: Array<String?>?) {
                                val wt = intArrayOf(10, 40, 20, 30)
                                val 'val' = intArrayOf(60, 40, 100, 120)
                                val capacity = 50
                                val maxValue = getMaxValue(wt, 'val', capacity)
                                System.out.println(
                                    "Maximum value we can obtain = "
                                            + maxValue
                                )
                            }
                        
                            internal class ItemValue(wt: Int, 'val': Int, ind: Int) {
                                var cost: Double
                                var wt: Double
                                var 'val': Double
                                var ind: Double
                        
                                init {
                                    this.wt = wt.toDouble()
                                    this.'val' = 'val'.toDouble()
                                    this.ind = ind.toDouble()
                                    cost = Double('val'.toDouble() / wt.toDouble())
                                }
                            }
                        }`,
                        output: `Maximum value we can obtain = 240.0`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Graph Coloring",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Color all the vertcies of the graph in such a way that no two
                  connected vertices will have the same color.
                </Span>
                <Span>
                  <b>Example</b>
                </Span>
                <Span>
                  Sudoku is an example of graph coloring problem where every
                  cell represents a vertex. There is an edge between two
                  vertices if they are in same row or same column or same block.
                </Span>
                <Span>
                  <b>Greedy Approach</b>
                </Span>
                <Img src={GraphImg} alt="img" />
                <p>
                  1. Color first vertex with first color.
                  <br /> 2. For the remaining V-1 vertices. , consider the
                  currently picked vertex and color it with the lowest numbered
                  color that has not been used on any previously colored
                  vertices adjacent to it. If all previously used colors appear
                  on vertices adjacent to v, assign a new color to it.
                </p>
                <CodeEditor
                  options={{
                    title: "Graph Coloring",
                    output: `Coloring of graph 1 
                    Vertex 0  ---> Color 0
                    Vertex 1  ---> Color 1
                    Vertex 2  ---> Color 2
                    Vertex 3  ---> Color 0
                    Vertex 4  ---> Color 1
                    
                    Coloring of graph 2
                    Vertex 0  ---> Color 0
                    Vertex 1  ---> Color 1
                    Vertex 2  ---> Color 2
                    Vertex 3  ---> Color 0
                    Vertex 4  ---> Color 3`,
                    codes: {
                      Javascript: {
                        code: `
                        class Graph {
                          constructor(noOfVertices,colors) {
                              this.noOfVertices = noOfVertices;
                              this.adjList = new Map();
                              this.colors = colors
                          }
                      
                          addVertex(v) {
                              this.adjList.set(v, [])
                          }
                      
                          addEdge(v, w) {
                              this.adjList.get(v).push(w);
                              this.adjList.get(w).push(v);
                          }
                          
                         graphColoring(){
                          let result = {}  
                          let available = {}
                          const keys = Array.from(this.adjList.keys())
                          for(let i in keys){  
                            result[keys[i]] = i == 0 ? this.colors[0] : null
                          }
                          for(let c of this.colors){  
                            available[c] = false
                          }
                           for(let u=1;u<keys.length;u++){
                             for(let i of this.adjList.get(keys[u])){
                               if(result[i]){
                                   available[result[i]] = true
                               }
                             }
                             let cr=0
                             while(cr < this.noOfVertices){
                                if(!available[this.colors[cr]])
                                break;
                                cr+=1
                             }
                             result[keys[u]] = this.colors[cr]
                             for(let i of this.adjList.get(keys[u])){
                               if(result[i]){
                                   available[result[i]] = false
                               }
                             }
                           }
                          for(let i of keys){  
                            console.log("Vertex : " + i + " ---> Color : " + result[i])
                          }
                          }
                      
                          printAdjList() {
                              var get_keys = this.adjList.keys();
                              for (var i of get_keys) {
                                  var get_values = this.adjList.get(i);
                                  var conc = "";
                                  for (var j of get_values)
                                      conc += j + " ";
                                  console.log(i + " -> " + conc);
                              }
                          }
                      }
                      
                      
                      const g = new Graph(6,['red','green','yellow','blue','black','orange'])
                      const v = ['A', 'B', 'C', 'D', 'E', 'F']
                      for (let x of v) {
                          g.addVertex(x)
                      }
                      
                      g.addEdge('A', 'B');
                      g.addEdge('A', 'D');
                      g.addEdge('A', 'E');
                      g.addEdge('B', 'C');
                      g.addEdge('D', 'E');
                      g.addEdge('E', 'F');
                      g.addEdge('E', 'C');
                      g.addEdge('C', 'F');
                      g.printAdjList();
                      console.log(Array.from(g.adjList.keys()))
                      g.graphColoring();                      
                        `,
                        output: `A -> B D E 
                        B -> A C 
                        C -> B E F 
                        D -> A E 
                        E -> A D F C 
                        F -> E C 
                        [ 'A', 'B', 'C', 'D', 'E', 'F' ]
                        Vertex : A ---> Color : red
                        Vertex : B ---> Color : green
                        Vertex : C ---> Color : red
                        Vertex : D ---> Color : green
                        Vertex : E ---> Color : yellow
                        Vertex : F ---> Color : green`,
                      },
                      Java: {
                        code: `import java.util.*;
                       import java.util.LinkedList;
                       
                       class Graph
                       {
                         private int V; 
                         private LinkedList<Integer> adj[]; 
                       
                         Graph(int v)
                         {
                           V = v;
                           adj = new LinkedList[v];
                           for (int i=0; i<v; ++i)
                             adj[i] = new LinkedList();
                         }
                       
                         void addEdge(int v,int w)
                         {
                           adj[v].add(w);
                           adj[w].add(v);
                         }
                       
                         void greedyColoring()
                         {
                           int result[] = new int[V];
                           Arrays.fill(result, -1);
                           result[0] = 0;
                           boolean available[] = new boolean[V];
                           Arrays.fill(available, true);
                           for (int u = 1; u < V; u++)
                           {
                             Iterator<Integer> it = adj[u].iterator() ;
                             while (it.hasNext())
                             {
                               int i = it.next();
                               if (result[i] != -1)
                                 available[result[i]] = false;
                             }
                             int cr;
                             for (cr = 0; cr < V; cr++){
                               if (available[cr])
                                 break;
                             }
                             result[u] = cr; 
                             Arrays.fill(available, true);
                           }
                           for (int u = 0; u < V; u++)
                             System.out.println("Vertex " + u + " ---> Color "
                                       + result[u]);
                         }
                       
                         public static void main(String args[])
                         {
                           Graph g1 = new Graph(5);
                           g1.addEdge(0, 1);
                           // if 0 is connected to 1 , 1 is also connected to 0
                           g1.addEdge(0, 2);
                           g1.addEdge(1, 2);
                           g1.addEdge(1, 3);
                           g1.addEdge(2, 3);
                           g1.addEdge(3, 4);
                           System.out.println("Coloring of graph 1");
                           g1.greedyColoring();
                           System.out.println();
                           Graph g2 = new Graph(5);
                           g2.addEdge(0, 1);
                           g2.addEdge(0, 2);
                           g2.addEdge(1, 2);
                           g2.addEdge(1, 4);
                           g2.addEdge(2, 4);
                           g2.addEdge(4, 3);
                           System.out.println("Coloring of graph 2 ");
                           g2.greedyColoring();
                         }
                       }`,
                      },
                      Python: {
                        code: `def addEdge(adj, v, w):
  adj[v].append(w)
  adj[w].append(v)
  return adj

def graphColoring(adj, V):
  
  result = [-1] * V

  result[0] = 0

  available = [False] * V

  for u in range(1, V):
    
    for i in adj[u]:
      if (result[i] != -1):
        available[result[i]] = True

    cr = 0
    while cr < V:
      if (available[cr] == False):
        break
      
      cr += 1
      
    result[u] = cr

    for i in adj[u]:
      if (result[i] != -1):
        available[result[i]] = False

  for u in range(V):
    print("Vertex", u, " ---> Color", result[u])

if __name__ == '__main__':
  
  g1 = [[] for i in range(5)]
  g1 = addEdge(g1, 0, 1)
  g1 = addEdge(g1, 0, 2)
  g1 = addEdge(g1, 1, 2)
  g1 = addEdge(g1, 1, 3)
  g1 = addEdge(g1, 2, 3)
  g1 = addEdge(g1, 3, 4)
  print("Coloring of graph 1 ")
  graphColoring(g1, 5)

  g2 = [[] for i in range(5)]
  g2 = addEdge(g2, 0, 1)
  g2 = addEdge(g2, 0, 2)
  g2 = addEdge(g2, 1, 2)
  g2 = addEdge(g2, 1, 4)
  g2 = addEdge(g2, 2, 4)
  g2 = addEdge(g2, 4, 3)
  print("\nColoring of graph 2")
  graphColoring(g2, 5)
                      `,
                      },
                      "C++": {
                        code: `#include <iostream>
                        #include <list>
                        using namespace std;
                        
                        class Graph
                        {
                          int V; 
                          list<int> *adj;
                        public:
                          Graph(int V) { this->V = V; adj = new list<int>[V]; }
                          ~Graph()	 { delete [] adj; }
                        
                          void addEdge(int v, int w);
                        
                          void greedyColoring();
                        };
                        
                        void Graph::addEdge(int v, int w)
                        {
                          adj[v].push_back(w);
                          adj[w].push_back(v); 
                        }
                        
                        void Graph::greedyColoring()
                        {
                          int result[V];
                        
                          result[0] = 0;
                        
                          for (int u = 1; u < V; u++)
                            result[u] = -1; 
                        
                          bool available[V];
                          for (int cr = 0; cr < V; cr++)
                            available[cr] = false;
                        
                          for (int u = 1; u < V; u++)
                          {
                            list<int>::iterator i;
                            for (i = adj[u].begin(); i != adj[u].end(); ++i)
                              if (result[*i] != -1)
                                available[result[*i]] = true;
                        
                            int cr;
                            for (cr = 0; cr < V; cr++)
                              if (available[cr] == false)
                                break;
                        
                            result[u] = cr;
                        
                            for (i = adj[u].begin(); i != adj[u].end(); ++i)
                              if (result[*i] != -1)
                                available[result[*i]] = false;
                          }
                        
                          for (int u = 0; u < V; u++)
                            cout << "Vertex " << u << " ---> Color "
                              << result[u] << endl;
                        }
                        
                        int main()
                        {
                          Graph g1(5);
                          g1.addEdge(0, 1);
                          g1.addEdge(0, 2);
                          g1.addEdge(1, 2);
                          g1.addEdge(1, 3);
                          g1.addEdge(2, 3);
                          g1.addEdge(3, 4);
                          cout << "Coloring of graph 1 \n";
                          g1.greedyColoring();
                        
                          Graph g2(5);
                          g2.addEdge(0, 1);
                          g2.addEdge(0, 2);
                          g2.addEdge(1, 2);
                          g2.addEdge(1, 4);
                          g2.addEdge(2, 4);
                          g2.addEdge(4, 3);
                          cout << "\nColoring of graph 2 \n";
                          g2.greedyColoring();
                        
                          return 0;
                        }
                        `,
                      },
                      Kotlin: {
                        code: `import java.io.*
                        import java.util.*
                        import java.util.LinkedList
                        
                        internal class Graph(private val V: Int) {
                            private val adj: Array<LinkedList<Integer>>
                            fun addEdge(v: Int, w: Int) {
                                adj[v].add(w)
                                adj[w].add(v)
                            }
                        
                            fun greedyColoring() {
                                val result = IntArray(V)
                                Arrays.fill(result, -1)
                                result[0] = 0
                                val available = BooleanArray(V)
                                Arrays.fill(available, true)
                                for (u in 1 until V) {
                                    val it: Iterator<Integer> = adj[u].iterator()
                                    while (it.hasNext()) {
                                        val i: Int = it.next()
                                        if (result[i] != -1) available[result[i]] = false
                                    }
                                    var cr: Int
                                    cr = 0
                                    while (cr < V) {
                                        if (available[cr]) break
                                        cr++
                                    }
                                    result[u] = cr
                                    Arrays.fill(available, true)
                                }
                                for (u in 0 until V) System.out.println(
                                    "Vertex " + u + " ---> Color "
                                            + result[u]
                                )
                            }
                        
                            companion object {
                                fun main(args: Array<String?>?) {
                                    val g1 = Graph(5)
                                    g1.addEdge(0, 1)
                                    g1.addEdge(0, 2)
                                    g1.addEdge(1, 2)
                                    g1.addEdge(1, 3)
                                    g1.addEdge(2, 3)
                                    g1.addEdge(3, 4)
                                    System.out.println("Coloring of graph 1")
                                    g1.greedyColoring()
                                    System.out.println()
                                    val g2 = Graph(5)
                                    g2.addEdge(0, 1)
                                    g2.addEdge(0, 2)
                                    g2.addEdge(1, 2)
                                    g2.addEdge(1, 4)
                                    g2.addEdge(2, 4)
                                    g2.addEdge(4, 3)
                                    System.out.println("Coloring of graph 2 ")
                                    g2.greedyColoring()
                                }
                            }
                        
                            init {
                                adj = arrayOfNulls<LinkedList>(V)
                                for (i in 0 until V) adj[i] = LinkedList()
                            }
                        }`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Practice</b>
                </Span>
                <Img src={GraphImg} alt="img" reduceH left />
                <CodeEditor
                  options={{
                    title: "Graph Coloring(BFS)",
                    codes: {
                      Javascript: {
                        code: `class Graph {
  
                          constructor(n,v,c){
                            this.n = n
                            this.g = {}
                            this.c = c
                            this.v = v
                          }
                        
                          addVertex(v){
                            this.g[v] = {
                              color:null,
                              list: []
                            }
                          }
                          
                          addEdge(u,v){
                           this.g[u].list.push(v)
                           this.g[v].list.push(u)
                          }
                        
                          print(){
                            console.log(this.g)
                          }
                        
                          bfs(){
                            let q = []
                            let visited = {}
                            visited[0] = true
                            q.push(0)
                            this.g[0].color = this.c[0]
                            while(q.length){
                              const v = q.shift()
                              const list = this.g[v].list
                              let c = 0
                              for(let i of list){
                                if(!visited[i]){
                                  visited[i] = true
                                  q.push(i)
                                }
                                if(this.g[i].color===c) c++
                              }
                              this.g[v].color = c
                              console.log(this.v[v] + " -> " + this.c[c])
                            }
                          }
                        
                        }
                        
                        const c = ['red', 'green', 'yellow', 'blue', 'black', 'orange']
                        const v = ['A', 'B', 'C', 'D', 'E', 'F']
                        const g = new Graph(6,v,c)
                        for (let x in v) {
                            g.addVertex(x)
                        }
                        g.addEdge(0, 1);
                        g.addEdge(0, 3);
                        g.addEdge(0, 4);
                        g.addEdge(1, 2);
                        g.addEdge(3, 4);
                        g.addEdge(4, 5);
                        g.addEdge(4, 2);
                        g.addEdge(2, 5);
                        g.bfs()
                        g.print()
                        `,
                        output: `A -> red
                        B -> green
                        D -> green
                        E -> yellow
                        C -> red
                        F -> green
                        {
                          '0': { color: 0, list: [ 1, 3, 4 ] },
                          '1': { color: 1, list: [ 0, 2 ] },
                          '2': { color: 0, list: [ 1, 4, 5 ] },
                          '3': { color: 1, list: [ 0, 4 ] },
                          '4': { color: 2, list: [ 0, 3, 5, 2 ] },
                          '5': { color: 1, list: [ 4, 2 ] }
                        }`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Huffman Coding",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Assign variable-length codes to input characters, lengths of
                  the assigned codes are based on the frequencies of
                  corresponding characters. The most frequent character gets the
                  smallest code and the least frequent character gets the
                  largest code.
                </Span>
                <Span>
                  <b>Note : </b>
                  Huffman coding is a lossless data compression algorithm.
                </Span>
                <Span>
                  <b>Example :</b>
                </Span>
                <Span>Character : a , b , c , d , e , f</Span>
                <Span>Frequency : 5 , 9 , 12 , 13 , 16 , 45</Span>
                <Span>Solution :</Span>

                <Span>Character : f , c , d , a , b , e</Span>

                <Span>Code Word : 0 , 100 , 101 , 1100 , 1101 , 101</Span>

                <Span>
                  <b>Greedy Approach :</b>
                </Span>
                <Span>
                  1 . Create a leaf node for each unique character and build a
                  min heap of all leaf nodes (Min Heap is used as a priority
                  queue. The value of frequency field is used to compare two
                  nodes in min heap. Initially, the least frequent character is
                  at root) <br />
                  2 . Extract two nodes with the minimum frequency from the min
                  heap. <br />
                  3 . Create a new internal node with a frequency equal to the
                  sum of the two nodes frequencies. Make the first extracted
                  node as its left child and the other extracted node as its
                  right child. Add this node to the min heap. <br />
                  4 . Repeat steps#2 and #3 until the heap contains only one
                  node. The remaining node is the root node and the tree is
                  complete. <br />
                </Span>
                <p>
                  As we can character with highest frequency i.e, f got smallest
                  character code
                </p>
                <CodeEditor
                  options={{
                    title: "Huffman Coding",
                    output: `f -> 0
                    c -> 100
                    d -> 101
                    a -> 1100
                    b -> 1101
                    e -> 111`,
                    codes: {
                      Javascript: {
                        code: `class node{
                          constructor(freq,symbol,left=null,right=null){
                             this.freq = freq
                             this.symbol = symbol
                             this.left = left
                             this.right= right
                             this.huff = ''
                          } 
                       }
                       
                       function printNodes(node, val=''){
                           const newVal = val + ""+ node.huff
                           if(node.left)
                               printNodes(node.left, newVal)
                           if(node.right)
                               printNodes(node.right, newVal)
                           if(!node.left && !node.right)
                               console.log(node.symbol + ' -> ' + newVal)
                       }
                       
                       const chars = ['a', 'b', 'c', 'd', 'e', 'f']
                       
                       const freq = [ 5, 9, 12, 13, 16, 45]
                       
                       let nodes = []
                       
                       for(let c in chars){
                         nodes.push(new node(freq[c],chars[c]))
                       }
                       
                       
                       try{
                       while(nodes.length > 1){
                           nodes = nodes.sort((a,b)=>a.freq-b.freq)
                           let left = nodes[0]
                           let right = nodes[1]
                           left.huff = 0
                           right.huff = 1
                           let newNode = new node(left.freq+right.freq, left.symbol+right.symbol, left, right)
                           nodes = nodes.filter(x=>x.symbol!==left.symbol)
                           nodes = nodes.filter(x=>x.symbol!==right.symbol)
                           nodes.push(newNode)
                       }
                       printNodes(nodes[0])
                       }catch(e){
                       console.log(e)
                       }
                       `,
                      },
                      Java: {
                        code: `
                       import java.util.PriorityQueue;
                       import java.util.Scanner;
                       import java.util.Comparator;
                        
                       class HuffmanNode {
                        
                           int data;
                           char c;
                        
                           HuffmanNode left;
                           HuffmanNode right;
                       }
                        
                       
                       class MyComparator implements Comparator<HuffmanNode> {
                           public int compare(HuffmanNode x, HuffmanNode y)
                           {
                        
                               return x.data - y.data;
                           }
                       }
                        
                       class Huffman {
                        
                           public static void printCode(HuffmanNode root, String s)
                           {
                        
                               if (root.left
                                       == null
                                   && root.right
                                          == null
                                   && Character.isLetter(root.c)) {
                        
                                   System.out.println(root.c + ":" + s);
                        
                                   return;
                               }
                       
                               printCode(root.left, s + "0");
                               printCode(root.right, s + "1");
                           }
                        
                           public static void main(String[] args)
                           {
                        
                               Scanner s = new Scanner(System.in);
                        
                               int n = 6;
                               char[] charArray = { 'a', 'b', 'c', 'd', 'e', 'f' };
                               int[] charfreq = { 5, 9, 12, 13, 16, 45 };
                        
                               PriorityQueue<HuffmanNode> q
                                   = new PriorityQueue<HuffmanNode>(n, new MyComparator());
                        
                               for (int i = 0; i < n; i++) {
                       
                                   HuffmanNode hn = new HuffmanNode();
                        
                                   hn.c = charArray[i];
                                   hn.data = charfreq[i];
                        
                                   hn.left = null;
                                   hn.right = null;
                        
                                   q.add(hn);
                               }
                        
                               HuffmanNode root = null;
                        
                               while (q.size() > 1) {
                       
                                   HuffmanNode x = q.peek();
                                   q.poll();
                        
                                   HuffmanNode y = q.peek();
                                   q.poll();
                       
                                   HuffmanNode f = new HuffmanNode();
                        
                                   f.data = x.data + y.data;
                                   f.c = '-';
                        
                                   f.left = x;
                        
                                   f.right = y;
                        
                                   root = f;
                                   q.add(f);
                               }
                                printCode(root, "");
                           }
                       }`,
                      },
                      Python: {
                        code: `class node:
  def __init__(self, freq, symbol, left=None, right=None):
    self.freq = freq

    self.symbol = symbol

    self.left = left

    self.right = right

    self.huff = ''


def printNodes(node, val=''):
  newVal = val + str(node.huff)

  if(node.left):
    printNodes(node.left, newVal)
  if(node.right):
    printNodes(node.right, newVal)

  if(not node.left and not node.right):
    print(f"{node.symbol} -> {newVal}")


chars = ['a', 'b', 'c', 'd', 'e', 'f']

freq = [ 5, 9, 12, 13, 16, 45]

nodes = []

for x in range(len(chars)):
  nodes.append(node(freq[x], chars[x]))

while len(nodes) > 1:
  nodes = sorted(nodes, key=lambda x: x.freq)

  left = nodes[0]
  right = nodes[1]

  left.huff = 0
  right.huff = 1

  newNode = node(left.freq+right.freq, left.symbol+right.symbol, left, right)

  nodes.remove(left)
  nodes.remove(right)
  nodes.append(newNode)

printNodes(nodes[0])
                      `,
                      },
                      "C++": {
                        code: `#include <bits/stdc++.h>
                        using namespace std;
                         
                        struct MinHeapNode {
                         
                            char data;
                            unsigned freq;
                         
                            MinHeapNode *left, *right;
                         
                            MinHeapNode(char data, unsigned freq)
                         
                            {
                                left = right = NULL;
                                this->data = data;
                                this->freq = freq;
                            }
                        };
                         
                        struct compare {
                         
                            bool operator()(MinHeapNode* l, MinHeapNode* r)
                         
                            {
                                return (l->freq > r->freq);
                            }
                        };
                         
                        void printCodes(struct MinHeapNode* root, string str)
                        {
                         
                            if (!root)
                                return;
                         
                            if (root->data != '$')
                                cout << root->data << ": " << str << "\n";
                         
                            printCodes(root->left, str + "0");
                            printCodes(root->right, str + "1");
                        }
                         
                        void HuffmanCodes(char data[], int freq[], int size)
                        {
                            struct MinHeapNode *left, *right, *top;
                         
                            priority_queue<MinHeapNode*, vector<MinHeapNode*>, compare> minHeap;
                         
                            for (int i = 0; i < size; ++i)
                                minHeap.push(new MinHeapNode(data[i], freq[i]));
                         
                            while (minHeap.size() != 1) {
                        
                                left = minHeap.top();
                                minHeap.pop();
                         
                                right = minHeap.top();
                                minHeap.pop();
                         
                                top = new MinHeapNode('$', left->freq + right->freq);
                         
                                top->left = left;
                                top->right = right;
                         
                                minHeap.push(top);
                            }
                         
                            printCodes(minHeap.top(), "");
                        }
                         
                        int main()
                        {
                         
                            char arr[] = { 'a', 'b', 'c', 'd', 'e', 'f' };
                            int freq[] = { 5, 9, 12, 13, 16, 45 };
                            int size = sizeof(arr) / sizeof(arr[0]); 
                            HuffmanCodes(arr, freq, size);
                         
                            return 0;
                        }
                         `,
                      },
                      Kotlin: {
                        code: `import java.util.Arrays
import java.util.Comparator

object Main {
    private fun getMaxValue(
        wt: IntArray, 'val': IntArray,
        capacity: Int
    ): Double {
        var capacity = capacity
        val iVal: Array<ItemValue> = arrayOfNulls(wt.size)
        for (i in wt.indices) {
            iVal[i] = ItemValue(wt[i], 'val'[i], i)
        }
        Arrays.sort(iVal, object : Comparator<ItemValue?>() {
            @Override
            fun compare(o1: ItemValue, o2: ItemValue): Int {
                return o2.cost.compareTo(o1.cost)
            }
        })
        var totalValue = 0.0
        for (i: ItemValue in iVal) {
            val curWt = i.wt.toInt()
            val curVal = i.'val'.toInt()
            if (capacity - curWt >= 0) {
                capacity = capacity - curWt
                totalValue += curVal.toDouble()
            } else {
                val fraction = capacity.toDouble() / curWt.toDouble()
                totalValue += curVal * fraction
                capacity = (capacity - curWt * fraction).toInt()
                break
            }
        }
        return totalValue
    }

    fun main(args: Array<String?>?) {
        val wt = intArrayOf(10, 40, 20, 30)
        val 'val' = intArrayOf(60, 40, 100, 120)
        val capacity = 50
        val maxValue = getMaxValue(wt, 'val', capacity)
        System.out.println(
            "Maximum value we can obtain = "
                    + maxValue
        )
    }

    internal class ItemValue(wt: Int, 'val': Int, ind: Int) {
        var cost: Double
        var wt: Double
        var 'val': Double
        var ind: Double

        init {
            this.wt = wt.toDouble()
            this.'val' = 'val'.toDouble()
            this.ind = ind.toDouble()
            cost = Double('val'.toDouble() / wt.toDouble())
        }
    }
}`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Minimum Cost Spanning Trees",
            content: (
              <>
                <Span>
                  It is a subset of the edges of a connected , edgeweighted
                  graph that connects all the vertices together, without any
                  cycles and with the minimum possible totol edge weight. |E| =
                  |V| -1
                </Span>
                <Span>
                  Examples: Kruskal and Prims algorithms are used to find such
                  trees.
                </Span>
                <Span>
                  <b>Applications</b>
                </Span>
                <Span>
                  Network Design: Telephone , Electrical , Hydraulic , TV Cable
                  , Computer , Road
                  <br />
                  Approximation Algorithms: Travelling Salesman Problem , NP
                  Hard
                  <br /> List of cities and distance b/w each city
                  <br /> shortest path which reach each city exactly once and
                  return to the original city
                  <br /> MST * 2
                  <br /> Stiener Tree
                  <br /> Used to connect vertices of subset (terminal vertices)
                  (A,D)
                  <br /> Indirect Use Of MST
                  <br /> Max Bottleneck problem : here we find the path b/w two
                  designated vertices in a weighted graph maximizing the weight
                  of its minimum weight edge in the path ,
                  <br /> LDPC low density parity check , Cluster Analysis ,
                  groups based on some similarities
                </Span>
              </>
            ),
          },
          {
            title: "Kruskal",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Construct an MST with the help of globally available edge with
                  minimum weight which is not picked yet.
                </Span>
                <Span>
                  <b>Note</b>
                </Span>
                <Span>
                  <b>Note</b>
                </Span>

                <Span>Kruskal is slower tham prim's.</Span>
                <Span>Time Complexity : O(ElogE) or (ElogV)</Span>
                <Span>
                  <b>Greedy Approach</b>
                </Span>

                <Span>
                  Sort all the edges in non-decreasing order of their weight.{" "}
                  <br />
                  Pick the smallest edge. Check if it forms a cycle with the
                  spanning tree formed so far. If cycle is not formed, include
                  this edge. Else, discard it.
                  <br />
                  Repeat step#2 until there are (V-1) edges in the spanning
                  tree. <br />
                  Note : Basically , we make use of rank of a nodes in order to
                  generate the tree. Node with higher rank will be closer to
                  root. <br />
                </Span>
                <p>
                  <b>Note :</b>
                  Basically , we make use of rank of a nodes in order to
                  generate the tree. Node with higher rank will be closer to
                  root.
                </p>
                <CodeEditor
                  options={{
                    title: "Kruskal",
                    output: `Following are the edges in the constructed MST
                    2 -- 3 == 4
                    0 -- 3 == 5
                    0 -- 1 == 10
                    Minimum Cost Of Spanning Tree 19`,
                    codes: {
                      // Javascript: {
                      //   code: ``,
                      //   output: ``,
                      // },
                      Java: {
                        code: `import java.util.*;

                        class Graph {
                          class Edge implements Comparable<Edge>
                          {
                            int src, dest, weight;
                        
                            public int compareTo(Edge compareEdge)
                            {
                              return this.weight - compareEdge.weight;
                            }
                          };
                        
                          class subset
                          {
                            int parent, rank;
                          };
                        
                          int V, E; 
                          Edge edge[]; 
                        
                          Graph(int v, int e)
                          {
                            V = v;
                            E = e;
                            edge = new Edge[E];
                            for (int i = 0; i < e; ++i)
                              edge[i] = new Edge();
                          }
                        
                          int find(subset subsets[], int i)
                          {
                            if (subsets[i].parent != i)
                              subsets[i].parent
                                = find(subsets, subsets[i].parent);
                        
                            return subsets[i].parent;
                          }
                        
                          void Union(subset subsets[], int x, int y)
                          {
                            int xroot = find(subsets, x);
                            int yroot = find(subsets, y);
                        
                            if (subsets[xroot].rank
                              < subsets[yroot].rank)
                              subsets[xroot].parent = yroot;
                            else if (subsets[xroot].rank
                                > subsets[yroot].rank)
                              subsets[yroot].parent = xroot;
                        
                            else {
                              subsets[yroot].parent = xroot;
                              subsets[xroot].rank++;
                            }
                          }
                        
                          void KruskalMST()
                          {
                            Edge result[] = new Edge[V];
                          
                            int e = 0;
                          
                            int i = 0;
                            for (i = 0; i < V; ++i)
                              result[i] = new Edge();
                        
                            Arrays.sort(edge);
                        
                            subset subsets[] = new subset[V];
                            for (i = 0; i < V; ++i)
                              subsets[i] = new subset();
                        
                            for (int v = 0; v < V; ++v)
                            {
                              subsets[v].parent = v;
                              subsets[v].rank = 0;
                            }
                        
                            i = 0; 
                        
                            while (e < V - 1)
                            {
                              Edge next_edge = edge[i++];
                        
                              int x = find(subsets, next_edge.src);
                              int y = find(subsets, next_edge.dest);
                        
                              if (x != y) {
                                result[e++] = next_edge;
                                Union(subsets, x, y);
                              }
                            }
                        
                            System.out.println("Following are the edges in "
                                    + "the constructed MST");
                            int minimumCost = 0;
                            for (i = 0; i < e; ++i)
                            {
                              System.out.println(result[i].src + " -- "
                                      + result[i].dest
                                      + " == " + result[i].weight);
                              minimumCost += result[i].weight;
                            }
                            System.out.println("Minimum Cost Spanning Tree "
                                    + minimumCost);
                          }
                        
                          public static void main(String[] args)
                          {
                            int V = 4;
                            int E = 5;
                            Graph graph = new Graph(V, E);
                            graph.edge[0].src = 0;
                            graph.edge[0].dest = 1;
                            graph.edge[0].weight = 10;
                            graph.edge[1].src = 0;
                            graph.edge[1].dest = 2;
                            graph.edge[1].weight = 6;
                            graph.edge[2].src = 0;
                            graph.edge[2].dest = 3;
                            graph.edge[2].weight = 5;
                            graph.edge[3].src = 1;
                            graph.edge[3].dest = 3;
                            graph.edge[3].weight = 15;
                            graph.edge[4].src = 2;
                            graph.edge[4].dest = 3;
                            graph.edge[4].weight = 4;
                        
                            graph.KruskalMST();
                          }
                        }
                        `,
                      },
                      Python: {
                        code: `from collections import defaultdict

class Graph:

  def __init__(self, vertices):
    self.V = vertices 
    self.graph = [] 

  def addEdge(self, u, v, w):
    self.graph.append([u, v, w])

  def find(self, parent, i):
    if parent[i] == i:
      return i
    return self.find(parent, parent[i])

  def union(self, parent, rank, x, y):
    xroot = self.find(parent, x)
    yroot = self.find(parent, y)

    if rank[xroot] < rank[yroot]:
      parent[xroot] = yroot
    elif rank[xroot] > rank[yroot]:
      parent[yroot] = xroot

    else:
      parent[yroot] = xroot
      rank[xroot] += 1

  def KruskalMST(self):

    result = []
    
    i = 0
    
    e = 0

    self.graph = sorted(self.graph,
              key=lambda item: item[2])

    parent = []
    rank = []

    for node in range(self.V):
      parent.append(node)
      rank.append(0)

    while e < self.V - 1:

      u, v, w = self.graph[i]
      i = i + 1
      x = self.find(parent, u)
      y = self.find(parent, v)

      if x != y:
        e = e + 1
        result.append([u, v, w])
        self.union(parent, rank, x, y)

    minimumCost = 0
    print ("Edges in the constructed MST")
    for u, v, weight in result:
      minimumCost += weight
      print("%d -- %d == %d" % (u, v, weight))
    print("Minimum Spanning Tree" , minimumCost)

g = Graph(4)
g.addEdge(0, 1, 10)
g.addEdge(0, 2, 6)
g.addEdge(0, 3, 5)
g.addEdge(1, 3, 15)
g.addEdge(2, 3, 4)

g.KruskalMST()
                        
                        `,
                      },
                      "C++": {
                        code: `#include <bits/stdc++.h>
                        using namespace std;
                        class Edge {
                        public:
                        int src, dest, weight;
                        };
                        class Graph {
                        public:
                        int V, E;
                        Edge* edge;
                        };
                        Graph* createGraph(int V, int E)
                        {
                        Graph* graph = new Graph;
                        graph->V = V;
                        graph->E = E;
                        graph->edge = new Edge[E];
                        return graph;
                        }
                        class subset {
                        public:
                        int parent;
                        int rank;
                        };
                        int find(subset subsets[], int i)
                        {
                        if (subsets[i].parent!= i)
                        subsets[i].parent
                        = find(subsets, subsets[i].parent);
                        return subsets[i].parent;
                        }
                        void Union(subset subsets[], int x, int y)
                        {
                        int xroot = find(subsets, x);
                        int yroot = find(subsets, y);
                        if (subsets[xroot].rank < subsets[yroot].rank)
                        subsets[xroot].parent = yroot;
                        else if (subsets[xroot].rank > subsets[yroot].rank)
                        subsets[yroot].parent = xroot;
                        else {
                        subsets[yroot].parent = xroot;
                        subsets[xroot].rank++;
                        }
                        }
                        int myComp(const void* a, const void* b)
                        {
                        Edge* a1 = (Edge*)a;
                        Edge* b1 = (Edge*)b;
                        return a1->weight > b1->weight;
                        }
                        void KruskalMST(Graph* graph)
                        {
                        int V = graph->V;
                        Edge result[V];
                        int e = 0;
                        int i = 0;
                        qsort(graph->edge, graph->E, sizeof(graph->edge[0]),
                        myComp);
                        subset* subsets = new subset[(V * sizeof(subset))];
                        for (int v = 0; v < V; ++v)
                        {
                        subsets[v].parent = v;
                        subsets[v].rank = 0;
                        }
                        while (e < V-1 && i < graph->E)
                        {
                        Edge next_edge = graph->edge[i++];
                        int x = find(subsets, next_edge.src);
                        int y = find(subsets, next_edge.dest);
                        if (x!= y) {
                        result[e++] = next_edge;
                        Union(subsets, x, y);
                        }
                        }
                        cout << "Following are the edges in the constructed "
                        "MST\n";
                        int minimumCost = 0;
                        for (i = 0; i < e; ++i)
                        {
                        cout << result[i].src << "-" << result[i].dest
                        << " == " << result[i].weight << endl;
                        minimumCost = minimumCost + result[i].weight;
                        }
                        cout << "Minimum Cost Spanning Tree: " << minimumCost
                        << endl;
                        }
                        int main()
                        {
                        int V = 4;
                        int E = 5;
                        Graph* graph = createGraph(V, E);
                        graph->edge[0].src = 0;
                        graph->edge[0].dest = 1;
                        graph->edge[0].weight = 10;
                        graph->edge[1].src = 0;
                        graph->edge[1].dest = 2;
                        graph->edge[1].weight = 6;
                        graph->edge[2].src = 0;
                        graph->edge[2].dest = 3;
                        graph->edge[2].weight = 5;
                        graph->edge[3].src = 1;
                        graph->edge[3].dest = 3;
                        graph->edge[3].weight = 15;
                        graph->edge[4].src = 2;
                        graph->edge[4].dest = 3;
                        graph->edge[4].weight = 4;
                        KruskalMST(graph);
                        return 0;
                        }`,
                      },
                      Kotlin: {
                        code: `import java.util.*;
import java.lang.*;
import java.io.*;

class Graph {
	class Edge implements Comparable<Edge>
	{
		int src, dest, weight;

		public int compareTo(Edge compareEdge)
		{
			return this.weight - compareEdge.weight;
		}
	};

	class subset
	{
		int parent, rank;
	};

	int V, E; 
	Edge edge[]; 

	Graph(int v, int e)
	{
		V = v;
		E = e;
		edge = new Edge[E];
		for (int i = 0; i < e; ++i)
			edge[i] = new Edge();
	}

	int find(subset subsets[], int i)
	{
		if (subsets[i].parent != i)
			subsets[i].parent
				= find(subsets, subsets[i].parent);

		return subsets[i].parent;
	}

	void Union(subset subsets[], int x, int y)
	{
		int xroot = find(subsets, x);
		int yroot = find(subsets, y);

		if (subsets[xroot].rank
			< subsets[yroot].rank)
			subsets[xroot].parent = yroot;
		else if (subsets[xroot].rank
				> subsets[yroot].rank)
			subsets[yroot].parent = xroot;

		else {
			subsets[yroot].parent = xroot;
			subsets[xroot].rank++;
		}
	}

	void KruskalMST()
	{
		Edge result[] = new Edge[V];
	
		int e = 0;
	
		int i = 0;
		for (i = 0; i < V; ++i)
			result[i] = new Edge();

		Arrays.sort(edge);

		subset subsets[] = new subset[V];
		for (i = 0; i < V; ++i)
			subsets[i] = new subset();

		for (int v = 0; v < V; ++v)
		{
			subsets[v].parent = v;
			subsets[v].rank = 0;
		}

		i = 0; 

		while (e < V - 1)
		{
			Edge next_edge = edge[i++];

			int x = find(subsets, next_edge.src);
			int y = find(subsets, next_edge.dest);

			if (x != y) {
				result[e++] = next_edge;
				Union(subsets, x, y);
			}
		}

		System.out.println("Following are the edges in "
						+ "the constructed MST");
		int minimumCost = 0;
		for (i = 0; i < e; ++i)
		{
			System.out.println(result[i].src + " -- "
							+ result[i].dest
							+ " == " + result[i].weight);
			minimumCost += result[i].weight;
		}
		System.out.println("Minimum Cost Of Spanning Tree "
						+ minimumCost);
	}

	public static void main(String[] args)
	{
		int V = 4;
		int E = 5;
		Graph graph = new Graph(V, E);
		graph.edge[0].src = 0;
		graph.edge[0].dest = 1;
		graph.edge[0].weight = 10;
		graph.edge[1].src = 0;
		graph.edge[1].dest = 2;
		graph.edge[1].weight = 6;
		graph.edge[2].src = 0;
		graph.edge[2].dest = 3;
		graph.edge[2].weight = 5;
		graph.edge[3].src = 1;
		graph.edge[3].dest = 3;
		graph.edge[3].weight = 15;
		graph.edge[4].src = 2;
		graph.edge[4].dest = 3;
		graph.edge[4].weight = 4;

		graph.KruskalMST();
	}
}
`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Prim's",
            content: (
              <>
                <Span>
                  <b> Problem Statement :</b>
                </Span>
                <Span>
                  Construct an MST with the help of edge with minimum weight
                  among all adjacent edges which is not picked yet.
                </Span>
                <Span>
                  <b>Note :</b>
                  <br />
                  Prim's is slower tham kruskal. <br />
                  Time Complexity : O(ElogE) or (ElogV)
                </Span>
                <CodeEditor
                  options={{
                    title: "Prim's",
                    codes: {
                      // Javascript:{code:``},
                      Java: {
                        code: `import java.util.*;
                      import java.lang.*;
                      import java.io.*;
                      
                      class Main {
                      private static final int V = 5;
                      int minKey(int key[], Boolean mstSet[])
                      {
                      int min = Integer.MAX_VALUE, min_index = -1;
                      for (int v = 0; v < V; v++)
                      if (mstSet[v] == false && key[v] < min) {
                      min = key[v];
                      min_index = v;
                      }
                      return min_index;
                      }
                      
                      void printMST(int parent[], int graph[][])
                      {
                      System.out.println("Edge \tWeight");
                      for (int i = 1; i < V; i++)
                      System.out.println(parent[i] + " — " + i + "\t" + graph[i][parent[i]]);
                      }
                      
                      void primMST(int graph[][])
                      {
                      int parent[] = new int[V];
                      int key[] = new int[V];
                      Boolean mstSet[] = new Boolean[V];
                      for (int i = 0; i < V; i++) {
                      key[i] = Integer.MAX_VALUE;
                      mstSet[i] = false;
                      }
                      key[0] = 0;
                      parent[0] = -1;
                      for (int count = 0;count < V - 1;count++){
                      int u = minKey(key, mstSet);
                      mstSet[u] = true;
                      for (int v = 0; v < V; v++)
                      if (graph[u][v] != 0 && mstSet[v] == false && graph[u][v] < key[v]) {
                      parent[v] = u;
                      key[v] = graph[u][v];
                      }
                      
                      }
                      printMST(parent, graph);
                      }
                      public static void main(String[] args)
                      {
                      Main t = new Main();
                      int graph[][] = new int[][] { { 0, 2, 0, 6, 0 },
                      { 2, 0, 3, 8, 5 },
                      { 0, 3, 0, 0, 7 },
                      { 6, 8, 0, 0, 9 },
                      { 0, 5, 7, 9, 0 } };
                      t.primMST(graph);
                      }
                      }
                      `,
                      },
                      Python: {
                        code: `import sys 

class Graph():

  def __init__(self, vertices):
    self.V = vertices
    self.graph = [[0 for column in range(vertices)]
          for row in range(vertices)]

  def printMST(self, parent):
    print("Edge \tWeight")
    for i in range(1, self.V):
      print(parent[i], "-", i, "\t", self.graph[i][ parent[i] ])

  def minKey(self, key, mstSet):

    min = sys.maxint

    for v in range(self.V):
      if key[v] < min and mstSet[v] == False:
        min = key[v]
        min_index = v

    return min_index

  def primMST(self):
    key = [sys.maxint] * self.V
    parent = [None] * self.V 
    key[0] = 0
    mstSet = [False] * self.V

    parent[0] = -1 

    for cout in range(self.V):

      u = self.minKey(key, mstSet)
      mstSet[u] = True
      for v in range(self.V):
        if self.graph[u][v] > 0 and mstSet[v] == False and key[v] > self.graph[u][v]:
            key[v] = self.graph[u][v]
            parent[v] = u

    self.printMST(parent)

g = Graph(5)
g.graph = [ [0, 2, 0, 6, 0],
      [2, 0, 3, 8, 5],
      [0, 3, 0, 0, 7],
      [6, 8, 0, 0, 9],
      [0, 5, 7, 9, 0]]

g.primMST()`,
                      },
                      "C++": {
                        code: `#include <bits/stdc++.h>
                      using namespace std;
                      
                      #define V 5
                      
                      int minKey(int key[], bool mstSet[])
                      {
                        int min = INT_MAX, min_index;
                      
                        for (int v = 0; v < V; v++)
                          if (mstSet[v] == false && key[v] < min)
                            min = key[v], min_index = v;
                      
                        return min_index;
                      }
                      
                      void printMST(int parent[], int graph[V][V])
                      {
                        cout<<"Edge \tWeight\n";
                        for (int i = 1; i < V; i++)
                          cout<<parent[i]<<" - "<<i<<" \t"<<graph[i][parent[i]]<<" \n";
                      }
                      
                      
                      void primMST(int graph[V][V])
                      {
                        int parent[V];
                        
                        int key[V];
                        
                        bool mstSet[V];
                      
                        for (int i = 0; i < V; i++)
                          key[i] = INT_MAX, mstSet[i] = false;
                        key[0] = 0;
                        parent[0] = -1;
                      
                        for (int count = 0; count < V - 1; count++)
                        {
                          int u = minKey(key, mstSet);
                      
                          mstSet[u] = true;
                      
                          for (int v = 0; v < V; v++)
                      
                            if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v])
                              parent[v] = u, key[v] = graph[u][v];
                        }
                      
                        printMST(parent, graph);
                      }
                      
                      int main()
                      {
                        int graph[V][V] = { { 0, 2, 0, 6, 0 },
                                  { 2, 0, 3, 8, 5 },
                                  { 0, 3, 0, 0, 7 },
                                  { 6, 8, 0, 0, 9 },
                                  { 0, 5, 7, 9, 0 } };
                      
                        primMST(graph);
                      
                        return 0;
                      }
                      `,
                      },
                      Kotlin: {
                        code: `import java.util.*
                      import java.lang.*
                      import java.io.*
                      
                      internal class MST {
                      
                          fun minKey(key: IntArray, mstSet: Array<Boolean>): Int {
                              var min: Int = Integer.MAX_VALUE
                              var min_index = -1
                              for (v in 0 until V) if (mstSet[v] == false && key[v] < min) {
                                  min = key[v]
                                  min_index = v
                              }
                              return min_index
                          }
                      
                          fun printMST(parent: IntArray, graph: Array<IntArray>) {
                              System.out.println("Edge \tWeight")
                              for (i in 1 until V) System.out.println(parent[i].toString() + " - " + i + "\t" + graph[i][parent[i]])
                          }
                          
                          fun primMST(graph: Array<IntArray>) {
                              val parent = IntArray(V)
                      
                              val key = IntArray(V)
                      
                              val mstSet: Array<Boolean> = arrayOfNulls(V)
                      
                              for (i in 0 until V) {
                                  key[i] = Integer.MAX_VALUE
                                  mstSet[i] = false
                              }
                      
                              key[0] = 0 
                              parent[0] = -1 
                      
                              for (count in 0 until V - 1) {
                                  val u = minKey(key, mstSet)
                      
                                  mstSet[u] = true
                      
                                  for (v in 0 until V)  
                                      if (graph[u][v] != 0 && mstSet[v] == false && graph[u][v] < key[v]) {
                                          parent[v] = u
                                          key[v] = graph[u][v]
                                      }
                              }
                      
                              printMST(parent, graph)
                          }
                      
                          companion object {
                              private const val V = 5
                              fun main(args: Array<String?>?) {
                                  val t = MST()
                                  val graph = arrayOf(
                                      intArrayOf(0, 2, 0, 6, 0),
                                      intArrayOf(2, 0, 3, 8, 5),
                                      intArrayOf(0, 3, 0, 0, 7),
                                      intArrayOf(6, 8, 0, 0, 9),
                                      intArrayOf(0, 5, 7, 9, 0)
                                  )
                      
                                  t.primMST(graph)
                              }
                          }
                      }`,
                      },
                    },
                    output: `Edge    Weight
                    0 — 1   2
                    1 — 2   3
                    0 — 3   6
                    1 — 4   5`,
                  }}
                />
              </>
            ),
          },
          {
            title: "Dijkstra's",
            content: (
              <>
                <Span>
                  <b>Problem Statement:</b>
                </Span>
                <Span>
                  Dijkstra's algorithm is very similar to prim's algorithm. Like
                  Prim's MST, we generate a SPT (shortest path tree) with a
                  given source as a root. We maintain two sets, one set contains
                  vertices included in the shortest-path tree, other set
                  includes vertices not yet included in the shortest-path tree.
                  At every step of the algorithm, we find a vertex that is in
                  the other set (set of not yet included) and has a minimum
                  distance from the source.
                </Span>
                <CodeEditor
                  options={{
                    title: "Dijkstra's",
                    codes: {
                      Javascript: {
                        code: `function minDistance(dist,sptSet)
                        {
                          
                            let min = Number.MAX_VALUE;
                          let min_index = -1;
                          
                          for(let v = 0; v < V; v++)
                          {
                            if (sptSet[v] == false && dist[v] <= min)
                            {
                              min = dist[v];
                              min_index = v;
                            }
                          }
                          return min_index;
                        }
                        
                        function printSolution(dist)
                        {
                          document.write("Vertex \t\t Distance from Source<br>");
                          for(let i = 0; i < V; i++)
                          {
                            document.write(i + " \t\t " +
                                dist[i] + "<br>");
                          }
                        }
                        
                        function dijkstra(graph, src)
                        {
                          let dist = new Array(V);
                          let sptSet = new Array(V);
                          
                          for(let i = 0; i < V; i++)
                          {
                            dist[i] = Number.MAX_VALUE;
                            sptSet[i] = false;
                          }
                          
                          dist[src] = 0;
                          
                            for(let count = 0; count < V - 1; count++)
                          {
                            
                            let u = minDistance(dist, sptSet);
                            
                            sptSet[u] = true;
                            
                            for(let v = 0; v < V; v++)
                            {
                              
                              if (!sptSet[v] && graph[u][v] != 0 &&
                                dist[u] != Number.MAX_VALUE &&
                                dist[u] + graph[u][v] < dist[v])
                              {
                                dist[v] = dist[u] + graph[u][v];
                              }
                            }
                          }
                            printSolution(dist);
                        }
                        
                        let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
                              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
                              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
                              [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
                              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
                              [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
                              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
                              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
                              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]
                        dijkstra(graph, 0);
                        `,
                      },
                      Java: {
                        code: `import java.util.*;
                        import java.lang.*;
                        import java.io.*;
                        
                        class Main {
                        static final int V = 9;
                        int minDistance(int dist[], Boolean sptSet[])
                        {
                        int min = Integer.MAX_VALUE, min_index = -1;
                        for (int v = 0; v < V; v++)
                        if (sptSet[v] == false && dist[v] <= min) {
                        min = dist[v];
                        min_index = v;
                        }
                        return min_index;
                        }
                        void printSolution(int dist[])
                        {
                        System.out.println("Vertex \t\t Distance from Source");
                        for (int i = 0; i < V; i++)
                        System.out.println(i + " \t\t " + dist[i]);
                        }
                        void dijkstra(int graph[][], int src)
                        {
                        int dist[] = new int[V];
                        Boolean sptSet[] = new Boolean[V];
                        for (int i = 0; i < V; i++) {
                        dist[i] = Integer.MAX_VALUE;
                        sptSet[i] = false;
                        }
                        dist[src] = 0;
                        for (int count = 0; count < V - 1; count++) {
                        int u = minDistance(dist, sptSet);
                        sptSet[u] = true;
                        for (int v = 0; v < V; v++)
                        if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v])
                        dist[v] = dist[u] + graph[u][v];
                        }
                        printSolution(dist);
                        }
                        public static void main(String[] args)
                        {
                        int graph[][] = new int[][] { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
                        { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
                        { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
                        { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
                        { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
                        { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
                        { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
                        { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
                        { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
                        Main t = new Main();
                        t.dijkstra(graph, 0);
                        }
                        }`,
                      },
                      Python: {
                        code: `import sys

class Graph():

  def __init__(self, vertices):
    self.V = vertices
    self.graph = [[0 for column in range(vertices)]
          for row in range(vertices)]

  def printSolution(self, dist):
    print("Vertex \tDistance from Source")
    for node in range(self.V):
      print(node+ "\t"+ dist[node])

  def minDistance(self, dist, sptSet):

    min = sys.maxint

    for v in range(self.V):
      if dist[v] < min and sptSet[v] == False:
        min = dist[v]
        min_index = v

    return min_index

  def dijkstra(self, src):

    dist = [sys.maxint] * self.V
    dist[src] = 0
    sptSet = [False] * self.V

    for cout in range(self.V):
      u = self.minDistance(dist, sptSet)
      sptSet[u] = True

      for v in range(self.V):
        if self.graph[u][v] > 0 and sptSet[v] == False and \
        dist[v] > dist[u] + self.graph[u][v]:
            dist[v] = dist[u] + self.graph[u][v]

    self.printSolution(dist)

g = Graph(9)
g.graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
    ]

g.dijkstra(0)`,
                      },
                      "C++": {
                        code: `#include <iostream>
                          using namespace std;
                          #include <limits.h>
                          #define V 9
                          
                          int minDistance(int dist[], bool sptSet[])
                          {
                            int min = INT_MAX, min_index;
                          
                            for (int v = 0; v < V; v++)
                              if (sptSet[v] == false && dist[v] <= min)
                                min = dist[v], min_index = v;
                          
                            return min_index;
                          }
                          
                          void printSolution(int dist[])
                          {
                            cout <<"Vertex \t Distance from Source" << endl;
                            for (int i = 0; i < V; i++)
                              cout << i << " \t\t"<<dist[i]<< endl;
                          }
                          
                          void dijkstra(int graph[V][V], int src)
                          {
                            int dist[V];
                          
                            bool sptSet[V]; 
                            for (int i = 0; i < V; i++)
                              dist[i] = INT_MAX, sptSet[i] = false;
                          
                            dist[src] = 0;
                            for (int count = 0; count < V - 1; count++) {
                              int u = minDistance(dist, sptSet);
                          
                              sptSet[u] = true;
                          
                              for (int v = 0; v < V; v++)
                          
                                if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
                                  && dist[u] + graph[u][v] < dist[v])
                                  dist[v] = dist[u] + graph[u][v];
                            }
                          
                            printSolution(dist);
                          }
                          
                          int main()
                          {
                          
                            int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
                                      { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
                                      { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
                                      { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
                                      { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
                                      { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
                                      { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
                                      { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
                                      { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
                          
                            dijkstra(graph, 0);
                          
                            return 0;
                          }`,
                      },
                      Kotlin: {
                        code: `import java.util.*
                          import java.lang.*
                          import java.io.*
                          
                          internal class ShortestPath {
                              fun minDistance(dist: IntArray, sptSet: Array<Boolean>): Int {
                                  var min: Int = Integer.MAX_VALUE
                                  var min_index = -1
                                  for (v in 0 until V) if (sptSet[v] == false && dist[v] <= min) {
                                      min = dist[v]
                                      min_index = v
                                  }
                                  return min_index
                              }
                          
                              fun printSolution(dist: IntArray) {
                                  System.out.println("Vertex \t\t Distance from Source")
                                  for (i in 0 until V) System.out.println(i.toString() + " \t\t " + dist[i])
                              }
                          
                              fun dijkstra(graph: Array<IntArray>, src: Int) {
                                  val dist = IntArray(V)
                                  val sptSet: Array<Boolean> = arrayOfNulls(V)
                                  for (i in 0 until V) {
                                      dist[i] = Integer.MAX_VALUE
                                      sptSet[i] = false
                                  }
                                  dist[src] = 0
                                  for (count in 0 until V - 1) {
                                      val u = minDistance(dist, sptSet)
                                      sptSet[u] = true
                                      for (v in 0 until V) if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) dist[v] =
                                          dist[u] + graph[u][v]
                                  }
                                  printSolution(dist)
                              }
                          
                              companion object {
                                  const val V = 9
                                  fun main(args: Array<String?>?) {
                                      val graph = arrayOf(
                                          intArrayOf(0, 4, 0, 0, 0, 0, 0, 8, 0),
                                          intArrayOf(4, 0, 8, 0, 0, 0, 0, 11, 0),
                                          intArrayOf(0, 8, 0, 7, 0, 4, 0, 0, 2),
                                          intArrayOf(0, 0, 7, 0, 9, 14, 0, 0, 0),
                                          intArrayOf(0, 0, 0, 9, 0, 10, 0, 0, 0),
                                          intArrayOf(0, 0, 4, 14, 10, 0, 2, 0, 0),
                                          intArrayOf(0, 0, 0, 0, 0, 2, 0, 1, 6),
                                          intArrayOf(8, 11, 0, 0, 0, 0, 1, 0, 7),
                                          intArrayOf(0, 0, 2, 0, 0, 0, 6, 7, 0)
                                      )
                                      val t = ShortestPath()
                                      t.dijkstra(graph, 0)
                                  }
                              }
                          }`,
                      },
                    },
                    output: `Vertex       Distance from Source
                    0        0
                    1        4
                    2        12
                    3        19
                    4        21
                    5        11
                    6        9
                    7        8
                    8        14`,
                  }}
                />
              </>
            ),
          },
          {
            title: "Dial's",
            content: (
              <>
                <Span>
                  Many a times the range of weights on edges in is in small
                  range (i.e. all edge weight can be mapped to 0, 1, 2.. w where
                  w is a small number).
                </Span>
                <Span>
                  In that case, Dijkstra's algorithm can be modified by using
                  different data structure, buckets, which is called dial
                  implementation of dijkstra's algorithm. time complexity is O(E
                  + WV) where W is maximum weight on any edge of graph, so we
                  can see that, if W is small then this implementation runs much
                  faster than traditional algorithm. Following are important
                  observations. Maximum distance between any two node can be at
                  max w(V — 1) (w is maximum edge weight and we can have at max
                  V-1 edges between two vertices). In Dijkstra algorithm,
                  distances are finalized in non-decreasing, i.e., distance of
                  the closer (to given source) vertices is finalized before the
                  distant vertices.
                </Span>
              </>
            ),
          },
          {
            title: "Minimum Number Of Coins",
            content: (
              <>
                <Span>
                  <b>Problem Statemnt</b>
                </Span>
                <Span>
                  Calculate the minimum number of coins required , whose
                  summation will be equal to the given input with the help of
                  sorted array provided.
                </Span>
                <Span>
                  <b> Example</b>
                </Span>
                <p>
                  [1,2,5,10,20,50,100,500,1000]
                  <br />
                  Input Value: 70
                  <br />
                  Output: 2<br />
                  (50 + 20)
                  <br />
                  Input value: 121
                  <br />
                  Output: 3<br />
                  (100 + 20 + 1)
                </p>
                <CodeEditor
                  options={{
                    title: "Minimum Number Of Coins",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `let deno=[1, 2, 5, 10, 20,
                          50, 100, 500, 1000];
                      let n = deno.length;
                       
                      function findMin(V)
                      {
                              let ans = [];
                        
                              for (let i = n - 1; i >= 0; i--)
                              {
                                  while (V >= deno[i])
                                  {
                                      V -= deno[i];
                                      ans.push(deno[i]);
                                  }
                              }
                        
                              for (let i = 0; i < ans.length; i++)
                              {
                                  console.log(
                                      " " + ans[i]);
                              }
                      }
                       
                      n = 93;
                      console.log(
                      "Following is minimal number "
                      +"of change for " + n + ": ");
                      findMin(n);`,
                        output: `Following is minimal number of change for 93: 
                        50
                        20
                        20
                        2
                        1`,
                      },
                      Java: {
                        code: `
                       
import java.util.Vector;

class Main
{

	static int deno[] = {1, 2, 5, 10, 20,
	50, 100, 500, 1000};
	static int n = deno.length;

	static void findMin(int V)
	{
		Vector<Integer> ans = new Vector<>();

		for (int i = n - 1; i >= 0; i--)
		{
			while (V >= deno[i])
			{
				V -= deno[i];
				ans.add(deno[i]);
			}
		}

		for (int i = 0; i < ans.size(); i++)
		{
			System.out.print(
				" " + ans.elementAt(i));
		}
	}
	public static void main(String[] args)
	{
		int n = 93;
		System.out.print(
			"Following is minimal number "
			+"of change for " + n + ": ");
		findMin(n);
	}
}
                        `,
                        output: `Following is minimal number of change for 93:  50 20 20 2 1`,
                      },
                      Python: {
                        code: `def findMin(V):
  deno = [1, 2, 5, 10, 20, 50,
      100, 500, 1000]
  n = len(deno)
  ans = []

  i = n - 1
  while(i >= 0):
    while (V >= deno[i]):
      V -= deno[i]
      ans.append(deno[i])

    i -= 1

  for i in range(len(ans)):
    print(ans[i], end = " ")

if __name__ == '__main__':
  n = 93
  print("Following is minimal number",
    "of change for", n, ": ", end = "")
  findMin(n)
                      `,
                        output: `Following is minimal number of change for 93 : 50 20 20 2 1`,
                      },
                      "C++": {
                        code: `#include <bits/stdc++.h>
                        using namespace std;
                         
                        int deno[] = { 1, 2, 5, 10, 20,
                                       50, 100, 500, 1000 };
                        int n = sizeof(deno) / sizeof(deno[0]);
                         
                        void findMin(int V)
                        {
                            sort(deno, deno + n);
                         
                            vector<int> ans;
                         
                            for (int i = n - 1; i >= 0; i--) {
                                 while (V >= deno[i]) {
                                    V -= deno[i];
                                    ans.push_back(deno[i]);
                                }
                            }
                         
                            for (int i = 0; i < ans.size(); i++)
                                cout << ans[i] << " ";
                        }
                         
                        int main()
                        {
                            int n = 93;
                            cout << "Following is minimal"
                                 << " number of change for " << n
                                 << ": ";
                            findMin(n);
                            return 0;
                        }`,
                        output: `Following is minimal number of change for 93: 50 20 20 2 1`,
                      },
                      Kotlin: {
                        code: ``,
                        output: `Following is minimal number of change for 93:  50 20 20 2 1`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Maximum Equal Sum Possible With Three Stacks",
            content: (
              <>
                <Span>
                  <b>Problem Statement:</b>
                </Span>
                <Span>
                  Given three stacks of the positive numbers, the task is to
                  find the possible equal maximum sum of the stacks with the
                  removal of top elements allowed.
                </Span>
                <Span>
                  <b>Greedy Approach</b>
                </Span>
                <Span>
                  1. Find the sum of all elements of in individual stacks.
                  <br />
                  2. If the sum of all three stacks is the same, then this is
                  the maximum sum. <br />
                  3. Else remove the top element of the stack having the maximum
                  sum among three of stacks. Repeat step 1 and step 2.
                </Span>
                <Span>
                  <b>Example</b>
                </Span>
                <p>
                  i/p :
                  <br />
                  stack1 [2,3]
                  <br />
                  stack 2 [4,10]
                  <br />
                  stack 3 [1,9]
                  <br />
                  o/p : 0
                </p>
                <CodeEditor
                  options={{
                    title: "Maximum Equal Sum Possible With Three Stacks",
                    output: null,
                    codes: {
                      Javascript: {
                        code: `function maxSum(stack1, stack2,
                          stack3, n1, n2, n3)
                      {
                      let sum1 = 0, sum2 = 0, sum3 = 0;
                      
                      for(let i = 0; i < n1; i++)
                      sum1 += stack1[i];
                      
                      for(let i = 0; i < n2; i++)
                      sum2 += stack2[i];
                      
                      for(let i = 0; i < n3; i++)
                      sum3 += stack3[i];
                      
                      let top1 = 0, top2 = 0, top3 = 0;
                      let ans = 0;
                      
                      while (true)
                      {
                      if (top1 == n1 || top2 == n2 ||
                      top3 == n3)
                      return 0;
                       
                      if (sum1 == sum2 && sum2 == sum3)
                      return sum1;
                      
                      if (sum1 >= sum2 && sum1 >= sum3)
                      sum1 -= stack1[top1++];
                      else if (sum2 >= sum1 && sum2 >= sum3)
                      sum2 -= stack2[top2++];
                      else if (sum3 >= sum2 && sum3 >= sum1)
                      sum3 -= stack3[top3++];
                      }
                      }
                      
                      let stack1 = [ 3, 2, 1, 1, 1 ];
                      let stack2 = [ 4, 3, 2 ];
                      let stack3 = [ 1, 1, 4, 1 ];
                      
                      let n1 = stack1.length;
                      let n2 = stack2.length;
                      let n3 = stack3.length;
                      
                      console.log(maxSum(stack1, stack2,
                                stack3, n1, n2, n3));`,
                        output: `5`,
                      },
                      Java: {
                        code: `class Main {
	
                          public static int maxSum(int stack1[], int stack2[],
                                      int stack3[], int n1, int n2,
                                              int n3)
                          {
                          int sum1 = 0, sum2 = 0, sum3 = 0;
                          
                          for (int i=0; i < n1; i++)
                            sum1 += stack1[i];
                          
                          for (int i=0; i < n2; i++)
                            sum2 += stack2[i];
                          
                          for (int i=0; i < n3; i++)
                            sum3 += stack3[i];
                          
                          int top1 =0, top2 = 0, top3 = 0;
                          int ans = 0;
                          while (true)
                          {
                            if (top1 == n1 || top2 == n2 || top3 == n3)
                              return 0;
                          
                            if (sum1 == sum2 && sum2 == sum3)
                              return sum1;
                            
                            if (sum1 >= sum2 && sum1 >= sum3)
                              sum1 -= stack1[top1++];
                            else if (sum2 >= sum1 && sum2 >= sum3)
                              sum2 -= stack2[top2++];
                            else if (sum3 >= sum2 && sum3 >= sum1)
                              sum3 -= stack3[top3++];
                          }
                          }
                          
                          public static void main(String[] args)
                          {
                            int stack1[] = { 3, 2, 1, 1, 1 };
                            int stack2[] = { 4, 3, 2 };
                            int stack3[] = { 1, 1, 4, 1 };
                            
                            int n1 = stack1.length;
                            int n2 = stack2.length;
                            int n3 = stack3.length;
                            
                            System.out.println(maxSum(stack1, stack2,
                                      stack3, n1, n2, n3));
                          }
                        }`,
                        output: `5`,
                      },
                      Python: {
                        code: `def maxSum(stack1, stack2, stack3, n1, n2, n3):
          sum1, sum2, sum3 = 0, 0, 0
        
          for i in range(n1):
            sum1 += stack1[i]
        
          for i in range(n2):
            sum2 += stack2[i]
        
          for i in range(n3):
            sum3 += stack3[i]
        
          top1, top2, top3 = 0, 0, 0
          ans = 0
          while (1):
            if (top1 == n1 or top2 == n2 or top3 == n3):
              return 0
        
            if (sum1 == sum2 and sum2 == sum3):
              return sum1
          
            if (sum1 >= sum2 and sum1 >= sum3):
              sum1 -= stack1[top1]
              top1=top1+1
            elif (sum2 >= sum1 and sum2 >= sum3):
              sum2 -= stack2[top2]
              top2=top2+1
            elif (sum3 >= sum2 and sum3 >= sum1):
              sum3 -= stack3[top3]
              top3=top3+1
        
        stack1 = [ 3, 2, 1, 1, 1 ]
        stack2 = [ 4, 3, 2 ]
        stack3 = [ 1, 1, 4, 1 ]
        
        n1 = len(stack1)
        n2 = len(stack2)
        n3 = len(stack3)
        
        print(maxSum(stack1, stack2, stack3, n1, n2, n3))`,
                        output: `5`,
                      },
                      "C++": {
                        code: `#include <bits/stdc++.h>
                        using namespace std;
                        
                        int maxSum(int stack1[], int stack2[], int stack3[], int n1,
                            int n2, int n3)
                        {
                          int sum1 = 0, sum2 = 0, sum3 = 0;
                        
                          for (int i = 0; i < n1; i++)
                            sum1 += stack1[i];
                        
                          for (int i = 0; i < n2; i++)
                            sum2 += stack2[i];
                        
                          for (int i = 0; i < n3; i++)
                            sum3 += stack3[i];
                        
                          int top1 = 0, top2 = 0, top3 = 0;
                          while (1) {
                            if (top1 == n1 || top2 == n2 || top3 == n3)
                              return 0;
                        
                            if (sum1 == sum2 && sum2 == sum3)
                              return sum1;
                        
                            if (sum1 >= sum2 && sum1 >= sum3)
                              sum1 -= stack1[top1++];
                            else if (sum2 >= sum1 && sum2 >= sum3)
                              sum2 -= stack2[top2++];
                            else if (sum3 >= sum2 && sum3 >= sum1)
                              sum3 -= stack3[top3++];
                          }
                        }
                        
                        int main()
                        {
                          int stack1[] = { 3, 2, 1, 1, 1 };
                          int stack2[] = { 4, 3, 2 };
                          int stack3[] = { 1, 1, 4, 1 };
                        
                          int n1 = sizeof(stack1) / sizeof(stack1[0]);
                          int n2 = sizeof(stack2) / sizeof(stack2[0]);
                          int n3 = sizeof(stack3) / sizeof(stack3[0]);
                        
                          cout << maxSum(stack1, stack2, stack3, n1, n2, n3)
                            << endl;
                          return 0;
                        }
                        `,
                        output: `5`,
                      },
                      Kotlin: {
                        code: `class M {

                          public static int maxSum(int stack1[], int stack2[],
                          int stack3[], int n1, int n2,
                          int n3)
                          {
                              int sum1 = 0, sum2 = 0, sum3 = 0;
                      
                              for (int i=0; i < n1; i++)
                              sum1 += stack1[i];
                      
                              for (int i=0; i < n2; i++)
                              sum2 += stack2[i];
                      
                              for (int i=0; i < n3; i++)
                              sum3 += stack3[i];
                      
                              int top1 =0, top2 = 0, top3 = 0;
                              int ans = 0;
                              while (true)
                              {
                                  if (top1 == n1 || top2 == n2 || top3 == n3)
                                      return 0;
                      
                                  if (sum1 == sum2 && sum2 == sum3)
                                      return sum1;
                      
                                  if (sum1 >= sum2 && sum1 >= sum3)
                                      sum1 -= stack1[top1++];
                                  else if (sum2 >= sum1 && sum2 >= sum3)
                                      sum2 -= stack2[top2++];
                                  else if (sum3 >= sum2 && sum3 >= sum1)
                                      sum3 -= stack3[top3++];
                              }
                          }
                      
                          public static void main(String[] args)
                          {
                              int stack1[] = { 3, 2, 1, 1, 1 };
                              int stack2[] = { 4, 3, 2 };
                              int stack3[] = { 1, 1, 4, 1 };
                      
                              int n1 = stack1.length;
                              int n2 = stack2.length;
                              int n3 = stack3.length;
                      
                              System.out.println(maxSum(stack1, stack2,
                                  stack3, n1, n2, n3));
                          }
                      }`,
                        output: `5`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
        ],
      },
      dp: {
        title: "Dynamic Programming",
        content: (
          <>
            <Span>
              Dynamic Programming is an algorithmic paradigm that solves a given
              complex problem by breaking it into subproblems and stores the
              results of subproblems to avoid computing the same results again.
              Following are the two main properties of a problem that suggests
              that the given problem can be solved using Dynamic programming.
            </Span>
            <Span>
              As compared to recursion, It increases both, it increases the
              space complexity and decreases the time complexity.
            </Span>
            <Span>
              f(n) = f(n-1) + f(n-2), n&gt;= 2 <br /> f(1) = 1 , f(0) = 0 <br />{" "}
              f(n) = [0,1,1,2,3,5,8,13,21]
            </Span>
            <Span>
              <b>Optimal Substructure</b>
            </Span>
            <Span>
              It exists when optimal solution can be constructed from optimal
              solutions of its subproblems. Problems should have recursive
              definition.
            </Span>
            <Span>
              <b>Overlapping Subproblems</b>
            </Span>
            <Span>
              This property exists when solutions of subproblems are needed
              again and again. Like Divide and Conquer, Dynamic Programming
              combines solutions to sub-problems. Dynamic Programming is mainly
              used when solutions of the same subproblems are needed again and
              again. In dynamic programming, computed solutions to subproblems
              are stored in a table so that these don’t have to be recomputed.
              So Dynamic Programming is not useful when there are no common
              (overlapping) subproblems because there is no point storing the
              solutions if they are not needed again.
            </Span>
            <Span>
              It is guaranteed that Dynamic Programming will generate an optimal
              solution as it generally considers all possible cases and then
              choose the best.
            </Span>
            <Span>
              To avoid recomputations we simply recall results from memory
            </Span>
            <Span>
              Time taken for calculating the 40th fibonacci number (102334155):{" "}
              <br />
              1. Recursive : 14s <br />
              2. Memoization : 0.17s <br />
              3. Tabulation: 0.30s
            </Span>
            <Span>Two methods of storing the results in memory:</Span>
            <Span>
              <b>1. Memoization (Top-Down)</b>
            </Span>
            <Span>
              The memoized program for a problem is similar to the recursive
              version ( tracing tree ) with a small modification that it looks
              into a lookup table before computing solutions. We initialize a
              lookup array with all initial values as NIL. Whenever we need the
              solution to a subproblem, we first look into the lookup table. If
              the precomputed value is there then we return that value,
              otherwise, we calculate the value and put the result in the lookup
              table so that it can be reused later.
            </Span>
            <Span>
              <b>2. Tabulation (Bottom-Up)</b>
            </Span>
            <p>
              Built the lookup table in bottom up fashion <br />
              After the table is built, simply return table[n]
            </p>
            <CodeEditor
              options={{
                title: "Dynamic Programming",
                codes: {
                  Javascript: {
                    code: `let MAX = 100
                // using recursion,
                // tc -> O(2^n)
                // sc -> O(n * constant)
                // using dp
                // tc -> O(n) we iterate through the 
                // loop only once
                // sc -> O(n)
                // memoization top-down
                // we compute the solution of the 
                // subproblem if it's not present yet
                // and store that at the look-up table 
                // so that it can be re-used as and when 
                // required
                const lookupMem = Array(MAX).fill(-1)
                const lookupTab = Array(MAX).fill(-1)
                function fibMem(n){
                   if(lookupMem[n]===-1){
                     if(n <=1) lookupMem[n] =n
                     else lookupMem[n] = fibMem(n-1) + fibMem(n-2)
                   } 
                   return lookupMem[n]
                }
                // tabulation bottom-up
                // after the lookup table is built 
                // with the help of previous values
                // we simply return lookup[n]
                function fibTab(n){
                   lookupTab[0] = 0
                   lookupTab[1] = 1
                   for (let i = 2; i <= n; i++)
                   lookupTab[i] = lookupTab[i-1] + lookupTab[i-2];
                   return lookupTab[n]
                }
                const n = 4
                console.log("Memoization")
                console.log(fibMem(n))
                console.log("Max lookupMem length")
                console.log(lookupMem.length)
                console.log("Required lookupMem slice")
                console.log(lookupMem.slice(0,n+1))
                console.log("Tabulation")
                console.log(fibTab(n))
                console.log("Max lookupTab length")
                console.log(lookupTab.length)
                console.log("Required lookupTab slice")
                console.log(lookupTab.slice(0,n+1))
                `,
                    output: `Memoization
                  3
                  Max lookupMem length
                  100
                  Required lookupMem slice
                  [ 0, 1, 1, 2, 3 ]
                  Tabulation
                  3
                  Max lookupTab length
                  100
                  Required lookupTab slice
                  [ 0, 1, 1, 2, 3 ]`,
                  },
                },
              }}
            />
          </>
        ),
        types: [
          {
            title: "0-1 Knapsack",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given a set of weights and values , pick the weights in such a
                  way that their sum will be nearest or equal to the given total
                  weight.
                </Span>
                <Span>
                  <b>Note :</b>
                </Span>
                <p>Time Complexity : O(N*W)</p>
                <CodeEditor
                  options={{
                    title: "0-1 Knapsack",
                    codes: {
                      Javascript: {
                        code: `/*
values = 10 , 15 , 40

lookupTab[1][1] = 10
lookupTab[2][2] = 15
lookupTab[3][3] = 40

elements = 1 , 2 , 3
capacity = 6

Tabulation lookup table[values.length+1][capacity+1] -> 

   0   1   2   3   4   5   6    (index) w

0  0   0   0   0   0   0   0

1  0 [10] 10 [10] 10  10  10

2  0  10 [15] 25  25  25  25   wt[1] < 3, 1 < 3 , Math.max(10,15 + lookupTab[1][3-2])

3  0  10  15  40  50  55 [65] -> Answer       
|
(index) i

Answer: 65

TC O(N*W)
SC O(N*W)

*/
                      
                      function knapSack(val, wt, W) {
                        const n = val.length;
                        const lookupTab = Array.from(Array(n + 1), () => Array(W + 1).fill(-1));
                        // Tab stands for Tabulation
                        for (let i = 0; i <= n; i++) {
                          for (let w = 0; w <= W; w++) {
                            if (i == 0 || w == 0) {
                              lookupTab[i][w] = 0;
                            } else if (wt[i - 1] <= w)
                              lookupTab[i][w] = Math.max(
                                val[i - 1] + lookupTab[i - 1][w - wt[i - 1]], // trick to memorize: i-1 w - wt[i-1]
                                lookupTab[i - 1][w]
                              );
                            else lookupTab[i][w] = lookupTab[i - 1][w];
                          }
                        }
                        console.log("lookup table:")
                        console.log(lookupTab)
                        return lookupTab[n][W];
                      }
                      
                      const val = [10, 15, 40];
                      const wt = [1, 2, 3];
                      const W = 6;
                      console.log(knapSack(val, wt, W));                      
                      `,
                        output: `lookup table:
                        [
                          [
                            0, 0, 0, 0,
                            0, 0, 0
                          ],
                          [
                             0, 10, 10, 10,
                            10, 10, 10
                          ],
                          [
                             0, 10, 15, 25,
                            25, 25, 25
                          ],
                          [
                             0, 10, 15, 40,
                            50, 55, 65
                          ]
                        ]
                        65`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Binomial Coefficients",
            content: (
              <>
                <Span>
                  <b>Problem Statement:</b>
                </Span>
                <Span>Obtain C(n,r) using dp.</Span>
                <p>
                  Formula <br />
                  (1+x)^n <br />
                  C(n,k) = C(n-1,k-1) + C(n-1,k) <br />
                  C(n,0) = C(n,n) = 1
                </p>
                <CodeEditor
                  options={{
                    title: "Binomial Coefficients",
                    codes: {
                      Javascript: {
                        code: `// TC : O(n*k)
                        // SC : O(n*k) 
                        
                        // -1 -> null
                        // [
                        //   [ 1, -1, -1 ],
                        //   [ 1, 1, -1 ],
                        //   [ *1, *2, 1 ], 1+1 =2
                        //   [ 1, *3, 3 ], 1+2 =3 2+1 =3
                        //   [ 1, 4, 6 ], 1+3 =4 3+3 =6
                        //   [ 1, 5, 10 ] 1+ 4 = 5 4+6 =10
                        // ]
                        
                        function bc_dp(n, k) {
                            const lookupTab = Array.from(Array(n + 1), () => Array(k + 1).fill(-1))
                            // fill(null)
                            for (let i = 0; i <= n; i++) {
                                for (let j = 0; j <= Math.min(i, k); j++) {
                                    if (j == 0 || j == i)
                                        lookupTab[i][j] = 1
                                    else
                                        lookupTab[i][j] = lookupTab[i - 1][j - 1] + lookupTab[i - 1][j]
                                }
                            }
                            console.log(lookupTab)
                            return lookupTab[n][k]
                        }
                        
                        // TC : O(n*k)
                        // SC : O(n) 
                        
                        
                        // pascal's triangle
                        // c[2] represents C[i][2]
                        
                        function space_optimized_bc_dp(n, k) {
                            const lookupTab = Array(k + 1).fill(0)
                            lookupTab[0] = 1
                            for (let i = 0; i <= n; i++) {
                                for (let j = Math.min(i, k); j > 0; j--) {
                                    lookupTab[j] += lookupTab[j - 1]
                                }
                            }
                            console.log(lookupTab)
                            return lookupTab[k]
                        }
                        
                        const n = 5,
                            k = 2;
                        console.log(bc_dp(n, k))
                        console.log("###############")
                        console.log(space_optimized_bc_dp(n, k))`,
                        output: `[
                          [ 1, -1, -1 ],
                          [ 1, 1, -1 ],
                          [ 1, 2, 1 ],
                          [ 1, 3, 3 ],
                          [ 1, 4, 6 ],
                          [ 1, 5, 10 ]
                        ]
                        10
                        ###############
                        [ 1, 5, 10 ]
                        10`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Travelling Salesman",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given a set of cities and distance between every pair of
                  cities, the problem is to find the shortest possible route
                  that visits every city exactly once and returns to the
                  starting point.
                </Span>
                <Img left src={TSPDPImg} />
                <Span>
                  Note the difference between Hamiltonian Cycle and TSP. The
                  Hamiltonian cycle problem is to find if there exists a tour
                  that visits every city exactly once. Here we know that
                  Hamiltonian Tour exists (because the graph is complete) and in
                  fact, many such tours exist, the problem is to find a minimum
                  weight Hamiltonian Cycle.
                </Span>
                <Span>
                  The problem is a famous NP-hard problem. There is no
                  polynomial-time known solution for this problem.
                </Span>
                <p>
                  In this type of problem, a salesman loves to travel and he
                  should travel all destinations and return back to the arrival
                  point
                </p>
                <CodeEditor
                  options={{
                    title: "Travelling Salesman",
                    codes: {
                      Javascript: {
                        code: `// TSP ->
                        // Minimum weighted hamiltonian
                        // cycle(s)
                        
                        // cycling permutaions
                        // A B C D
                        // B C D A
                        
                        // using brute force 
                        // complexity will be O(n!)
                        // even after selecting the source
                        // complexity will be O(n-1)!
                        
                        
                        
                        class Graph {
                            constructor(noOfVertices) {
                                this.noOfVertices = noOfVertices;
                                this.adjMatrix = Array.from(Array(noOfVertices),()=>Array(noOfVertices).fill(0));
                            }
                        
                            addEdge(u, v, wt) {
                              if ((u >= this.noOfVertices) || (v > this.noOfVertices)) {
                                console.log("Vertex does not exists!");
                                return
                              }
                              if (u == v) {
                                console.log("Same Vertex!");
                                return
                              }
                              this.adjMatrix[u][v] = wt
                              this.adjMatrix[v][u] = wt
                            }
                        
                            print() {
                                console.log(this.adjMatrix)
                            }
                        
                            tsp(){
                              let allVisited = (1 << this.noOfVertices) - 1;
                              // we can make use of boolean array as well
                              //. ( 1 << 4) -1  => 16 -1 = 15
                              // or allVisited = Array(this.noOfVertices)
                              // .fill(false)
                              
                              // mask 1 (0001) represents person is at first 
                              // visits (obviously)
                        
                              // mask 15 (1111) represents person visits all cities 
                        
                              const lookupMem = Array.from(Array(1<<this.noOfVertices),()=> Array(this.noOfVertices).fill(-1))
                              const res = this.tspHelper(1,0,allVisited,lookupMem)
                              console.log("lookup")
                              console.log(lookupMem)
                              return res
                            }
                        
                            // TC -> n^2 * 2^n
                            // Each sub-problem (2^n) will take O (n) time to find a path to 
                            // remaining (n-1) cities.
                            // SC -> n2^n
                        
                            tspHelper(mask,pos,allVisited,dp){
                        
                              if(mask == allVisited){
                               return this.adjMatrix[pos][0]
                              }
                              // dist[pos][0] distance b/w last and first pos
                        
                              if(dp[mask][pos]!=-1)
                              return dp[mask][pos]
                              // avoid overlapping subproblems
                        
                              let ans = Number.MAX_SAFE_INTEGER
                              for(let city=0;city<this.noOfVertices;city++){
                                // check for non visited neighbor
                              if((mask&(1<<city))==0){
                                  let newAns = this.adjMatrix[pos][city] + this.tspHelper((mask|(1<<city)),city,allVisited,dp)
                                  // update city's bit from 0 to 1 for e.g. from 0001 to 0011
                                  ans = Math.min(ans,newAns)   
                                }
                              }
                              return dp[mask][pos] = ans
                        }
                      }
                        
                        const g = new Graph(4)
                        const v = ['A', 'B', 'C', 'D']
                        g.addEdge(0, 1, 20);
                        g.addEdge(0, 2, 42);
                        g.addEdge(0, 3, 25);
                        g.addEdge(1, 2, 30);
                        g.addEdge(1, 3, 34);
                        g.addEdge(3, 2, 10);
                        g.print();
                        console.log(g.tsp())
                        `,
                        output: `[
                          [ 0, 20, 42, 25 ],
                          [ 20, 0, 30, 34 ],
                          [ 42, 30, 0, 10 ],
                          [ 25, 34, 10, 0 ]
                        ]
                        lookup
                        [
                          [ -1, -1, -1, -1 ], [ 85, -1, -1, -1 ],
                          [ -1, -1, -1, -1 ], [ -1, 65, -1, -1 ],
                          [ -1, -1, -1, -1 ], [ -1, -1, 64, -1 ],
                          [ -1, -1, -1, -1 ], [ -1, 59, 35, -1 ],
                          [ -1, -1, -1, -1 ], [ -1, -1, -1, 60 ],
                          [ -1, -1, -1, -1 ], [ -1, 72, -1, 52 ],
                          [ -1, -1, -1, -1 ], [ -1, -1, 50, 54 ],
                          [ -1, -1, -1, -1 ], [ -1, -1, -1, -1 ]
                        ]
                        85`,
                      },
                    },
                  }}
                />
                <p>
                  <b>Practice</b>
                </p>
                <CodeEditor
                  options={{
                    title: "TSP Bitmasking",
                    codes: {
                      Javascript: {
                        code: `function dec2bin(dec){                      
                          return (dec >>> 0).toString(2);
                        }
                        
                        class Graph {
                            constructor(n) {
                                this.n = n;
                                this.g = Array.from(Array(n), () => Array(n).fill(0));
                            }
                        
                            addEdge(u, v, wt) {
                                this.g[u][v] = wt
                                this.g[v][u] = wt
                            }
                        
                            print() {
                                console.log(this.g)
                            }
                        
                        
                            tsp(dp,mask=1, pos=0) {
                              // 1 -> 0001
                        
                                if (mask == ((1<<this.n)-1)) {
                                    return this.g[pos][0]
                                }
                        
                                if (dp[mask][pos] != -1)
                                    return dp[mask][pos]
                        
                                let ans = Number.MAX_SAFE_INTEGER
                                // compute tsp using each vertex
                                for (let i = 0; i < this.n; i++) {
                                    // if not visited
                                    if ((mask & (1 << i)) == 0) {
                                        // mark as visited 
                                        let newAns = this.g[pos][i] + this.tsp(dp,(mask | (1 << i)), i)
                                        ans = Math.min(ans, newAns)
                                    }
                                }
                                return dp[mask][pos] = ans
                            }
                        }
                        
                        const n = 4
                        const g = new Graph(n)
                        const v = ['A', 'B', 'C', 'D']
                        const dp = Array.from(Array(1 << n), () => Array(n).fill(-1))
                        g.addEdge(0, 1, 20);
                        g.addEdge(0, 2, 42);
                        g.addEdge(0, 3, 25);
                        g.addEdge(1, 2, 30);
                        g.addEdge(1, 3, 34);
                        g.addEdge(3, 2, 10);
                        g.print();
                        console.log(g.tsp(dp))`,
                        output: `[
                          [ 0, 20, 42, 25 ],
                          [ 20, 0, 30, 34 ],
                          [ 42, 30, 0, 10 ],
                          [ 25, 34, 10, 0 ]
                        ]
                        85`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Longest Palindromic Substring",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given a string s, return the longest palindromic substring in
                  s.
                </Span>

                <Span>
                  <b>Example 1:</b>
                </Span>

                <Span>
                  Input: s = "babad" <br />
                  Output: "bab" <br />
                  Explanation: "aba" is also a valid answer.
                </Span>

                <Span>
                  <b>Example 2:</b>
                </Span>

                <Span>
                  Input: s = "cbbd" <br />
                  Output: "bb"
                </Span>

                <Span>
                  <b>Constraints:</b>
                </Span>

                <Span>
                  1 &lt;= s.length &lt;= 1000 <br />s consist of only digits and
                  English letters.
                </Span>

                <CodeEditor
                  options={{
                    title: "Q5. Longest Palindromic Substring",
                    output: `bab`,
                    codes: {
                      Javascript: {
                        code: `/**
                          * @param {string} s
                          * @return {string}
                          */
                         
                         var longestPalindrome = function(s) {
                             let n = s.length;
                             let lookupTab = Array.from(Array(n),()=>Array(n).fill(false));
                             let maxLength = 1;
                             for (let i = 0; i < n; ++i)
                               lookupTab[i][i] = true;
                             let start = 0;
                             for (let i = 0; i < n - 1; ++i)
                             {
                               if (s[i] == s[i + 1])
                               {
                                 lookupTab[i][i + 1] = true;
                                 start = i;
                                 maxLength = 2;
                               }
                             }
                             for (let k = 3; k <= n; ++k) {
                               for (let i = 0; i < n - k + 1; ++i)
                               {
                                 let j = i + k - 1;
                                 if (lookupTab[i + 1][j - 1]
                                   && s[i] == s[j]) {
                                   lookupTab[i][j] = true;
                                   if (k > maxLength) {
                                     start = i;
                                     maxLength = k;
                                   }
                                 }
                               }
                             }
                             return s.substring(start, start+maxLength);
                         }
                           
                         console.log(longestPalindrome("babad"));
                         `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "LCS",
            content: (
              <>
                <Span>
                  <b>Longest Common Subsequence Problem Statement:</b>
                </Span>
                <Span>
                  Given two sequences , find the length of longest subsequence
                  present in both of them
                </Span>
                <p>
                  A subsequence is a sequence that appears in the same relative
                  order, but not necessarily contiguous. Sequences = “abcdefg”,
                  “abxdfg”
                </p>
                <CodeEditor
                  options={{
                    title: "LCS",
                    codes: {
                      Javascript: {
                        code: `// A subsequence is a sequence that appears in the same 
                        // relative order, but not necessarily contiguous.
                        
                        // tabulation
                        
                        /*
                           
                        str1 = abcdefg
                        str2 = abxdfg
                            
                               a   b   x   d   f   g
                           0 , 0 , 0 , 0 , 0 , 0 , 0
                        a  0 , 1 , 1 , 1 , 1 , 1 , 1
                        b  0 , 1 , 2 , 2 , 2 , 2 , 2
                        c  0 , 1 , 2 , 2 , 2 , 2 , 2
                        d  0 , 1 , 2 , 2 , 3 , 3 , 3
                        e  0 , 1 , 2 , 2 , 3 , 3 , 3. e !== d, 3 > 2
                        f  0 , 1 , 2 , 2 , 3 , 4 , 4   
                        g  0 , 1 , 2 , 2 , 3 , 4 , 5
                        
                        */
                        
                        const lcs = function(str1,str2){
                          
                        const m = str1.length
                        const n = str2.length
                        
                        const lookupTab = Array.from(Array(m+1),() => Array(n+1).fill(0))
                        
                        for(let i=0;i<=m;i++){
                          for(let j=0;j<=n;j++){
                             if(i===0 || j===0) lookupTab[i][j] = 0
                             else if(str1[i-1]===str2[j-1]) 
                             lookupTab[i][j] = lookupTab[i-1][j-1] + 1
                             else
                             lookupTab[i][j] = Math.max(lookupTab[i-1][j],lookupTab[i][j-1])
                          }
                        }
                        
                        const result = lookupTab[m][n]
                        
                        console.log("[ Lookup Table ]")
                        lookupTab.forEach(x=>{
                          console.log(x.join(" , "))
                        })
                        
                        let subsequence = Array(result).fill(null)
                        let len = result
                        
                        let i=m,j=n;
                        while(i>0 && j>0){
                          if(str1[i-1]==str2[j-1]){
                            subsequence[len-1] = str1[i-1] 
                            i-=1
                            j-=1
                            len-=1
                          }
                          // move in the direction of larger 
                          // element
                          else if(lookupTab[i-1][j]>lookupTab[i][j-1]){
                            i-=1
                          }else{
                            j-=1
                          }
                        }
                        console.log("M : " + str1)
                        console.log("N : " + str2)
                        console.log({subsequence: typeof str1 === 'string'? subsequence.join(""): subsequence})
                        
                        return result
                        }
                        
                        lcs("abcdefg", "abxdfg")
                        console.log("")
                        lcs([1,2,0],[9,8,1,6,2])
                        `,
                        output: `[ Lookup Table ]
                        0 , 0 , 0 , 0 , 0 , 0 , 0
                        0 , 1 , 1 , 1 , 1 , 1 , 1
                        0 , 1 , 2 , 2 , 2 , 2 , 2
                        0 , 1 , 2 , 2 , 2 , 2 , 2
                        0 , 1 , 2 , 2 , 3 , 3 , 3
                        0 , 1 , 2 , 2 , 3 , 3 , 3
                        0 , 1 , 2 , 2 , 3 , 4 , 4
                        0 , 1 , 2 , 2 , 3 , 4 , 5
                        M : abcdefg
                        N : abxdfg
                        { subsequence: 'abdfg' }
                        
                        [ Lookup Table ]
                        0 , 0 , 0 , 0 , 0 , 0
                        0 , 0 , 0 , 1 , 1 , 1
                        0 , 0 , 0 , 1 , 1 , 2
                        0 , 0 , 0 , 1 , 1 , 2
                        M : 1,2,0
                        N : 9,8,1,6,2
                        { subsequence: [ 1, 2 ] }
                        2`,
                      },
                    },
                  }}
                />

                <p>
                  <b>LCS of 0s</b>
                </p>
                <CodeEditor
                  options={{
                    title: "LCS of 0s",
                    codes: {
                      Javascript: {
                        code: `// A subsequence is a sequence that appears in the same 
                      // relative order, but not necessarily contiguous.
                      
                      // tabulation
                      
                      /*
                         
                      str1 = abcdefg
                      str2 = abxdfg
                          
                             a   b   x   d   f   g
                         0 , 0 , 0 , 0 , 0 , 0 , 0
                      a  0 , 1 , 1 , 1 , 1 , 1 , 1
                      b  0 , 1 , 2 , 2 , 2 , 2 , 2
                      c  0 , 1 , 2 , 2 , 2 , 2 , 2
                      d  0 , 1 , 2 , 2 , 3 , 3 , 3
                      e  0 , 1 , 2 , 2 , 3 , 3 , 3. e !== d, 3 > 2
                      f  0 , 1 , 2 , 2 , 3 , 4 , 4   
                      g  0 , 1 , 2 , 2 , 3 , 4 , 5
                      
                      */
                      
                      const lcs = function(str1,str2,val){
                        
                      const m = str1.length
                      const n = str2.length
                      
                      const lookupTab = Array.from(Array(m+1),() => Array(n+1).fill(0))
                      
                      for(let i=0;i<=m;i++){
                        for(let j=0;j<=n;j++){
                           if(i===0 || j===0) lookupTab[i][j] = 0
                           else if(str1[i-1]===str2[j-1] && str2[j-1]===val) 
                           lookupTab[i][j] = lookupTab[i-1][j-1] + 1
                           else
                           lookupTab[i][j] = Math.max(lookupTab[i-1][j],lookupTab[i][j-1])
                        }
                      }
                      
                      const result = lookupTab[m][n]
                      
                      console.log("[ Lookup Table ]")
                      lookupTab.forEach(x=>{
                        console.log(x.join(" , "))
                      })
                      
                      let subsequence = Array(result).fill(null)
                      let len = result
                      
                      let i=m,j=n;
                      while(i>0 && j>0){
                        if(str1[i-1]==str2[j-1] && str2[j-1]===val){
                          subsequence[len-1] = str1[i-1] 
                          i-=1
                          j-=1
                          len-=1
                        }
                        // move in the direction of larger 
                        // element
                        else if(lookupTab[i-1][j]>lookupTab[i][j-1]){
                          i-=1
                        }else{
                          j-=1
                        }
                      }
                      console.log("M : " + str1)
                      console.log("N : " + str2)
                      console.log({subsequence: typeof str1 === 'string'? subsequence.join(""): subsequence})
                      
                      return result
                      }
                      
                      lcs([0,-1,0,0,-1],[0,-1,1,0,-1],0)
                      `,
                        output: `[ Lookup Table ]
                      0 , 0 , 0 , 0 , 0 , 0
                      0 , 1 , 1 , 1 , 1 , 1
                      0 , 1 , 1 , 1 , 1 , 1
                      0 , 1 , 1 , 1 , 2 , 2
                      0 , 1 , 1 , 1 , 2 , 2
                      0 , 1 , 1 , 1 , 2 , 2
                      M : 0,-1,0,0,-1
                      N : 0,-1,1,0,-1
                      { subsequence: [ 0, 0 ] }
                      2`,
                      },
                    },
                  }}
                />
                <p>Print All LCS</p>
                <CodeEditor
                  options={{
                    title: "Print All LCS",
                    codes: {
                      Javascript: {
                        code: `function fillLookUpTable(str1, str2,lookupTab) {
                  const m = str1.length
                  const n = str2.length
                  for (let i = 0; i <= m; i++) {
                      for (let j = 0; j <= n; j++) {
                          if (i === 0 || j === 0) lookupTab[i][j] = 0
                          else if (str1[i - 1] === str2[j - 1])
                              lookupTab[i][j] = lookupTab[i - 1][j - 1] + 1
                          else
                              lookupTab[i][j] = Math.max(lookupTab[i - 1][j], lookupTab[i][j - 1])
                      }
                  }
                  console.log("[ Lookup Table ]")
                  lookupTab.forEach(x => {
                      console.log(x.join(" , "))
                  })
              }
              
              function printAllLcs(str1,str2,m,n,lookupTab){
                if(m==0 || n==0)
                return [""]
                if(str1[m - 1] === str2[n - 1]){
                  let lcs = printAllLcs(str1,str2,m-1,n-1,lookupTab)
                  for(let i in lcs){
                    lcs[i] += str1[m-1]
                  }
                  return lcs
                }
                // start moving in desired direction otherwise
                if(lookupTab[m-1][n] > lookupTab[m][n-1])
                  return printAllLcs(str1,str2,m-1,n,lookupTab)
                else if(lookupTab[m-1][n] < lookupTab[m][n-1])
                  return printAllLcs(str1,str2,m,n-1,lookupTab)
                else {
                let top = printAllLcs(str1, str2, m - 1, n, lookupTab)
                let left = printAllLcs(str1, str2, m, n - 1, lookupTab)
                top = [...top, ...left];
                return top;
                }
              }
              
              const str1 = "ABCBDAB"
              const str2 = "BDCABA"
              const m = str1.length
              const n = str2.length
              const lookupTab = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
              fillLookUpTable(str1,str2,lookupTab)
              const res = printAllLcs(str1,str2,str1.length,str2.length,lookupTab)
              console.log("M : " + str1)
              console.log("N : " + str2)
              console.log([...new Set(res)])`,
                        output: `[ Lookup Table ]
                0 , 0 , 0 , 0 , 0 , 0 , 0
                0 , 0 , 0 , 0 , 1 , 1 , 1
                0 , 1 , 1 , 1 , 1 , 2 , 2
                0 , 1 , 1 , 2 , 2 , 2 , 2
                0 , 1 , 1 , 2 , 2 , 3 , 3
                0 , 1 , 2 , 2 , 2 , 3 , 3
                0 , 1 , 2 , 2 , 3 , 3 , 4
                0 , 1 , 2 , 2 , 3 , 4 , 4
                M : ABCBDAB
                N : BDCABA
                [ 'BCBA', 'BCAB', 'BDAB' ]`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "LIS",
            content: (
              <>
                <Span>
                  <b>Longest Increasing Subsequence Problem Statement:</b>
                </Span>
                <p>
                  Find the length of the longest subsequence of a given sequence
                  such that all elements of the subsequence are sorted in
                  increasing order
                </p>
                <CodeEditor
                  options={{
                    title: "LIS",
                    codes: {
                      Javascript: {
                        code: `/*
                      arr[] 10 22 9 33 21 50 41 60
                      lis    1  2 1  3  2  4  4  5  
                      */
                      
                      function LIS(arr){
                      
                      const n = arr.length
                      // 8
                      
                      let lookupTab = Array(n).fill(1)
                      
                      for (i = 1; i < n; i++)
                      for (j = 0; j < i; j++)
                      if (arr[i] > arr[j] && lookupTab[i] < lookupTab[j] + 1)
                      lookupTab[i] = lookupTab[j] + 1
                      
                      const max = Math.max(...lookupTab)
                      
                      let index =[]
                      let tmp = max
                      
                      for(let i=n-1;i>=0;i--){
                      if(lookupTab[i]==tmp){
                      index.push(i)
                      tmp--
                      }
                      }
                      index.reverse()
                      index = index.map(x=>arr[x])
                      console.log(index)
                      
                      return max
                      }
                      
                      LIS([10, 22, 9, 33, 21, 50, 41, 60])`,
                        output: `[ 10, 22, 33, 41, 60 ]
                      5`,
                      },
                    },
                  }}
                />
                <p>
                  <b>Print All LIS</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Print All LIS",
                    codes: {
                      Javascript: {
                        code: `// W.I.P.`,
                        output: ``,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "LPS",
            content: (
              <>
                <Span>
                  <b>Longest Palindromic Subsequence Problem Statement</b>
                </Span>
                <p>
                  Given a sequence, find the length of the longest palindromic
                  subsequence on it
                </p>
                <CodeEditor
                  options={{
                    title: "LPS",
                    codes: {
                      Javascript: {
                        code: `function lps(subsequence){
                        const len = subsequence.length
                        // 9
                        let lookupTab = Array.from(Array(len), () => Array(len).fill(1))
                        
                        for (let cl=2; cl<=len; cl++){
                          for (let i=0; i<len-cl+1; i++)
                          {
                            let j = i+cl-1;
                            if (subsequence[i] == subsequence[j] && cl == 2)
                            lookupTab[i][j] = 2;
                            else if (subsequence[i] == subsequence[j])
                            lookupTab[i][j] = lookupTab[i+1][j-1] + 2;
                            else
                            lookupTab[i][j] = Math.max(lookupTab[i][j-1], lookupTab[i+1][j]);
                          }
                        }
                        console.log("Lookup Table : ")
                        lookupTab.forEach(x=>console.log(x.join(" , ")))
                        return lookupTab[0][len-1]
                        }
                        
                        console.log(lps("abs123abs"))
                        `,
                        output: `Lookup Table : 
                      1 , 1 , 1 , 1 , 1 , 1 , 3 , 3 , 3
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 3 , 3
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 3
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1
                      1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1
                      3`,
                      },
                    },
                  }}
                />
                <p>
                  <b>Program to print lps</b>
                </p>
                <CodeEditor
                  options={{
                    title: "Program to print lps",
                    codes: {
                      Javascript: {
                        code: `const lcs = function(str1, str2) {
                          const m = str1.length
                          const n = str2.length
                          const lookupTab = Array.from(Array(m + 1), () => Array(n + 1).fill(n + 1))
                          for (let i = 0; i <= m; i++) {
                              for (let j = 0; j <= n; j++) {
                                  if (i === 0 || j === 0) lookupTab[i][j] = 0
                                  else if (str1[i - 1] === str2[j - 1])
                                      lookupTab[i][j] = lookupTab[i - 1][j - 1] + 1
                                  else
                                      lookupTab[i][j] = Math.max(lookupTab[i - 1][j], lookupTab[i][j - 1])
                              }
                          }
                          const result = lookupTab[m][n]
                          let subsequence = Array(result).fill(null)
                          let len = result
                          let i = m,
                              j = n;
                          while (i > 0 && j > 0) {
                              if (str1[i - 1] == str2[j - 1]) {
                                  subsequence[len - 1] = str1[i - 1]
                                  i -= 1
                                  j -= 1
                                  len -= 1
                              }
                              else if (lookupTab[i - 1][j] > lookupTab[i][j - 1]) {
                                  i -= 1
                              } else {
                                  j -= 1
                              }
                          }
                          console.log(typeof str === "string"? subsequence.join("") : subsequence )
                          return result
                      }
                      
                        function lps(str) {
                          return lcs(str, typeof str === "string"? str.split("").reverse().join(): str.reverse());
                        }
                      
                        
                        let str = "abs123abs";
                        console.log(lps(str));
                      `,
                        output: `sbs
                      3`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "LCIS",
            content: (
              <>
                <Span>
                  <b>
                    Longest Common Increasing Subsequence Problem Statement (
                    LCS + LIS )
                  </b>
                </Span>
                <p>
                  Given two arrays, find length of the longest common increasing
                  subsequence [LCIS] and print one of such sequences (multiple
                  sequences may exist) Suppose we consider two arrays – arr1[] ={" "}
                  [3, 4, 9, 1] and arr2[] = [5, 3, 8, 9, 10, 2, 1] Our answer
                  would be [3, 9] as this is the longest common subsequence
                  which is increasing also.
                </p>
                <CodeEditor
                  options={{
                    title: "LCIS",
                    codes: {
                      Javascript: {
                        code: `function lcis(arr1,arr2){
                          let m = arr1.length
                          let n = arr2.length
                          let lookupTab = Array(n).fill(0)
                          // tab represents table
                          let parent = Array(n).fill(0)
                          
                          for(let i=0;i<m;i++){
                            let current = 0, last = -1
                            for(let j=0;j<n;j++){
                              // if both elements are same
                              if (arr1[i] == arr2[j] && current + 1 > lookupTab[j]){
                                  lookupTab[j] = current + 1; 
                                  parent[j] = last
                              }  
                          
                              // if first element is greater than second
                              if (arr1[i] > arr2[j] && lookupTab[j] > current){
                                  current = lookupTab[j];
                                  last = j
                              } 
                            }
                          }
                          
                          const max = Math.max(...lookupTab)
                          let index = lookupTab.indexOf(max);
                          let result=Array(max).fill(null),i=0;
                          while(index!=-1){
                            result[i] = arr2[index]; 
                            index = parent[index]; 
                            i+=1
                          }
                          console.log("lookup table")
                          console.log(lookupTab)
                          result = result.reverse()
                          console.log(typeof arr1 !== "string" ? result : result.join(""))
                          return max
                          }
                          
                          const arr1 = [3, 4, 9, 1]
                          const arr2 = [5, 3, 8, 9, 10, 2, 1]
                          // 3, 9
                          const arr3 = "b3sak"
                          const arr4 = "baejkl"
                          // bk
                          console.log(lcis(arr1,arr2));
                          console.log("##############")
                          console.log(lcis(arr3,arr4));                                                                      
                          `,
                        output: `lookup table
                        [
                          0, 1, 0, 2,
                          0, 0, 1
                        ]
                        [ 3, 9 ]
                        2
                        ##############
                        lookup table
                        [ 1, 1, 0, 0, 2, 0 ]
                        bk
                        2`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "LBS + LDS",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given an array[0..n-1] containing n positive integers, a
                  subsequence of arr[] is called Bitonic if it is first
                  increasing, then decreasing. <br />
                  [1,11,2,10,4,5,2,1]
                </Span>
                <p>
                  Longest Bitonic Subsequence of length 6 : 1 , 2, 10 , 4 , 2 ,1
                </p>
                <CodeEditor
                  options={{
                    title: "LBS + LDS",
                    codes: {
                      Javascript: {
                        code: `function print(list,n,arr,rev){
                  const tempList = rev ? list.slice().reverse() : list.slice()
                  const max = Math.max(...tempList)
                  let index = []
                  let tmp = max
                  for (let i = n - 1; i >= 0; i--) {
                      if (tempList[i] == tmp) {
                          index.push(i)
                          tmp--
                      }
                  }
                  index.reverse()
                  index = index.map(x => arr[x])
                  console.log("lookup")
                  console.log(list)
                  // console.log("subsequence")
                  // console.log(index)
                  // console.log(index.length)
                  console.log("######################")
              }
              
              function LBS(arr) {
                  const n = arr.length
                  let lis = Array(n).fill(1)
                  for (i = 1; i < n; i++)
                      for (j = 0; j < i; j++)
                          if (arr[i] > arr[j] && lis[i] < lis[j] + 1)
                              lis[i] = lis[j] + 1
                  let lds = Array(n).fill(1)
                  // for (i = 1; i < n; i++)
                  //     for (j = 0; j < i; j++)
                  //         if (arr[i] < arr[j] && lds[i] < lds[j] + 1)
                  //             lds[i] = lds[j] + 1
              
                  for (i = n-1; i >= 0; i--)
                      for (j = n-1; j > i; j--)
                          if (arr[i] > arr[j] && lds[i] < lds[j] + 1)
                              lds[i] = lds[j] + 1
                  
                  console.log("lis")
                  print(lis,n,arr)
                  console.log("lds")
                  print(lds,n,arr,true)
              
                  // let max = lis[0] + lds[0] - 1
                  // for(i=1;i<n;i++)
                  // if(lis[i] + lds[i] - 1>max)
                  // max = lis[i] + lds[i] - 1
                  // return max
              
                  // max value of lis[i] + lds[i] - 1
              
                  let maxVal = arr[0], inx = 0;
                  for(let i = 0; i < n; i++) {
                  if (maxVal < lis[i] + lds[i] - 1) {
                    maxVal = lis[i] + lds[i] - 1;
                    inx = i;
                  }
                  }
              
                  // store smaller elements at the start using lis
              
                  let ct1 = lis[inx];
                  let res = [];
                   for(let i = inx; i >= 0 && ct1 > 0; i--) {
                  if (lis[i] == ct1) {
                    res.push(arr[i]);
                    ct1--;
                  }
                 }
                res.reverse(); 
                let ct2 = lds[inx] - 1;
                for(let i = inx; i < n && ct2 > 0; i++) {
                  if (lds[i] == ct2) {
                    res.push(arr[i]);
                    ct2--;
                  }
                }
              
                console.log(res)
                console.log(res.length)
              }
              
              // LBS([80, 60, 30, 40, 20, 10])
              LBS([1,11,2,10,4,5,2,1])`,
                        output: `lis
              lookup
              [
                1, 2, 2, 3,
              lis
              lookup
              [
                1, 2, 2, 3,
                3, 4, 2, 1
              ]
              ######################
              lds
              lookup
              [
                1, 5, 2, 4,
                3, 3, 2, 1
              ]
              ######################
              [ 1, 11, 10, 4, 2, 1 ]
              6`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "(MCL (maxChainLength)) Maximum Length Chain Of Pairs",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  You are given n pairs of numbers . In every pair, the first
                  number is always smaller than the second number. A pair (a,b)
                  is followed by another pair (c,d) if b &lt; c. Find the
                  longest chain which can be formed from a given set of pairs
                </Span>
                <Span>Input [[5,24],[39,60],[15,28],[27,40],[50,90]]</Span>
                <Span>Output 3</Span>
                <p>Chain [[5,24],[27,40],[50,90]]</p>
                <CodeEditor
                  options={{
                    title: "MCL",
                    codes: {
                      Javascript: {
                        code: `// this problem is a variation of standard lis

                      class Pair {
                        constructor(a,b){
                          this.a = a
                          this.b = b
                        }
                      }
                      
                      function MCL(arr) {
                          const n = arr.length
                          let lookupTab = Array(n).fill(1)
                          for (i = 1; i < n; i++)
                              for (j = 0; j < i; j++)
                                  if (arr[i].a > arr[j].b && lookupTab[i] < lookupTab[j] + 1)
                                      lookupTab[i] = lookupTab[j] + 1
                          const max = Math.max(...lookupTab)
                          let index = []
                          let tmp = max
                          for (let i = n - 1; i >= 0; i--) {
                              if (lookupTab[i] == tmp) {
                                  index.push(i)
                                  tmp--
                              }
                          }
                          index.reverse()
                          index = index.map(x => arr[x])
                          console.log(index)
                          return max
                      }
                      
                      MCL([
                        new Pair(5,24),
                        new Pair(39, 60),
                        new Pair (27, 40), 
                        new Pair(50, 90)
                      ])`,
                        output: `[ Pair { a: 5, b: 24 }, Pair { a: 27, b: 40 }, Pair { a: 50, b: 90 } ]
                      3`,
                      },
                    },
                  }}
                />
                <p>
                  <b>Practice</b>
                </p>
                <CodeEditor
                  options={{
                    title: "lis+lcs+lps+mcl+lds+lbs+lcis",
                    codes: {
                      Javascript: {
                        code: `function lcs(str1,str2){
                        const m = str1.length
                        const n = str2.length
                        const dp = Array.from(Array(m+1),()=>Array(n+1).fill(0))
                        for(let i=0;i<=m;i++){
                          for(let j=0;j<=n;j++){
                            if(i==0 || j==0) dp[i][j] = 0
                            else if(str1[i-1]==str2[j-1]) dp[i][j] = 1 + dp[i-1][j-1]  
                            else dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
                          }
                        }
                        let result = len = dp[m][n]
                        const str = Array(result).fill(null)
                        let i=m,j=n
                        while(i>0&&j>0){
                         if(str1[i-1]==str2[j-1]){
                           str[len-1]= str1[i-1]
                           i-=1
                           j-=1
                           len-=1
                         }
                         else if (dp[i - 1][j] > dp[i][j - 1])
                            i -= 1
                         else 
                            j -= 1
                        }
                        return str.join("")
                        }
                        console.log(lcs("abcdef","pqadef"))
                        
                        function lps(str){
                          return lcs(str,str.split("").reverse().join())
                        }
                        console.log(lps("abs123abs"))
                        
                        function lps1(str) {
                            const m = str.length
                            let dp = Array.from(Array(m), () => Array(m).fill(1))
                            for (let cl = 2; cl <= m; cl++) {
                                for (let i = 0; i < m - cl + 1; i++) {
                                    let j = i + cl - 1;
                                    if (str[i] == str[j] && cl == 2)
                                        dp[i][j] = 2;
                                    else if (str[i] == str[j])
                                        dp[i][j] = dp[i + 1][j - 1] + 2;
                                    else
                                        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
                                }
                            }
                            return dp[0][m - 1]
                        }
                        console.log(lps1("abs123abs"))
                        
                        function lis(str){
                          const n = str.length
                          let i,j   
                          const dp = Array(n).fill(1)
                          for(i=1;i<n;i++){
                            for(j=0;j<i;j++){
                              if(str[i] > str[j] && dp[i]<dp[j]+1){
                               dp[i] = dp[j] + 1
                              }
                            }
                          }
                          const max = Math.max(...dp)
                          let tmp = max
                          const index = []
                          for(i=n-1;i>=0;i--){
                            if(dp[i]==tmp){
                              index.push(i)
                              tmp--
                            }
                          }
                          return index.map(x => str[x]).reverse()
                        }
                        
                        console.log(lis([10, 22, 9, 33, 21, 50, 41, 60]))
                        
                        class Pair {
                            constructor(a, b) {
                                this.a = a
                                this.b = b
                            }
                        }
                        function mcl(arr){
                        const n = arr.length
                        const dp = Array(n).fill(1)
                        let i,j
                        for(i=1;i<n;i++){
                          for(j=0;j<i;j++){
                             if(arr[i].a > arr[j].b && dp[i]<dp[j]+1){
                               dp[i] = dp[j] + 1
                             }
                          }
                        }
                        const max = Math.max(...dp)
                        let tmp = max
                        let index = []
                        for(i=n-1;i>=0;i--){
                          if(dp[i]==tmp){
                            index.push(i)
                            tmp--
                          }
                        }
                        console.log(index.map(x=>arr[x].a + " " + arr[x].b).reverse().join(' '))
                        }
                        
                        mcl([
                            new Pair(5, 24),
                            new Pair(39, 60),
                            new Pair(27, 40),
                            new Pair(50, 90)
                        ])
                        
                        
                        function lds(arr){
                        const n = arr.length
                        let dp = new Array(n).fill(1)
                        let i,j
                        for(i=n-1;i>=0;i--){
                          for(j=n-1;j>i;j--){
                            if(arr[i] > arr[j] && dp[i] < dp[j]+1){
                              dp[i] = dp[j] + 1
                            }
                          }
                        }
                        const max = Math.max(...dp)
                        console.log(max)
                        let temp = max
                        let index = []
                        for(i=0;i<n;i++){
                         if(dp[i]==temp){
                           index.push(i)
                           temp--
                         }
                        }
                        console.log(index.map(x=>arr[x]))
                        }
                        lds([10, 22, 9, 33, 21, 50, 41, 60])
                        
                        function lbs(arr){
                        const n = arr.length
                        let i,j
                        const lis = Array(n).fill(1)
                        const lds = Array(n).fill(1)
                        for(i=1;i<=n;i++){
                          for(j=0;j<i;j++){
                            if(arr[i]>arr[j] &&lis[i] < lis[j]+1)
                            lis[i] = lis[j] + 1 
                          }
                        }
                        for(i=n-1;i>-0;i--){
                          for(j=n-1;j>i;j--){
                            if(arr[i]>arr[j] && lds[i] < lds[j] +1)
                              lds[i] = lds[j] + 1
                          }
                        }
                        let max = arr[0], ind = 0
                        for(i=0;i<n;i++){
                          if(max<lis[i]+lds[i]-1){
                            max = lis[i]+lds[i]-1 
                            ind = i
                          }
                        }
                        console.log(max)
                        
                        let lis_index = lis[ind] 
                        let lds_index = lds[ind] - 1
                        const result = []
                        
                        for(i=ind;i>=0 && lis_index > 0;i--){
                          if(lis_index === lis[i]){
                            result.push(arr[i])
                            lis_index--
                          }
                        }
                        result.reverse()
                        for(i=ind;i<n && lds_index > 0;i++){
                          if(lds_index === lds[i]){
                            result.push(arr[i])
                            lds_index--
                          }
                        }
                        console.log(result)
                        }
                        
                        lbs([1, 11, 2, 10, 4, 5, 2, 1])
                        
                        function lcis(str1,str2){
                        let m = str1.length
                        let n = str2.length
                        let dp = Array(n).fill(0)
                        let parent = Array(n).fill(0)
                        for (let i = 0; i < m; i++) {
                          let current = 0, last = -1
                          for (let j = 0; j < n; j++) {
                              if (str1[i] == str2[j] && current + 1 > dp[j]) {
                                  dp[j] = current + 1;
                                  parent[j] = last
                              }
                              if (str1[i] > str2[j] && dp[j] > current) {
                                  current = dp[j];
                                  last = j
                              }
                          }
                        }
                        const max = Math.max(...dp)
                        console.log(max)
                        const result = Array(max).fill(null)
                        let index = dp.indexOf(max)
                        let i=0
                        while(index!=-1){
                        result[i] = str2[index]
                        index = parent[index]
                        i+=1
                        }
                        console.log(result.reverse().join(""))
                        }
                        
                        lcis("b3sak", "baejkl")
                        `,
                        output: `adef
                        sbs
                        3
                        [ 10, 22, 33, 41, 60 ]
                        5 24 27 40 50 90
                        2
                        adef
                        sbs
                        3
                        [ 10, 22, 33, 41, 60 ]
                        5 24 27 40 50 90
                        2
                        adef
                        sbs
                        3
                        [ 10, 22, 33, 41, 60 ]
                        5 24 27 40 50 90
                        2
                        [ 10, 9 ]
                        6
                        [ 1, 11, 10, 4, 2, 1 ]
                        2
                        bk`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Naive",
            content: (
              <>
                <Span>
                  String matching or searching algorithms try to find places
                  where one or several strings (also called patterns) are found
                  within a larger string (searched text):.
                </Span>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Using the given pattern , find out all the indexes at which
                  pattern is present at the given string.
                </Span>
                <Span>
                  <b>
                    Basically finding all the occurences of a particular string
                    say ‘pat’ in another string say ‘txt’ is called pattern
                    searching
                  </b>
                </Span>
                <Span>
                  The time complexity of Naïve Pattern Search method is O(m*n).
                  The m is the size of pattern and n is the size of the main
                  string.
                </Span>
                <p>
                  Input: txt[] = “THIS IS A TEST TEXT”
                  <br />
                  pat[] = “TEST”
                  <br />
                  Output: Pattern found at index 10
                </p>
                <CodeEditor
                  options={{
                    title: "Naive",
                    codes: {
                      Javascript: {
                        code: `function naive(txt,pat){
                          const m = pat.length
                          const n = txt.length
                          // console.log(pat,txt,m,n)
                          for(let i=0;i<=n-m;i++){
                            let j
                            for(j=0;j<m;j++){
                              if(txt[i+j]!=pat[j])
                              break;
                            }
                            if(j==m)
                              console.log("pattern found at:" + i)
                          }
                          }
                          
                          const txt = "AABAACAADAABAAABAA"
                          const pat = "AABA"
                          naive(txt,pat)
                          
                          // O(m*n)`,
                        output: `pattern found at:0
                        pattern found at:9
                        pattern found at:13`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Knuth Morris Pratt [ Degenerating Property ]",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Using the given pattern , find out all the indexes at which
                  pattern is present at the given string.
                </Span>
                <Span>
                  <b>Theory</b>
                </Span>
                <Span>
                  Knuth Morris Pratt Searching algorithm uses degenerating
                  property of the pattern and improves the worst case complexity
                  to O(n).
                </Span>
                <Span>
                  Degenerating property, means pattern having same sub-problems
                  appearing more than once in the pattern , are considered
                </Span>
                <Span>
                  Preprocessing involves constructing an lps array corresponding
                  to the pattern string of same size as the pattern string
                </Span>
                <Span>
                  lps indicates longest proper prefix which is also suffix.
                </Span>
                <Span>
                  proper prefixes of “ABC” are “”,”A”,”AB” and not “ABC”.Same
                  for suffix
                </Span>
                <Span>Examples</Span>
                <>
                  <p>1</p>
                  <p>pat[] A B X A B</p>
                  <p>lps[] 0 0 0 1 2</p>
                </>
                <>
                  <p>2</p>
                  <p>pat a b c d a b c a</p>
                  <p>lps 0 0 0 0 1 2 3 1</p>
                </>
                <br />
                <p>
                  Start from i=0 and j=0. if character matches increment i and j
                  , and update lps[j] by 1 else only update i by 1 .
                </p>
                <CodeEditor
                  options={{
                    title: "Knuth Morris Pratt [ Degenerating Property ]",
                    codes: {
                      Javascript: {
                        code: `/* 
                        Degenerating property, means pattern having same 
                        sub-problems appearing more than once in the pattern , 
                        are considered
                       
                        kmp uses degenerating property to reduce worst case complexity to O(n)
                       
                        lps (longest proper prefix) indicates longest
                        proper prefix which is also suffix.
                       
                        For e.g. proper prefixes of “ABC” are “”,”A”,”AB” and not “ABC”.
                       */
                       
                       function generateLps(pat,lps){
                       let j = 0
                       // j represents length of proper prefix
                       let i = 1
                       lps[0] = 0
                       const m = pat.length
                       
                       while(i<m){
                       if(pat[i]===pat[j]){
                         j++
                         lps[i] = j
                         i++
                         // if both elements matches
                         // increment i and j by 1 and update
                         // lps of i
                       }else {
                       if(j != 0)
                         j = lps[j-1]
                       else{
                         // if first two characters doesn't match 
                         // increment i by 1
                         lps[i] = j
                         i++
                       }
                       }
                       }
                       }
                       
                       function kmp(pat,txt){
                       
                       const m = pat.length
                       const n = txt.length
                       
                       let lps = Array(m).fill(0)
                       generateLps(pat,lps)
                       console.log("lps array:")
                       console.log(lps)
                       let i = j = 0
                       while(i<n){
                       if(pat[j]==txt[i]){
                         i++
                         j++
                       }
                       if(j==m){
                         console.log("pattern found at index: " + (i-j))
                         j = lps[j-1]
                       }
                       else if(i<n && pat[j]!=txt[i]){
                         if(j!=0) j=lps[j-1]
                         else i+=1
                       }
                       }
                       }
                       
                       /*
                       A B X A B
                       0 0 0 1 2
                       */
                       
                       kmp("ABXAB","ABXAB9ABXAB")
                       `,
                        output: `lps array:
                        [ 0, 0, 0, 1, 2 ]
                        pattern found at index: 0
                        pattern found at index: 6`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Rabin Karp",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Using the given pattern , find out all the indexes at which
                  pattern is present at the given string
                </Span>
                <Span>
                  Like the Naive Algorithm, Rabin-Karp algorithm also slides the
                  pattern one by one. But unlike the Naive algorithm, Rabin Karp
                  algorithm matches the hash value of the pattern with the hash
                  value of current substring of text, and if the hash values
                  match then only it starts matching individual characters.
                </Span>
                <Span>
                  <b>Time Complexity:</b>
                  <br />
                  The average and best-case running time of the Rabin-Karp
                  algorithm is O(n+m), but its worst-case time is O(nm). Worst
                  case of Rabin-Karp algorithm occurs when all characters of
                  pattern and text are same as the hash values of all the
                  substrings of txt[] match with hash value of pat[]. For
                  example pat[] = “AAA” and txt[] = “AAAAAAA”.
                </Span>
                <p>
                  The Rabin-Karp algorithm uses a rolling hash to detect the
                  presence of a desired substring. Because it's a hash function,
                  it maps many different strings to the same hash value If the
                  rolling hash produces a candidate match due to this hash
                  collision, which turns out not to be a string match, that is a
                  “spurious hit.”
                </p>
                <CodeEditor
                  options={{
                    title: "Rabin Karp",
                    codes: {
                      Javacript: {
                        code: `//  The Rabin-Karp algorithm uses a rolling hash to
                        //  detect the presence of a desired substring. 
                        //  Because it's a hash function, it maps many different 
                        //  strings to the same hash value. If the rolling 
                        //  hash produces a candidate match due to this
                        //  hash collision, which turns out not to be a string
                        //  match, that is a “spurious hit.”
                        
                        function rk(pat, txt, q)
                        {
                          let m = pat.length;
                          let n = txt.length;
                          let i, j;
                          
                          let p = 0;
                          let t = 0;
                          let h = 1;
                          let d = 256; 
                        
                          for(i = 0; i < m - 1; i++)
                            h = (h * d) % q;
                        
                          for(i = 0; i < m; i++)
                          {
                            p = (d * p + pat[i].charCodeAt()) % q;
                            t = (d * t + txt[i].charCodeAt()) % q;
                          }
                        
                          // p represents hash value of pattern
                          // t represents hash value of substring
                        
                          for(i = 0; i <= n - m; i++)
                          {
                            if (p == t)
                            {
                              for(j = 0; j < m; j++)
                              {
                                if (txt[i+j] != pat[j])
                                  break;
                              }
                            console.log("Pattern found at index " + i);
                            }
                        
                            // compute next hash
                            if (i < n - m)
                            {
                              t = (d * (t - txt[i].charCodeAt() * h) +
                                  txt[i + m].charCodeAt()) % q;
                        
                              if (t < 0)
                                t = (t + q);
                            }
                          }
                        }
                        
                        let txt = "ABC9ABC";
                        let pat = "ABC";
                        
                        let q = 101;
                        rk(pat, txt, q);
                        `,
                        output: `Pattern found at index 0
                        Pattern found at index 4`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Edit Distance",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given two strings str1 and str2 and below operations that can
                  performed on str1. Find minimum number of edits (operations)
                  required to convert ‘str1’ into ‘str2’.
                </Span>
                <Span>Insert , Remove , Replace</Span>
                <Span>All of the above operations are of equal cost.</Span>
                <Span>Example</Span>
                <Span>Input: str1 = “geek”, str2 = “gesek”</Span>
                <Span>Output: 1</Span>
                <Span>We can convert str1 into str2 by inserting a ‘s’.</Span>
                <Span>Insert: Recur for m and n-1</Span>
                <Span>Remove: Recur for m-1 and n</Span>
                <p>Replace: Recur for m-1 and n-1</p>
                <CodeEditor
                  options={{
                    title: "Edit Distance",
                    codes: {
                      Javascript: {
                        code: `function min(x, y, z) {
                        if (x <= y && x <= z) return x;
                        if (y <= x && y <= z) return y;
                        else return z;
                        }
                        function editDist(str1, str2, m, n) {
                        if (m == 0) return n;
                        if (n == 0) return m;
                        if (str1[m - 1] == str2[n - 1]) return editDist(str1, str2, m - 1, n - 1);
                        return (
                        1 +
                        min(
                        editDist(str1, str2, m, n - 1), // Insert
                        editDist(str1, str2, m - 1, n), // Remove
                        editDist(str1, str2, m - 1, n - 1) // Replace
                        )
                        ); 
                        }
                        let str1 = "sunday";
                        let str2 = "saturday";
                        editDist(str1, str2, str1.length, str2.length)`,
                        output: `3`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Egg Dropping Problem",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given n eggs and k floors, decide floors from which eggs
                  should be dropped such that total number of attempts are
                  minimized. Egg may or may not break at each attempt <br />
                  Example(s)
                  <br />
                  Example 1 : Given 1 egg and 10 floors, what is min attempt?
                  (worst case)
                  <br />
                  Ans 1 : 10
                  <br />
                  Example 2 : Given 10 eggs and 1 floor , what is min attempt?
                  (worst case)
                  <br />
                  Ans 2 : 1
                </Span>
                <p>
                  (1 + max( DP[i-1][j-1], DP[i][j-x] )) <br />
                  i =&gt; Number of eggs <br />j =&gt; Number of floors
                </p>
                <CodeEditor
                  options={{
                    title: "Egg Dropping Problem",
                    codes: {
                      Javascript: {
                        code: `function eggDrop(n,k){
                          const eggFloor = Array.from(Array(n+1),()=>Array(k+1)) 
                          let res,i,j,x;
                          // We need one trial for one floor and
                          // 0 trials for 0 floors
                          for (i = 1; i <= n; i++) {
                           eggFloor[i][1] = 1;
                           eggFloor[i][0] = 0;
                          }
                          // We always need j trials for one egg
                          // and j floors.
                          for (j = 1; j <= k; j++) 
                           eggFloor[1][j] = j;
                          for (i = 2; i <= n; i++) {
                          for (j = 2; j <= k; j++) {
                          eggFloor[i][j] = Number.MAX_SAFE_INTEGER;
                          for (x = 1; x <= j; x++) {
                          res = 1 + Math.max(eggFloor[i - 1][x - 1],eggFloor[i][j - x]);
                          if (res < eggFloor[i][j])
                          eggFloor[i][j] = res;
                          }
                          }
                          }
                           eggFloor.forEach(x=>console.log(x.join("  ")))
                           return eggFloor[n][k];
                         }
                         
                         let n = 2, k = 10;
                         
                         console.log("Minimum number of "  + "trials in worst case with "
                         + n + " eggs and " + k
                         + " floors is " + eggDrop(n, k));`,
                        output: `0  1  2  3  4  5  6  7  8  9  10
                        0  1  2  2  3  3  3  4  4  4  4
                        Minimum number of trials in worst case with 2 eggs and 10 floors is 4`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Friends Pairing Problem",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given n friends, each one can remain single or can be paired
                  up with some other friend. <br />
                  Note : Each can be paired only once
                  <br />
                  Find out the total number of ways in which friends can remain
                  single or can be paired up
                </Span>
                <p>f(n) = f(n — 1) + (n — 1) * f(n — 2)</p>
                <CodeEditor
                  options={{
                    title: "Friends Pairing Problem",
                    codes: {
                      Javascript: {
                        code: `// 1) n-th person remains single, we recur
                      // for f(n — 1)
                      // 2) n-th person pairs up with any of the
                      // remaining n — 1 persons. We get (n — 1) 
                      // * f(n — 2)
                      // Therefore we can recursively write f(n) as:
                      // f(n) = f(n — 1) + (n — 1) * f(n — 2)
                      
                      function Sol(n){
                        let dp = Array(n+1).fill(null)
                        for (let i = 0; i <= n; i++) {
                        if (i <= 2)
                        dp[i] = i;
                        else
                        dp[i] = dp[i - 1] + (i - 1) * dp[i - 2];
                        }
                        return dp[n];
                      }
                      
                      console.log(Sol(4))`,
                        output: `10`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Maximum Size Square Sub Matrix With All 1s",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <p>
                  Given a binary matrix, find out the maximum size square
                  sub-matrix with all 1s
                  <br />
                  0 1 1 0 1 <br />
                  1 1 0 1 0 <br />
                  0 1 1 1 0<br />
                  1 1 1 1 0<br />
                  1 1 1 1 1<br />
                  0 0 0 0 0<br />
                </p>
                <CodeEditor
                  options={{
                    title: "Maximum Size Square Sub Matrix With All 1s",
                    codes: {
                      Javascript: {
                        code: `let R = 6;
                      let C = 5;
                      
                      function printMaxSubSquare(M) {
                        let i,j;
                        let S = [];
                      
                      for ( var y = 0; y < R; y++ ) {
                        S[ y ] = [];
                        for ( var x = 0; x < C; x++ ) {
                          S[ y ][ x ] = 0;
                        }
                      }
                        let max_of_s, max_i, max_j;
                        
                        for(i = 0; i < R; i++)
                          S[i][0] = M[i][0];
                        
                        for(j = 0; j < C; j++)
                          S[0][j] = M[0][j];
                          
                        for(i = 1; i < R; i++)
                        {
                          for(j = 1; j < C; j++)
                          {
                            if(M[i][j] == 1)
                              S[i][j] = Math.min(S[i][j-1],Math.min( S[i-1][j],
                                      S[i-1][j-1])) + 1;
                            else
                              S[i][j] = 0;
                          }
                        }
                      
                        max_of_s = S[0][0]; max_i = 0; max_j = 0;
                        for(i = 0; i < R; i++)
                        {
                          for(j = 0; j < C; j++)
                          {
                            if(max_of_s < S[i][j])
                            {
                              max_of_s = S[i][j];
                              max_i = i;
                              max_j = j;
                            }
                          }			
                        }
                      
                        console.log("Maximum size sub-matrix is:");
                        for(i = max_i; i > max_i - max_of_s; i--)
                        { 
                          let out = ""
                          for(j = max_j; j > max_j - max_of_s; j--)
                          {
                            out += M[i][j] + " "
                          }
                          console.log(out)
                        }
                      }
                      
                      
                      let M = [[0, 1, 1, 0, 1],
                          [1, 1, 0, 1, 0],
                          [0, 1, 1, 1, 0],
                          [1, 1, 1, 1, 0],
                          [1, 1, 1, 1, 1],
                          [0, 0, 0, 0, 0]];
                                
                      printMaxSubSquare(M);
                      `,
                        output: `Maximum size sub-matrix is:
                      1 1 1 
                      1 1 1 
                      1 1 1 `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
        ],
      },
      bruteForce: {
        title: "Brute Force",
        content: (
          <>
            <Span>
              It's a direct method in which all possible methods are enumerated
              and it's guaranteed way to find the correct solution by listing
              all the possible candidate solutions for the problem.The brute
              force approach is inefficient. For real-time problems, algorithm
              analysis often goes above the O(N!) order of growth. It's
              execution time can quickly exceed the limits of computer in some
              cases.
            </Span>
            <Span>
              For Example: If there is a lock of 4-digit PIN. The digits to be
              chosen from 0-9 then the brute force will be trying all possible
              combinations one by one like 0001, 0002, 0003, 0004, and so on
              until we get the right PIN. In the worst case, it will take 10,000
              (10^4) tries to find the right combination.
            </Span>
            <Span>
              For Travelling salesman problem and Knapsack problem, there is no
              polynomial time solution. Hence they are classified as NP hard
              problem. But they can solved by using backtracking approach, that
              will increase the efficiency of the algorithm.
            </Span>
            <Span>
              Naive algorithm is simply a brute force aprroach but substring can
              be found in more efficient way using kmp and rabin karp
            </Span>
          </>
        ),
      },
      backtracking: {
        title: "Backtracking",
        types: [
          {
            title: "TSP",
            content: (
              <>
                <Span>
                  <b>Traveling Salesman Problem Statement</b>
                </Span>
                <Img left src={TSPBacktrack} />
                <p>
                  Given a set of cities and distance between every pair of
                  cities, the problem is to find the shortest possible route
                  that visits every city exactly once and returns back to the
                  starting point.
                </p>
                <CodeEditor
                  options={{
                    title: "TSP",
                    codes: {
                      Javascript: {
                        code: `
                        class Graph {
                          constructor(noOfVertices) {
                              this.noOfVertices = noOfVertices;
                              this.adjMatrix = Array.from(Array(noOfVertices), () => Array(noOfVertices).fill(0));
                              this.v = ['A', 'B', 'C', 'D']
                          }
                      
                          addEdge(u, v, wt) {
                              if ((u >= this.noOfVertices) || (v > this.noOfVertices)) {
                                  console.log("Vertex does not exists!");
                                  return
                              }
                              if (u == v) {
                                  console.log("Same Vertex!");
                                  return
                              }
                              this.adjMatrix[u][v] = wt
                              this.adjMatrix[v][u] = wt
                          }
                      
                          print() {
                              console.log(this.adjMatrix)
                          }
                      
                          bfs(start=this.adjMatrix[0][0]) {
                              let visited = {};
                              let q = [];
                              let output = ""
                              visited[start] = true;
                              q.push(start);
                              while (q.length != 0){
                                  let ele = q[0]
                                  q.shift();
                                  output += this.v[ele] + " ";
                                  for (let i=0;i<this.noOfVertices;i++) {
                                  if (this.adjMatrix[ele][i]&&!visited[i]){
                                    visited[i] = true;
                                    q.push(i)
                                  }
                                }
                              }
                              console.log(output)
                          }
                      
                          dfs(start=this.adjMatrix[0][0]) {
                              let output = { res: "" }
                              // strings are immutable in js and cannot be directly
                              // passed by reference
                              this.dfsHelper(start, {}, output)
                              console.log(output.res)
                          }
                      
                          dfsHelper(vert, visited, output) {
                              visited[vert] = true;
                              output.res += this.v[vert] + " "
                              for (let i=0;i<this.noOfVertices;i++) {
                                  // if some vertex is adjacent
                                  if (this.adjMatrix[vert][i]&&!visited[i])
                                      this.dfsHelper(i, visited, output);
                              }
                          }
                      
                          tsp(){
                           let result = []
                           let visited = Array(this.noOfVertices).fill(false)
                           this.tspHelper(0,1,0,result,visited)
                           console.log(Math.min(...result),result)
                          }
                      
                          tspHelper(curr,count,cost,result,visited){
                            // if exploration of all vertices is completed 
                            // ,simply backtrack to the initial vertex
                            if(count === this.noOfVertices && this.adjMatrix[curr][0]){
                              result.push(cost+this.adjMatrix[curr][0]) 
                              return
                            }
                            for(let i=0;i<this.noOfVertices;i++){
                              let curr_cost = this.adjMatrix[curr][i]
                              if(!visited[i]&&curr_cost){
                                visited[i] = true
                                this.tspHelper(i,count+1,cost+curr_cost,result,visited)
                                visited[i] = false
                              }
                            }
                          }
                      }
                      
                      const g = new Graph(4)
                      g.addEdge(0, 1, 20);
                      g.addEdge(0, 2, 42);
                      g.addEdge(0, 3, 25);
                      g.addEdge(1, 2, 30);
                      g.addEdge(1, 3, 34);
                      g.addEdge(3, 2, 10);
                      g.print();
                      console.log("DFS");
                      g.dfs();
                      console.log("BFS");
                      g.bfs();
                      g.tsp()                      
                      `,
                        output: `[
                          [ 0, 20, 42, 25 ],
                          [ 20, 0, 30, 34 ],
                          [ 42, 30, 0, 10 ],
                          [ 25, 34, 10, 0 ]
                        ]
                        DFS
                        A B C D 
                        BFS
                        A B C D 
                        85 [
                          124,  90,  85, 106, 124,
                          134, 131, 106,  90, 134,
                          131,  85
                        ]`,
                      },
                    },
                  }}
                />
                <p>
                  <b>Practice:</b>
                </p>
                <CodeEditor
                  options={{
                    title: "TSP(Backtracking)",
                    codes: {
                      Javascript: {
                        code: `class Graph {
  
                        constructor(n){
                         this.n = n
                         this.g = Array.from(Array(n),()=>Array(n).fill(0))
                        }
                        
                        addEdge(u,v,w){
                          this.g[u][v] = w
                          this.g[v][u] = w
                        }
                      
                        print(){
                          console.log(this.g)
                        }
                        
                        dfs(v=0,visited={}){
                          visited[v] = true
                          console.log(v)
                          for(let i=0;i<this.n;i++){
                            if(!visited[i] && this.g[v][i]){
                              this.dfs(i,visited)
                            }
                          }
                        }
                        
                        bfs(){
                         let q = []
                         let visited = []
                         visited[0] = true
                         q.push(0)
                         while(q.length){
                            const el = q.shift()
                            console.log(el)
                            for(let i=0;i<this.n;i++){
                               if(!visited[i] && this.g[el][i]){
                                 visited[i] = true
                                 q.push(i)
                               }
                            }
                         }
                        }
                        
                        tsp(){
                          let result = []
                          this.tspH(0,1,0,result)
                          console.log(Math.min(...result))
                        }
                      
                        tspH(curr,count,cost,result,visited=[]){
                          if (count === this.n && this.g[curr][0]) {
                              result.push(cost + this.g[curr][0])
                              return
                          }
                          for (let i = 0; i < this.n; i++) {
                              let curr_cost = this.g[curr][i]
                              if (!visited[i] && curr_cost) {
                                  visited[i] = true
                                  this.tspH(i, count + 1, cost + curr_cost, result, visited)
                                  visited[i] = false
                              }
                          }     
                        }
                       
                      }
                      
                      const g = new Graph(4)
                      g.addEdge(0, 1, 20);
                      g.addEdge(0, 2, 42);
                      g.addEdge(0, 3, 25);
                      g.addEdge(1, 2, 30);
                      g.addEdge(1, 3, 34);
                      g.addEdge(3, 2, 10);
                      g.print();
                      console.log("DFS");
                      g.dfs();
                      console.log("BFS");
                      g.bfs();
                      g.tsp()
                      
                      // class Graph {
                      //     constructor(noOfVertices) {
                      //         this.noOfVertices = noOfVertices;
                      //         this.adjMatrix = Array.from(Array(noOfVertices), () => Array(noOfVertices).fill(0));
                      //     }
                      //     addEdge(u, v, wt) {
                      //         if ((u >= this.noOfVertices) || (v > this.noOfVertices)) {
                      //             console.log("Vertex does not exists!");
                      //             return
                      //         }
                      //         if (u == v) {
                      //             console.log("Same Vertex!");
                      //             return
                      //         }
                      //         this.adjMatrix[u][v] = wt
                      //         this.adjMatrix[v][u] = wt
                      //     }
                      //     print() {
                      //         console.log(this.adjMatrix)
                      //     }
                      //     tsp() {
                      //         let allVisited = (1 << this.noOfVertices) - 1;
                      //         // we can make use of boolean array as well
                      //         //. ( 1 << 4) -1  => 16 -1 = 15
                      //         // or allVisited = Array(this.noOfVertices)
                      //         // .fill(false)
                      
                      //         // mask 1 (0001) represents person is at first 
                      //         // visits (obviously)
                      
                      //         // mask 15 (1111) represents person visits all cities 
                      
                      //         const lookupMem = Array.from(Array(1 << this.noOfVertices), () => Array(this.noOfVertices).fill(-1))
                      //         const res = this.tspHelper(1, 0, allVisited, lookupMem)
                      //         console.log("lookup")
                      //         console.log(lookupMem)
                      //         return res
                      //     }
                      
                      //     // TC -> n^2 * 2^n
                      //     // Each sub-problem (2^n) will take O (n) time to find a path to 
                      //     // remaining (n-1) cities.
                      //     // SC -> n2^n
                      
                      //     tspHelper(mask, pos, allVisited, dp) {
                      
                      //         if (mask == allVisited) {
                      //             return this.adjMatrix[pos][0]
                      //         }
                      //         // dist[pos][0] distance b/w last and first pos
                      
                      //         if (dp[mask][pos] != -1)
                      //             return dp[mask][pos]
                      //         // avoid overlapping subproblems
                      
                      //         let ans = Number.MAX_SAFE_INTEGER
                      //         for (let city = 0; city < this.noOfVertices; city++) {
                      //             // check for non visited neighbor
                      //             if ((mask & (1 << city)) == 0) {
                      //                 let newAns = this.adjMatrix[pos][city] + this.tspHelper((mask | (1 << city)), city, allVisited, dp)
                      //                 // update city's bit from 0 to 1 for e.g. from 0001 to 0011
                      //                 ans = Math.min(ans, newAns)
                      //             }
                      //         }
                      //         return dp[mask][pos] = ans
                      //     }
                      // }
                      
                      // const g = new Graph(4)
                      // const v = ['A', 'B', 'C', 'D']
                      // g.addEdge(0, 1, 20);
                      // g.addEdge(0, 2, 42);
                      // g.addEdge(0, 3, 25);
                      // g.addEdge(1, 2, 30);
                      // g.addEdge(1, 3, 34);
                      // g.addEdge(3, 2, 10);
                      // g.print();
                      // console.log(g.tsp())`,
                        output: `[
                        [ 0, 20, 42, 25 ],
                        [ 20, 0, 30, 34 ],
                        [ 42, 30, 0, 10 ],
                        [ 25, 34, 10, 0 ]
                      ]
                      DFS
                      0
                      1
                      2
                      3
                      BFS
                      0
                      1
                      2
                      3
                      85`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Sudoku",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Solve the given sudoku by replacing all the 0’s with
                  appropriate values ranging from 1 to 9.
                </Span>
                <Img left src={SudokuImg} />
                <CodeEditor
                  options={{
                    title: "Sudoku",
                    codes: {
                      Javascript: {
                        code: `function isSafe(grid, row, col, num)
                        {
                          // check horizontally
                          for(let j = 0; j < n; j++)
                            if (grid[row][j] == num)
                              return false;
                        
                          // check vertically
                          for(let i = 0; i < n; i++)
                            if (grid[i][col] == num)
                              return false;
                        
                         
                          let startRow = row - row % 3,  
                             startCol = col - col % 3; 
                        
                          // check within the section (3 * 3) (n = 3)
                          for(let i = 0; i < 3; i++)
                            for(let j = 0; j < 3; j++)
                              if (grid[i + startRow][j + startCol] == num)
                                return false;
                        
                          return true;
                        }
                        
                        
                        function solve(grid, row, col, n)
                        {
                          // avoid further tracking if all cells are explored 8 9
                          if (row == n - 1 && col == n)
                            return true;
                        
                          // move to next row
                          if (col == n){
                            row++; 
                            col = 0;
                          }
                        
                          // check for next element horizontally if element is already present 
                          if (grid[row][col] != 0)
                            return solve(grid, row, col + 1,n);
                        
                          // if present value is 0, replace it with values from 0-9
                          for(let num = 1; num <  n + 1; num++)
                          {
                            if (isSafe(grid, row, col, num))
                            {
                              grid[row][col] = num;
                              // check for next column
                              if (solve(grid, row, col + 1,n))
                                return true;
                            }
                            grid[row][col] = 0;
                          }
                          return false;
                        }
                        
                        let n = 9;
                        const sudoku = Array.from(Array(n),()=>Array(n).fill(0))
                        sudoku.forEach(x=>console.log(x.join(" ")))
                        const start = new Date().getTime();
                        console.log("#################")
                        solve(sudoku, 0, 0,n)
                        const end = new Date().getTime();
                        sudoku.forEach(x=>console.log(x.join(" ")))
                        console.log("#################")
                        console.log("Time required to solve sudoku: ")
                        console.log((end - start)/1000 + " s")
                        `,
                        output: `0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        0 0 0 0 0 0 0 0 0
                        #################
                        1 2 3 4 5 6 7 8 9
                        4 5 6 7 8 9 1 2 3
                        7 8 9 1 2 3 4 5 6
                        2 1 4 3 6 5 8 9 7
                        3 6 5 8 9 7 2 1 4
                        8 9 7 2 1 4 3 6 5
                        5 3 1 6 4 2 9 7 8
                        6 4 2 9 7 8 5 3 1
                        9 7 8 5 3 1 6 4 2
                        #################
                        Time required to solve sudoku: 
                        0.001 s`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Knight Tour",
            content: (
              <>
                <Span>
                  <b> Problem Statement</b>
                </Span>
                <Span>
                  Given a N*N board with the Knight placed on the first block of
                  an empty board. Moving according to the rules of chess knight
                  must visit each square exactly once. Print the order of each
                  the cell in which they are visited. ( horse should visite all
                  the cells exactly once )
                </Span>
                <Img left src={KnightImg} alt="img" />
                <p>Note -&lt; board[7][4] will be 53 at below pic.</p>
                <CodeEditor
                  options={{
                    title: "Knight Tour",
                    codes: {
                      Javascript: {
                        code: `const print = b => b.forEach(x=>console.log(x.join(" ")))

                        function isSafe(x,y,board){
                          // coordinate should lie within the board
                           return x >=0 && x<n && y >= 0 && y<n && board[x][y] == -1
                        }
                        
                        function knightTour(board,xMove,yMove,n){
                          // place knight at (0,0) first
                          board[0][0] = 0
                          if(!knightTourGuide(0,0,1,board,xMove,yMove,n)){
                             return false
                          }
                          return true
                        }
                        
                        function knightTourGuide(x,y,move,board,xMove,yMove,n){
                          let next_x, next_y;
                          if(move == n*n) return true
                          for(let k=0;k<n;k++){
                            // find next move using array
                            next_x = x + xMove[k];
                            next_y = y + yMove[k];
                            if(isSafe(next_x,next_y,board)){
                              board[next_x][next_y] = move
                            // check for next move
                            if(knightTourGuide(next_x, next_y, move + 1, board, xMove, yMove,n)) 
                              return true
                            else
                              board[next_x][next_y] = -1 // backtrack
                          }
                          }
                          return false
                        }
                        
                        
                        const n = 8
                        // A Knight can make maximum eight moves
                        
                        console.log("Initial Board")
                        const board = Array.from(Array(n),()=>Array(n).fill(-1))
                        
                        // we need to memorize below two arrays:
                        const xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
                        // 2 -> move 2 cells right
                        const yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
                        // -1 -> move one cell downwards
                        
                        print(board)
                        console.log("Total No. Of Cells : " + n*n)
                        const start = new Date().getTime()
                        knightTour(board,xMove,yMove,n)
                        const end = new Date().getTime()
                        console.log("Solved Board")
                        print(board)
                        console.log("Time Required For Execution: "+ (end-start)/1000 + "s")`,
                        output: `Initial Board
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        -1 -1 -1 -1 -1 -1 -1 -1
                        Total No. Of Cells : 64
                        Solved Board
                        0 59 38 33 30 17 8 63
                        37 34 31 60 9 62 29 16
                        58 1 36 39 32 27 18 7
                        35 48 41 26 61 10 15 28
                        42 57 2 49 40 23 6 19
                        47 50 45 54 25 20 11 14
                        56 43 52 3 22 13 24 5
                        51 46 55 44 53 4 21 12
                        Time Required For Execution: 23.616s`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "N Queens",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  The N Queen is the problem of placing N chess queens on an N×N
                  chessboard so that no two queens attack each other
                </Span>
                <Img left src={NQueensImg} />
                <p>
                  4 Queen’s Solution : <br />[ 0, 1, 0, 0]
                  <br /> [ 0, 0, 0, 1]
                  <br /> [ 1, 0, 0, 0]
                  <br />[ 0, 0, 1, 0]
                </p>
                <CodeEditor
                  options={{
                    title: "N Queens",
                    codes: {
                      Javascript: {
                        code: `const print = b => b.forEach(x=>console.log(x.join(" ")))

                        function isSafe(board,row,col,n){
                           let i,j
                          
                           // left side
                           for(let i=0;i<col;i++)
                            if(board[row][i]==1) return false
                        
                          // upper diagonal
                          for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
                            if (board[i][j] == 1) return false;
                          
                          // lower diagnoal  
                          for (i = row, j = col; j >= 0 && i < n; i++, j--)
                            if (board[i][j] == 1) return false;
                        
                           return true
                        }
                        
                        function solve(board,n){
                           return placeQueens(board,0,n)
                        }
                        
                        function placeQueens(board,col,n){
                          // if all columns are explored, the board is solved
                          if (col >= n) return true;
                        
                          for (let i = 0; i < n; i++) {
                            if (isSafe(board, i, col)) {
                              board[i][col] = 1;
                              // check for next col 
                              if (placeQueens(board, col + 1,n)) return true;
                              board[i][col] = 0; // backtrack
                              }
                            }
                          return false;
                        }
                        
                        const n = 4
                        
                        console.log("Initial Board ( 4 Queen's )")
                        const board = Array.from(Array(n),()=>Array(n).fill(0))
                        print(board)
                        const start = new Date().getTime()
                        solve(board,n)
                        const end = new Date().getTime()
                        console.log("Solved Board ( 4 Queen's )")
                        print(board)
                        console.log("Time Required For Execution: " + (end - start) / 1000 + "s")`,
                        output: `Initial Board ( 4 Queen's )
                        0 0 0 0
                        0 0 0 0
                        0 0 0 0
                        0 0 0 0
                        Solved Board ( 4 Queen's )
                        0 0 1 0
                        1 0 0 0
                        0 0 0 1
                        0 1 0 0
                        Time Required For Execution: 0s`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "N Queens 2",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Img left src={NQueensImg2} />
                <p>
                  The n-queens puzzle is the problem of placing n queens on an n
                  x n chessboard such that no two queens attack each other.
                  Given an integer n, return the number of distinct solutions to
                  the n-queens puzzle.
                </p>
                <CodeEditor
                  options={{
                    title: "N Queens 2",
                    codes: {
                      Javascript: {
                        code: `const print = b => b.forEach(x=>console.log(x.join(" ")))

                        function isSafe(board,row,col,n){
                           let i,j
                          
                           // right side
                           for(let i=0;i<col;i++)
                            if(board[row][i]==1) return false
                        
                          // upper diagonal
                          for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
                            if (board[i][j] == 1) return false;
                          
                          // lower diagnoal  
                          for (i = row, j = col; j >= 0 && i < n; i++, j--)
                            if (board[i][j] == 1) return false;
                        
                           return true
                        }
                        
                        function solve(board,n,result){
                           return placeQueens(board,0,n,result)
                        }
                        
                        function placeQueens(board,col,n,result){
                          // if all columns are explored, the board is solved
                          if (col == n){
                            result.push(board.map((cell,i)=>cell.indexOf(1)))
                            return true
                          };
                          
                          let res = false
                          
                          for (let i = 0; i < n; i++) {
                            if (isSafe(board, i, col,n)) {
                              board[i][col] = 1;
                              // check for next col 
                              res = placeQueens(board, col + 1,n,result) || res;
                              board[i][col] = 0; // backtrack
                              }
                            }
                          return res;
                        }
                        
                        const n = 4
                        
                        console.log("Initial Board ( N = 4 )")
                        const board = Array.from(Array(n),()=>Array(n).fill(0))
                        print(board)
                        const result = []
                        const start = new Date().getTime()
                        solve(board,n,result)
                        const end = new Date().getTime()
                        console.log("Solved Board(s) ( 4 * 4 )")
                        result.forEach((r,k)=>{
                          let temp = Array.from(Array(n),()=>Array(n).fill(0))
                          for(let index in r) temp[index][r[index]] = 1
                          console.log("Board " + (k+1)  + " :")
                          print(temp)
                        })
                        console.log("Time Required For Execution: " + (end - start) / 1000 + "s")
                        console.log("No. of distinct solutions : " + result.length)
                        `,
                        output: `Initial Board ( N = 4 )
                        0 0 0 0
                        0 0 0 0
                        0 0 0 0
                        0 0 0 0
                        Solved Board(s) ( 4 * 4 )
                        Board 1 :
                        0 0 1 0
                        1 0 0 0
                        0 0 0 1
                        0 1 0 0
                        Board 2 :
                        0 1 0 0
                        0 0 0 1
                        1 0 0 0
                        0 0 1 0
                        Time Required For Execution: 0.001s
                        No. of distinct solutions : 2`,
                      },
                    },
                  }}
                />
                <p>
                  <b>More Efficient Backtracking Solution ( Bit Masking )</b>
                </p>
                <CodeEditor
                  options={{
                    title: "N Queens 2 (Bit Masking)",
                    codes: {
                      Javascript: {
                        code: `const print = b => b.forEach(x => console.log(x.join(" ")))

                        function dec2bin(dec){
                          // a >>> b shifts a to b places right and changes all right bits to 0
                          return (dec >>> 0).toString(2);
                        }
                        
                        function bin2dec(bin){
                          return parseInt(bin, 2).toString(10);
                        }
                        
                        function solve(board,row,row_mask,left_diag_mask,right_diag_mask,result,n){
                          
                          const all_rows_filled = (1<<n) - 1 // 2^4 - 1 = 16 - 1 = 15
                          // 1 1 1 1 = 1 + 2 + 4 + 8 = 15 
                          // 1111 & 0000 = 0000 all queens are places
                        
                          if (row_mask == all_rows_filled) {
                            result.push(board.map((cell, i) => cell.indexOf(1)))
                            return;
                          }
                        
                          let safe = all_rows_filled & (~(row_mask | left_diag_mask | right_diag_mask)); 
                          while(safe > 0){
                        
                            // extracts right-most set(1) bit 
                            let p = safe & (-safe);
                            let col = parseInt(Math.log(p) / Math.log(2));
                            board[row][col] = 1;
                            // move to next row
                            solve(board, row + 1, row_mask | p,
                                               (left_diag_mask | p) << 1,
                                               (right_diag_mask | p) >> 1,result,n);
                            // move to next col
                            safe = safe & (safe - 1);
                            board[row][col] = 0; // backtrack
                          }
                        }
                        
                        const n = 4
                        console.log("Initial Board ( N = 4 )")
                        const board = Array.from(Array(n), () => Array(n).fill(0))
                        print(board)
                        const row_mask = 0,left_diag_mask = 0,right_diag_mask =0,row =0 
                        const result = []
                        const start = new Date().getTime()
                        solve(board,row,row_mask,left_diag_mask,right_diag_mask,result,n)
                        const end = new Date().getTime()
                        console.log("Solved Board(s) ( 4 * 4 )")
                        result.forEach((r, k) => {
                            let temp = Array.from(Array(n), () => Array(n).fill(0))
                            for (let index in r) temp[index][r[index]] = 1
                            console.log("Board " + (k + 1) + " :")
                            print(temp)
                        })
                        console.log("Time Required For Execution: " + (end - start) / 1000 + "s")
                        console.log("No. of distinct solutions : " + result.length)`,
                        output: `Initial Board ( N = 4 )
                        0 0 0 0
                        0 0 0 0
                        0 0 0 0
                        0 0 0 0
                        Solved Board(s) ( 4 * 4 )
                        Board 1 :
                        0 1 0 0
                        0 0 0 1
                        1 0 0 0
                        0 0 1 0
                        Board 2 :
                        0 0 1 0
                        1 0 0 0
                        0 0 0 1
                        0 1 0 0
                        Time Required For Execution: 0.001s
                        No. of distinct solutions : 2`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Rate in a maze",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Img left src={MazeImg} />
                <p>
                  A Maze is given as N*N binary matrix of blocks where source
                  block is the upper left most block i.e., maze[0][0] and
                  destination block is lower rightmost block i.e.,
                  maze[N-1][N-1]. A rat starts from source and has to reach the
                  destination. The rat can move only in two directions: forward
                  and down.In the maze matrix, 0 means the block is a dead end
                  and 1 means the block can be used in the path from source to
                  destination.
                </p>
                <CodeEditor
                  options={{
                    title: "Rate in a maze",
                    codes: {
                      Javascript: {
                        code: `const print = b => b.forEach(x => console.log(x.join(" ")))

                        function isSafe(maze,x,y,n)
                        {
                            // coordinate should lie within the matrix
                            return (x >= 0 && x < n && y >= 0
                                && y < n && maze[x][y] == 1);
                        }
                        
                        function solve(maze,n,result)
                        {
                           return traverseMaze(maze, 0, 0, result,n)
                        }
                        
                        function traverseMaze(maze,x,y,result,n)
                        {
                            // if rate is at the last cell return true
                            if (x == n - 1 && y == n - 1
                              && maze[x][y] == 1) {
                              result[x][y] = 1;
                              return true;
                            }
                            if (isSafe(maze, x, y,n)) {
                              if (result[x][y] == 1)
                                return false;
                              result[x][y] = 1; 
                              // move right
                              if (traverseMaze(maze, x + 1, y, result,n))
                                return true;
                              // move down
                              if (traverseMaze(maze, x, y + 1, result,n))
                                return true;
                              // move left
                              if (traverseMaze(maze, x - 1, y, result,n))
                                return true;
                              // move upwards
                              if (traverseMaze(maze, x, y - 1, result,n))
                                return true;
                              result[x][y] = 0; // backtrack
                              return false;
                            }
                            return false;
                        }
                        
                        console.log("Maze: ")
                        const maze=[
                          [ 1, 0, 0, 0 ],
                          [ 1, 1, 0, 1 ],
                          [ 0, 1, 0, 0 ],
                          [ 1, 1, 1, 1 ] 
                          ];
                        print(maze)
                        const n = maze.length;
                        const result = Array.from(Array(n),()=>Array(n).fill(0))
                        const start = new Date().getTime()
                        solve(maze,n,result);
                        const end = new Date().getTime()
                        console.log("Result: ")
                        print(result)
                        console.log("Execution Time: " + (end - start)/1000 +"s")
                        `,
                        output: `Maze: 
                        1 0 0 0
                        1 1 0 1
                        0 1 0 0
                        1 1 1 1
                        Result: 
                        1 0 0 0
                        1 1 0 0
                        0 1 0 0
                        0 1 1 1
                        Execution Time: 0.001s`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "String Permutations",
            content: (
              <>
                <Span>
                  <b>Naive Method</b>
                </Span>
                <Img left src={PermutationsImg} />
                <p>
                  Note : I missed a link between root node and one of its child
                  at below pic 😂
                </p>
                <CodeEditor
                  options={{
                    title: "String Permutations",
                    codes: {
                      Javascript: {
                        code: `function permuteNaive(str,l,r){  // T(n)
                          if(l==r)
                            console.log(str.map(x=>String.fromCharCode(x)).join(""))
                          else{
                            for(let i=l;i<=r;i++){ // n + 1
                              if(str[l]) [str[l],str[i]] = [str[i],str[l]] // 1
                              permuteNaive(str,l+1,r) // n * T(n-1) 
                              if(str[l]) [str[l],str[i]] = [str[i],str[l]] // 1
                            }
                          }
                        }
                        
                        function permuteBacktrack(str,answer){
                          if(str.length === 0) {
                            console.log(answer)
                            return
                          }
                          
                          for(let i = 0 ;i < str.length; i++){
                            let ch = str[i];
                            let left = str.substring(0, i);
                            let right = str.substring(i + 1);
                            let rest = left + right;
                            permuteBacktrack(rest, answer + ch);
                          }
                        }
                        
                        // Recurrence Relation : T(n) = n * T(n-1) + O(1)
                        // Time Complexity : n! * n
                        // There are n! permutations and it requires O(n) time to print 
                        // a permutation.
                        
                        const str = "abc"
                        const n = str.length
                        const strArr = str.split("").map(x=>x.charCodeAt(0)) 
                        console.log("Naive")
                        permuteNaive(strArr,0,n-1)
                        // we can't pass string by reference as it's immutable in js
                        console.log("Backtracking")
                        permuteBacktrack(str,"")                        
                        `,
                        output: `Naive
                        abc
                        acb
                        bac
                        bca
                        cba
                        cab
                        Backtracking
                        abc
                        acb
                        bac
                        bca
                        cab
                        cba`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Word Break",
            content: (
              <>
                <Span>
                  <b>Problem Statement</b>
                </Span>
                <Span>
                  Given a valid sentence without any spaces between the words
                  and a dictionary of valid English words, find all possible
                  ways to break the sentence in individual dictionary words.
                </Span>
                <Img left src={WordBreakImg} reduceH />
                <CodeEditor
                  options={{
                    title: "Word Break",
                    codes: {
                      Javascript: {
                        code: `function breakWords(n,str,words,res=""){
                          for(let i=1;i<=n;i++){
                            const prefix = str.substring(0,i)
                            if(words.includes(prefix)){ // isSafe
                                if(i==n){
                                res += prefix
                                console.log(res)
                                return
                                }
                                breakWords(n-i,str.substring(i),words,res + prefix) // backtrack
                            }
                          }
                        }
                        
                        const words = ['I','Love','❤️','My','India']
                        const str = "I❤️India"
                        const n = str.length
                        breakWords(n,str,words)
                        `,
                        output: `I❤️India`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Subsets of a set",
            content: (
              <>
                <Span>
                  <b> Problem Statement</b>
                </Span>
                <Span>Find all possible subsets of the given set</Span>
                <Img left src={SubsetsImg} reduceH />
                <CodeEditor
                  options={{
                    title: "Subsets of a set",
                    codes: {
                      Javascript: {
                        code: `function subsets(i_set,result,subset=[],index=0){
                          result.push(subset.slice()) // subset.slice() is necessary
                          for(let i=index;i<i_set.length;i++){
                             subset.push(i_set[i])
                             subsets(i_set,result,subset,i+1)
                             subset.pop() // backtrack
                          }
                          return
                         }
                         
                         const i_set = [1,2,3]
                         const result = []
                         console.log("Initial Set : ")
                         console.log(new Set(i_set))
                         const start = new Date().getTime()
                         subsets(i_set,result)
                         const end = new Date().getTime()
                         console.log("Resultant Subsets : ")
                         console.log(new Set(result))
                         console.log("Execution Time: " + (end-start)/1000 + "s")
                         `,
                        output: `Initial Set : 
                        Set { 1, 2, 3 }
                        Subsets : 
                        Set {
                          [],
                          [ 1 ],
                          [ 1, 2 ],
                          [ 1, 2, 3 ],
                          [ 1, 3 ],
                          [ 2 ],
                          [ 2, 3 ],
                          [ 3 ]
                        }
                        Execution Time: 0s`,
                      },
                    },
                  }}
                />
              </>
            ),
          },
        ],
        content: (
          <>
            <Span>
              It's simply used to solve problems recursively by trying to build
              the solution incrementally, removing those solutions that fail to
              solve the problem incrementally
            </Span>
            <Span>
              By being greedy, the algorithm matches the longest possible part.
              DP guarantees optimal solution but not the greedy problems
            </Span>
            <Span>It makes use of depth first search (stack)</Span>
            <Span>
              Backtracking algorithms, upon failure, keep exploring other
              possibilities. Such algorithms begin afresh from where they had
              originally started, hence they backtrack (go back to the starting
              point).
            </Span>
            <Span>It's used to solve:</Span>
            <Span>
              Decision Problem — In this, we search for a feasible solution.
            </Span>
            <Span>
              Optimization Problem — In this, we search for the best solution.
            </Span>
            <Span>
              Enumeration Problem — In this, we find all feasible solutions.
            </Span>
            <Span>Examples:</Span>
            <Span>
              1. While solving sudoku, if we find that the current digit cannot
              provide us the solution. We simply backtrack and try next digit.
              This drops a set of permutations
            </Span>
            <Span>
              2. To get to an address, we go to a well-known landmark, then try
              the first lane, for example. If there is no success, we backtrack
              to the landmark again and try another lane (we may ask a passerby
              for help). We keep doing this until we get to the address or give
              up the search altogether.
            </Span>
            <Span>
              <b>Backtracking Vs Branch And Bound</b>
            </Span>
            <Span>
              1. Backtracking is used to find all possible solutions available
              to a problem.When it realises that it has made a bad choice, it
              undoes the last choice by backing it up. It searches the state
              space tree until it has found a solution for the
              problem.Branch-and-Bound is used to solve optimisation problems.It
              completely searches the state space tree to get optimal solution.
              It abondones pre-solution if it has a better optimal solution.
            </Span>
            <Span>
              2. Backtracking traverses the tree in dfs whereas branch and bound
              traverses the tree in any manner dfs or bfs
            </Span>
            <Span>
              3.Backtracking involves feasibility function. Branch-and-Bound
              involves a bounding function.
            </Span>
            <Span>4. Backtracking is more efficient.</Span>
            <Span>
              5. Backtracking is used in solving N-Queen Problem, Sum of subset.
              Branch and bound is used in solving Knapsack Problem, Travelling
              Salesman Problem.
            </Span>
          </>
        ),
      },
      branchAndBound: {
        title: "Branch And Bound",
        content: (
          <>
            <Span>
              Branch-and-Bound is used to solve optimisation problems.It
              completely searches the state space tree to get optimal solution.
              It abondones pre-solution if it has a better optimal solution..
              These problems are typically exponential in terms of time
              complexity and may require exploring all possible permutations in
              worst case
            </Span>
            <Span>
              The backtracking based solution works better than brute force by
              ignoring infeasible solutions. We can do better (than
              backtracking) if we know a bound on best possible solution subtree
              rooted with every node. If the best in subtree is worse than
              current best, we can simply ignore this node and its subtrees. So
              we compute bound (best solution) for every node and compare the
              bound with current best solution before exploring the node.
            </Span>
            <Span>
              Backtracking is used to find all possible solutions available to a
              problem.When it realises that it has made a bad choice, it undoes
              the last choice by backing it up. It searches the state space tree
              until it has found a solution for the problem.Branch-and-Bound is
              used to solve optimisation problems.It completely searches the
              state space tree to get optimal solution. It abondones
              pre-solution if it has a better optimal solution.
            </Span>
            <Span>Example:</Span>
            <p>
              <b>0-1 Knapsack</b>
            </p>
            <CodeEditor
              options={{
                title: "0-1 Knapsack",
                codes: {
                  "C++": {
                    code: `#include <bits/stdc++.h>
                    using namespace std;
                    struct Item
                    {
                      float weight;
                      int value;
                    };
                    
                    struct Node
                    {
                      int level, profit, bound;
                      float weight;
                    };
                    
                    bool cmp(Item a, Item b)
                    {
                      double r1 = (double)a.value / a.weight;
                      double r2 = (double)b.value / b.weight;
                      return r1 > r2;
                    }
                    
                    int bound(Node u, int n, int W, Item arr[])
                    {
                      if (u.weight >= W)
                        return 0;
                    
                      int profit_bound = u.profit;
                      int j = u.level + 1;
                      int totweight = u.weight;
                      while ((j < n) && (totweight + arr[j].weight <= W))
                      {
                        totweight += arr[j].weight;
                        profit_bound += arr[j].value;
                        j++;
                      }
                      if (j < n)
                        profit_bound += (W - totweight) * arr[j].value /
                                        arr[j].weight;
                    
                      return profit_bound;
                    }
                    
                    int knapsack(int W, Item arr[], int n)
                    {
                      sort(arr, arr + n, cmp);
                    
                      queue<Node> Q;
                      Node u, v;
                    
                      u.level = -1;
                      u.profit = u.weight = 0;
                      Q.push(u);
                      int maxProfit = 0;
                      while (!Q.empty())
                      {
                        u = Q.front();
                        Q.pop();
                    
                        if (u.level == -1)
                          v.level = 0;
                    
                        if (u.level == n-1)
                          continue;
                    
                        v.level = u.level + 1;
                        v.weight = u.weight + arr[v.level].weight;
                        v.profit = u.profit + arr[v.level].value;
                        if (v.weight <= W && v.profit > maxProfit)
                          maxProfit = v.profit;
                        v.bound = bound(v, n, W, arr);
                        if (v.bound > maxProfit)
                          Q.push(v);
                        v.weight = u.weight;
                        v.profit = u.profit;
                        v.bound = bound(v, n, W, arr);
                        if (v.bound > maxProfit)
                          Q.push(v);
                      }
                    
                      return maxProfit;
                    }
                    
                    int main()
                    {
                      int W = 10; 
                      Item arr[] = {{2, 40}, {3.14, 50}, {1.98, 100},
                            {5, 95}, {3, 30}};
                      int n = sizeof(arr) / sizeof(arr[0]);
                    
                      cout << "Maximum possible profit = "
                        << knapsack(W, arr, n);
                    
                      return 0;
                    }
                    `,
                    output: `Maximum possible profit = 235`,
                  },
                },
              }}
            />
          </>
        ),
      },
      randomized: {
        title: "Randomized",
        content: (
          <>
            <Span>
              An algorithm that uses random numbers to decide what to do next
              anywhere in its logic is called Randomized Algorithm. For example,
              in Randomized Quick Sort, we use random number to pick the next
              pivot (or we randomly shuffle the array). Typically, this
              randomness is used to reduce time complexity or space complexity
              in other standard algorithms.,
            </Span>
            <Span>
              Example: Generate integer from 1 to 7 with equal probability
            </Span>
            <Span>Formula R: 5*( random() -1 ) + random() </Span>
            <p>
              Suppose the specified function is random(), which generates random
              numbers from 1 to 5 with equal probability. The idea is to use the
              expression 5 × (random() - 1) + random() which uniformly produces
              random numbers in the range [1–25]. So if we exclude the
              possibility of the random number being one among [8–25] by
              repeating the procedure, we are left with numbers between 1 and 7
              having equivalent probability.
            </p>
            <CodeEditor
              options={{
                title: "Randomized",
                output: null,
                codes: {
                  C: {
                    code: `
                    #include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
 
int random1() {
    return (rand() % 5) + 1;
}
int generate()
{
    int r;
    do {
        r = 5 * (random1() - 1) + random1();
    } while (r > 7);
 
    return r;
}

// To minimize the total number of calls to the random() function, stop the while loop at r <= 21 and use the modulo operator, as shown below:

int generate1()
{
    int r;
    do {
        r = 5 * (random1() - 1) + random1();
    } while (r > 21);
 
    return (r % 7) + 1;
}
 
int main(void)
{
    srand(time(NULL));
 
    int count[8];
    memset(count, 0, sizeof count);
    for (int i = 1; i <= 1000000; i++)
    {
        int val = generate();
        count[val]++;
    }
 
    for (int i = 1; i <= 7; i++) {
        printf("%d ~ %0.2f\n", i, count[i]/10000.0);
    }
 
    return 0;
}`,
                    output: `
                    1 ~ 14.23
2 ~ 14.34
3 ~ 14.27
4 ~ 14.28
5 ~ 14.32
6 ~ 14.28
7 ~ 14.28
                    `,
                  },
                  Python: {
                    code: `from random import randint
def generate():
    while True:
        x = randint(1, 5)
        y = randint(1, 5)
        r = 5 * (x - 1) + y
        if r <= 7:
            break
    return r
  
if __name__ == '__main__':
    count = [0] * 8
    for i in range(1000000):
        val = generate()
        count[val] = count[val] + 1
    for i in range(1, 8):
        print(f'{i}~{count[i]/10000}%')
                     `,
                    output: `
                    1~14.2294%
2~14.3086%
3~14.2761%
4~14.2849%
5~14.3211%
6~14.3153%
7~14.2646%
                    `,
                  },
                },
              }}
            />
          </>
        ),
      },
      "np-hard-vs-np-complete": {
        title: "Deterministic and Non Deterministic Algorithms",
        content: (
          <>
            <Span>
              <b>Decidable Problems</b>
            </Span>
            <Span>
              An undecidable problem is a problem for which there is no
              algorithm that can solve it.
            </Span>
            <Span>
              Example: The halting problem can be simply stated as follows -
              Given an input and a Turing machine, there is no algorithm to
              determine if the machine will eventually halt. (a suspension of
              movement or activity, typically a temporary one. )
            </Span>
            <Span>
              <b>Polynomial and Non - polynomial time algorithm</b>
            </Span>
            <Span>
              If the complexity of an algorithm is expressed as O (p(n)) where
              p(n) is some polynomial of n, then the algorithm is said to be a
              polynomial time algorithm. Generally, polynomial time algorithms
              are tractable. Any algorithm with a time complexity that cannot be
              bounded by such bound then this is known as non - polynomial
              algorithms
            </Span>
            <Span>
              <b>Deterministic and Non deterministic algorithms:</b>
            </Span>
            <Span>
              In deterministic algorithm, for a given particular input, the
              computer will always produce the same output going through the
              same states but in case of non-deterministic algorithm, for the
              same input, the compiler may produce different output in different
              runs. In fact non-deterministic algorithms can’t solve the problem
              in polynomial time and can’t determine what is the next step. The
              non-deterministic algorithms can show different behaviors for the
              same input on different execution and there is a degree of
              randomness to it and they cannot determine the next step of
              execution due to more than one path the algorithm can take.
            </Span>
            <Span>
              The algorithms in which the result of every algorithm is uniquely
              defined are known as the deterministic algorithm. In the
              theoretical framework, we can remove this restriction on the
              outcome of every operation. We can allow algorithms to contain
              operations whose outcomes are not uniquely defined but are limited
              to specified sets of possibilities. The machine executing each
              operation is allowed to choose any one of these outcomes subjects
              to a determination condition to be defined later. This leads to
              the concept of a Non-deterministic algorithm.
            </Span>
            <Span>
              There are three new functions which specify such types of
              algorithms are:
              <br />
              Choice(S) arbitrarily chooses one of the elements of the set S.
              <br />
              Failure() signals an unsuccessful completion.
              <br />
              Success() signals a successful completion.
            </Span>
            <Span>
              The assignments statement x: Choice (1, n) could result in x being
              assigned any one of the integers in the range [1, n]. There is no
              rule specifying how this choice is to be made. The Failure() and
              the Success() signals are used to define a computation of the
              algorithm. These statements cannot be used to effect a return.
              Whenever there is a set of the choices that lead to a successful
              completion, then one such set of the choices is always made and
              the algorithm terminates successfully. A non - deterministic
              algorithm terminates unsuccessfully if and only if there exists no
              set of the choices leading to a success signal. The computing
              times for the Choices, the Success, and the Failure are taken to
              be O (1). A machine capable of executing a non - deterministic
              algorithm in this way is called a non – deterministic machine.
            </Span>
            <Span>
              Problem Statement : Search an element x on A[1:n] where n&gt;=1,
              on successful search return j if a[j] is equals to x otherwise
              return 0.
              <br />
              Non-deterministic Algorithm for this problem :
              <br />
              j= choice(a, n)
              <br /> if(A[j]==x) <br />
              then [ write(j); success(); ]
              <br />
              write(0); failure();
            </Span>
            <Span>Deterministic vs Non Deterministic algorithms</Span>
            <Span>
              1. For a particular input the computer, deterministic algorithm
              will give always same output whereas for a particular input the
              computer, non deterministic algorithm will give different output
              on different execution.
            </Span>
            <Span>
              2. Deterministic algorithm can solve the problem in polynomial
              time whereas non-deterministic algorithm can’t solve the problem
              in polynomial time.
            </Span>
            <Span>
              3. Deterministic algorithm can determine the next step of
              execution whereas non-deterministic algorithm cannot determine the
              next step of execution due to more than one path the algorithm can
              take.
            </Span>
            <Span>
              The NP problems are set of problems whose solutions are hard to
              find but easy to verify and are solved by Non-Deterministic
              Machine in polynomial time.
            </Span>
            <Span>
              <b>NP-Hard Problem</b>
            </Span>
            <Span>
              A Problem X is NP-Hard if there is an NP-Complete problem Y, such
              that Y is reducible to X in polynomial time. NP-Hard problems are
              as hard as NP-Complete problems. NP-Hard Problem need not be in NP
              class.
            </Span>
            <Span>Example: Halting problem, Vertex cover problem, etc.</Span>
            <Span>
              <b>NP-Complete Problem</b>
            </Span>
            <Span>
              A problem X is NP-Complete if there is an NP problem Y, such that
              Y is reducible to X in polynomial time. NP-Complete problems are
              as hard as NP problems. A problem is NP-Complete if it is a part
              of both NP and NP-Hard Problem. A non-deterministic Turing machine
              can solve NP-Complete problem in polynomial time.
            </Span>
            <Span>
              Example: Determine whether a graph has a Hamiltonian cycle,
              Determine whether a Boolean formula is satisfiable or not,
              Circuit-satisfiability problem, etc.
            </Span>
            <Span>NP-Hard Vs NP-Complete Problem</Span>
            <Span>
              1. NP-Hard problems(say X) can be solved if and only if there is a
              NP-Complete problem(say Y) that can be reducible into X in
              polynomial time.NP-Complete problems can be solved by a
              non-deterministic Algorithm/Turing Machine in polynomial time.
            </Span>
            <Span>
              2. To solve NP-hard problem, it do not have to be in NP .To solve
              NP-Complete problem, it must be both NP and NP-hard problems.
            </Span>
            <Span>
              3.NP-Hard not have to be a Decision problem. problem. NP-Complete
              is exclusively a Decision problem.
            </Span>
          </>
        ),
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
        content: (
          <>
            <Span>
              <b>Q1. Two Sum</b>
            </Span>
            <Span>
              <b>Problem Statement</b>
            </Span>
            <Span>
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that they add up to target.
              <br />
              You may assume that each input would have exactly one solution,
              and you may not use the same element twice.
              <br />
              You can return the answer in any order
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: nums = [2,7,11,15], target = 9 <br />
              Output: [0,1] <br />
              Output: Because nums[0] + nums[1] == 9, we return [0, 1].
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: nums = [3,2,4], target = 6 <br />
              Output: [1,2]
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <Span>
              2 &lt;= nums.length &lt;= 104 <br />
              -109 &lt;= nums[i] &lt;= 109 <br />
              -109 &lt;= target &lt;= 109 <br />
              Only one valid answer exists.
            </Span>
            <CodeEditor
              options={{
                title: "Q1. Two Sum(HashMap)",
                output: `[ 0, 1 ]`,
                codes: {
                  Javascript: {
                    code: `var twoSum = function(nums, target){
                      const map = {}
                      for(let i in nums){
                        let diff = target - nums[i]
                        if(map[diff])
                        return [+map[diff],+i]
                        else
                        map[nums[i]] = i
                      }
                      }
                      twoSum([3,3],6)
                      `,
                  },
                  Java: {
                    code: `package com.programming;
                    import java.util.*;
                    
                    public class TwoSum {
                    
                            private static int[] twoSum(int[] nums, int target) {
                                Map<Integer, Integer> numMap = new HashMap<>();
                                for (int i = 0; i < nums.length; i++) {
                                    int complement = target - nums[i];
                                    if (numMap.containsKey(complement)) {
                                        return new int[] { numMap.get(complement), i };
                                    } else {
                                        numMap.put(nums[i], i);
                                    }
                                }
                                return new int[] {};
                            }
                    
                    
                        public static void main(String[] args) {
                            int ans[] = twoSum(new int[]{1,5,4}, 5);
                            Arrays.stream(ans).forEach(System.out::println);
                        }
                    
                    }
                    `,
                  },
                  "C++": {
                    code: `#include <bits/stdc++.h>
                    #include <iterator> 
                    using namespace std;
                    
                    class Solution
                    {
                    // O(n)
                    public:
                      static void twoSum(vector<int>& nums,int target){
                            unordered_map<int,int> m;
                            int arr[]={};
                            for(int i=0;i<nums.size();i++){
                                int temp  = target - nums.at(i);
                                if(m.find(temp) != m.end()){
                                  cout << "[ " << m[temp] << " , " << i << " ]";
                                }
                                m[nums[i]] = i;
                            }
                      };
                    };
                    
                    int main(int argc,char const *argv[]){
                    
                    #ifndef ONLINE_JUDGE
                        freopen("ip.in","r",stdin);
                        freopen("op.in","w",stdout);
                    #endif 
                       // string s;
                       // getline(cin,s);
                        std::vector<int> v {1,2,3};
                        Solution::twoSum(v,5);
                      return 0;
                    }
                    `,
                  },
                  Python: {
                    code: `def twoSum(a, b):
    x = {}
    i = 0
    while i < len(a):
        diff = b - a[i]
        if diff in x:
            return [x[diff],i]
        x[a[i]] = i
        i += 1


a = [3, 4, 5]

if __name__ == '__main__':
    print(twoSum(a, 8)) 
                `,
                  },
                  Kotlin: {
                    code: `fun twoSum(a: IntArray, b:Int): List<Int?>? {
                      var x = mutableMapOf<Int,Int>();
                      for((i,v) in a.withIndex()){
                          if(x.containsKey(b -a[i])){
                              return listOf(x[b -a[i]],i)
                          }
                          x[v] = i
                      }
                      return null
                  }
                  
                  fun main(){
                      val arr = intArrayOf(3,4,1);
                      val ans =twoSum(arr, 5)
                      print(ans)
                  }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q2: {
        title: "Q2. Add Two Numbers",
        content: (
          <>
            <Span>
              <b>Q2. Add Two Numbers</b>
            </Span>
            <Span>
              You are given two non-empty linked lists representing two
              non-negative integers. The digits are stored in reverse order, and
              each of their nodes contains a single digit. Add the two numbers
              and return the sum as a linked list. You may assume the two
              numbers do not contain any leading zero, except the number 0
              itself.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: l1 = [2,4,3], l2 = [5,6,4] <br />
              Output: [7,0,8] <br />
              Explanation: 342 + 465 = 807.
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <Span>
              The number of nodes in each linked list is in the range [1, 100].{" "}
              <br />
              0 &lt;= Node.val &lt;= 9 <br />
              It is guaranteed that the list represents a number that does not
              have leading zeros.
            </Span>
            <Img src={LeetCodeQ2} left reduceH />
            <CodeEditor
              options={{
                title: "Q2. Add Two Numbers",
                codes: {
                  Javascript: {
                    code: `function ListNode(val, next) {
                      this.val = (val===undefined ? 0 : val)
                      this.next = (next===undefined ? null : next)
                    }
                    
                    /**
                     * @param {ListNode} l1
                     * @param {ListNode} l2
                     * @return {ListNode}
                     */
                    
                    var addTwoNumbers = function(l1, l2) {
                      let carry = val1 = val2 = 0
                      console.log(l1,l2)
                      let curr = new ListNode()
                      let result = curr
                      while(l1!=null || l2!= null || carry != 0){
                         if(l1){
                           val1 = l1.val
                           l1=l1.next
                         }else{
                           val1 = 0
                         }  
                         if(l2){
                           val2 = l2.val
                           l2=l2.next
                         }else{
                           val2 = 0
                         }
                         carry += (val1 + val2)
                         curr.next = new ListNode(carry%10)
                         curr = curr.next
                         carry= parseInt(carry/10)   
                      }
                      return result.next
                    };
                    
                    // driver code
                    const num1 = [2,4,3]
                    const num2 = [5,6,4]
                    const l1 = new ListNode(2)
                    l1.next = new ListNode(4)
                    l1.next.next = new ListNode(3)
                    const l2 = new ListNode(5)
                    l2.next = new ListNode(6)
                    l2.next.next = new ListNode(4)
                    addTwoNumbers(l1,l2)`,
                    output: `ListNode {
                      val: 2,
                      next: ListNode { val: 4, next: ListNode { val: 3, next: null } }
                    } ListNode {
                      val: 5,
                      next: ListNode { val: 6, next: ListNode { val: 4, next: null } }
                    }
                    ListNode {
                      val: 7,
                      next: ListNode { val: 0, next: ListNode { val: 8, next: null } }
                    }`,
                  },
                  "C++": {
                    code: `#include<iostream>

                    using namespace std;
                    
                    struct ListNode {
                        int val;
                        ListNode *next;
                        ListNode() : val(0), next(nullptr) {}
                        ListNode(int x) : val(x), next(nullptr) {}
                        ListNode(int x, ListNode *next) : val(x), next(next) {}
                    };
                    
                    class Solution {
                    public:
                        ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
                            int v1=0;
                            int v2 =0;
                            int carry=0;
                            
                            ListNode* current= new ListNode(0);
                            ListNode *ans= current;
                            while(l1!=nullptr || l2!=nullptr || carry!=0){
                                
                                if(l1!=nullptr){
                                    v1=l1->val;
                                    l1=l1->next;
                                }else{
                                    v1=0;
                                }
                                
                                if(l2!=nullptr){
                                    v2=l2->val;
                                    l2=l2->next;
                                }else{
                                    v2=0;
                                }
                                
                                carry+=(v1+v2);
                                
                                current->next= new ListNode (carry%10);
                                current=current->next;
                                carry/=10;
                                
                            }
                            return ans->next;
                        }
                    };
                    
                    int main(){
                     Solution s;
                     ListNode* l1= new ListNode(2);
                     l1->next = new ListNode(4);
                     l1->next->next = new ListNode(3);
                     ListNode* l2= new ListNode(5);
                     l2->next = new ListNode(6);
                     l2->next->next = new ListNode(4);
                     ListNode* result =  s.addTwoNumbers(l1,l2);
                     ListNode* temp;
                     temp = result;
                     while(temp!=nullptr){
                       cout << temp -> val << " ";
                       temp = temp -> next;
                     }
                     cout<< endl;
                     return 0;
                    }`,
                    output: `7 0 8 `,
                  },
                },
              }}
            />
          </>
        ),
      },
      q3: {
        title: "Q3. Longest Substring Without Repeating Characters",
        content: (
          <>
            <Span>
              <b>Q3. Longest Substring Without Repeating Characters</b>
            </Span>
            <Span>
              Given a string s, find the length of the longest substring without
              repeating characters.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: s = "abcabcbb" <br />
              Output: 3 <br />
              Explanation: The answer is "abc", with the length of 3.
            </Span>
            <Span>
              <b> Example 2:</b>
            </Span>
            <Span>
              Input: s = "bbbbb" <br />
              Output: 1 <br />
              Explanation: The answer is "b", with the length of 1.
            </Span>
            <Span>
              <b> Example 3:</b>
            </Span>
            <Span>
              Input: s = "pwwkew" Output: 3 Explanation: The answer is "wke",
              with the length of 3. Notice that the answer must be a substring,
              "pwke" is a subsequence and not a substring.
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              0 &lt;= s.length &lt;= 5 * 104 <br />s consists of English
              letters, digits, symbols and spaces.
            </p>
            <CodeEditor
              options={{
                title: "Q3. Longest Substring Without Repeating Characters",
                output: `abcd`,
                codes: {
                  Javascript: {
                    code: `function convert(str) {
                      var current = 0,
                        st = 0,
                        max = 0,
                        start = 0;
                      let i;
                      var obj = {};
                      for (i = 0; i < str.length; i++) {
                        if (!obj[str[i]]) {
                          obj[str[i]] = i;
                        } else {
                          if (obj[str[i]] >= st) {
                            current = i - st;
                            if (max < current) {
                              max = current;
                              start = st;
                            }
                            st = obj[str[i]] + 1;
                          }
                          obj[str[i]] = i;
                        }
                      }
                      if (max < i - st) {
                        max = i - st;
                        start = st;
                      }
                    
                      return str.substring(start, start + max);
                    }
                    
                    const str = "abcdefhgjfghnbahggjhh";
                    console.log(convert(str));
                    `,
                  },
                  Java: {
                    code: `import java.util.*;

                    class Main {
                    
                      public static String convert(String str){
                        int st=0,start=0,max=0,current=0;
                        HashMap<Character,Integer> pos = new HashMap<>();
                        int i;
                        for(i=0;i<str.length();i++){
                        if(!pos.containsKey(str.charAt(i))){
                           pos.put(str.charAt(i),i);
                        }else{
                            if(pos.get(str.charAt(i))>=st){
                              current = i - st;
                              if(max < current){
                                 max = current;
                                 start = st;
                              }
                              st = pos.get(str.charAt(i)) + 1;
                            }
                           pos.put(str.charAt(i),i);
                        }
                        }
                    if (max < i - st) {
                      max = i - st;
                      start = st;
                    }
                    return str.substring(start,start+max);
                      }
                    
                      public static void main(String[] args) {
                        String x ="abcderffaccfcvccf";
                        System.out.println(convert(x));
                      }
                    
                    }`,
                  },
                  Python: {
                    code: `
def convert(str):
  current=0
  max=0
  i=0
  start=0
  st=0
  obj={}
  for i in range(0,len(str)):
    if not str[i] in obj:
      obj[str[i]]=i
    else :
      if obj[str[i]] >= st:
        current = i - st
        if max < current:
          max= current
          start = st
        st = obj[str[i]]+1
      obj[str[i]]=i
    if max < i -st:
      max = i - st
      start = st
      
  return str[start:start+max]
   
str = "abcdgdkjhjacaiachius"
print(convert(str))`,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <bits/stdc++.h>
                    using namespace std;
                    
                    string longest(string str){
                    
                    unordered_map<char,int> pos;
                    
                    int start,st=0,current,max=0;
                    
                    
                    // start represent's current location where new substring is to be inspected.
                    
                    // st represent's current location
                    
                    // current represent's present distance 
                    
                    int i;
                    
                    for(i=0;i<str.length();i++){
                       if(pos.find(str[i]) == pos.end()){
                          pos[str[i]]=i;
                          // if it's not existing
                       }else{
                          if(pos[str[i]] >= st){
                            current = i - st;
                            if(max<current){
                              max=current;
                              start=st;
                            }
                            st = pos[str[i]] + 1;   
                          }
                          pos[str[i]] = i;
                       }
                    }
                    if (max < i - st) {
                      max = i - st;
                      start = st;
                    }
                    return str.substr(start,start+max);
                    }
                    
                    int main() {
                      string str="abcdbabsbd";
                      cout<< longest(str)<<endl;
                      return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `package com.programming

                    fun convert(str: String): String {
                        var st=0;
                        var start=0;
                        var max=0;
                        var current=0;
                        var pos = mutableMapOf<Char,Int>();
                        var i:Int=0;
                        for(i in 0 until str.length-1){
                            if(!pos.containsKey(str[i])){
                                pos[str[i]]=i;
                            }else{
                                if(pos[str[i]]!! >= st){
                                    current = i - st;
                                    if(current>max){
                                        max=current;
                                        start=st;
                                    }
                                    st = pos[str[i]]?.plus(1) ?: 0;
                                }
                                pos[str[i]]=i;
                            }
                        }
                        if(max<i-st){
                            max=i-st;
                            start=st;
                        }
                        return str.substring(start,start+max)
                    }
                    
                    fun main(){
                        val str:String = "abcderffaccfcvccf";
                        print(convert(str))
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q4: {
        title: "Q4. Median Of Two Sorted Arrays",
        content: (
          <>
            <Span>
              <b>Q4. Median of Two Sorted Arrays</b>
            </Span>
            <Span>
              Given two sorted arrays nums1 and nums2 of size m and n
              respectively, return the median of the two sorted arrays.
            </Span>
            <Span>The overall run time complexity should be O(log (m+n)).</Span>
            <Span>
              <b> Example 1:</b>
            </Span>
            <Span>
              Input: nums1 = [1,3], nums2 = [2] <br />
              Output: 2.00000 <br />
              Explanation: merged array = [1,2,3] and median is 2.
            </Span>
            <Span>
              <b> Example 2:</b>
            </Span>
            <Span>
              Input: nums1 = [1,2], nums2 = [3,4] <br />
              Output: 2.50000 <br />
              Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 =
              2.5.
            </Span>
            <Span>
              <b>Constraints</b>
            </Span>
            <p>
              nums1.length == m <br />
              nums2.length == n <br />
              0 &lt;= m &lt;= 1000 <br />
              0 &lt;= n &lt;= 1000 <br />
              1 &lt;= m + n &lt;= 2000 <br />
              -106 &lt;= nums1[i], nums2[i] &lt;= 106
            </p>
            <CodeEditor
              options={{
                title: "Q4. Median of Two Sorted Arrays",
                output: "2.5",
                codes: {
                  Javascript: {
                    code: `/**
                    * @param {number[]} nums1
                    * @param {number[]} nums2
                    * @return {number}
                    */
                   
                   var findMedianSortedArrays = function(nums1, nums2) {
                   const list = [...nums1, ...nums2];
                   list.sort((a,b)=>a-b);
                   var median;
                   var mid;
                   mid = parseInt(list.length / 2);
                   if (list.length % 2 != 0) {
                     median = list[mid];
                   } else {
                     median = (list[mid - 1] + list[mid]) / 2;
                   }
                   return median;
                   };
                   
                   findMedianSortedArrays([3],[-2, -1])`,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <vector>
                    #include <algorithm>
                    
                    using namespace std;
                    
                    class Solution {
                    public:
                        static double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
                             vector<int> vec(nums1);
                             vec.insert(vec.begin(),nums2.begin(),nums2.end());
                             sort(vec.begin(),vec.end());
                             double median;
                             int mid; 
                             if(vec.size()==1){
                               return vec[0];
                             }
                             mid = (int) vec.size()/2.0;
                             if(vec.size()%2!=0){
                                median = vec[mid];
                             }else{
                                median = (vec[mid-1]+vec[mid])/2.0;
                             }
                             return median;
                        }
                    };
                    
                    int main() {
                      vector<int> v1{};
                      vector<int> v2{2,3};
                      cout<<Solution::findMedianSortedArrays(v1,v2)<<endl;
                      return 0;
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q5: {
        title: "Q5. Longest Palindromic Substring",
        content: (
          <>
            <Span>
              <b>Q5. Longest Palindromic Substring</b>
            </Span>
            <Span>
              Given a string s, return the longest palindromic substring in s.
            </Span>

            <Span>
              <b>Example 1:</b>
            </Span>

            <Span>
              Input: s = "babad" <br />
              Output: "bab" <br />
              Explanation: "aba" is also a valid answer.
            </Span>

            <Span>
              <b>Example 2:</b>
            </Span>

            <Span>
              Input: s = "cbbd" <br />
              Output: "bb"
            </Span>

            <Span>
              <b>Constraints:</b>
            </Span>

            <Span>
              1 &lt;= s.length &lt;= 1000 <br />s consist of only digits and
              English letters.
            </Span>

            <CodeEditor
              options={{
                title: "Q5. Longest Palindromic Substring",
                output: `bab`,
                codes: {
                  Javascript: {
                    code: `/**
                    * @param {string} s
                    * @return {string}
                    */
                   
                   var longestPalindrome = function(s) {
                       let n = s.length;
                       let lookupTab = Array.from(Array(n),()=>Array(n).fill(false));
                       let maxLength = 1;
                       for (let i = 0; i < n; ++i)
                         lookupTab[i][i] = true;
                       let start = 0;
                       for (let i = 0; i < n - 1; ++i)
                       {
                         if (s[i] == s[i + 1])
                         {
                           lookupTab[i][i + 1] = true;
                           start = i;
                           maxLength = 2;
                         }
                       }
                       for (let k = 3; k <= n; ++k) {
                         for (let i = 0; i < n - k + 1; ++i)
                         {
                           let j = i + k - 1;
                           if (lookupTab[i + 1][j - 1]
                             && s[i] == s[j]) {
                             lookupTab[i][j] = true;
                             if (k > maxLength) {
                               start = i;
                               maxLength = k;
                             }
                           }
                         }
                       }
                       return s.substring(start, start+maxLength);
                   }
                     
                   console.log(longestPalindrome("babad"));
                   `,
                  },
                },
              }}
            />
          </>
        ),
      },
      q6: {
        title: "Q6. ZigZag Conversion",
        content: (
          <>
            <Span>
              <b>Q6. ZigZag Conversion</b>
            </Span>
            <>
              <Span>
                The string "PAYPALISHIRING" is written in a zigzag pattern on a
                given number of rows like this: (you may want to display this
                pattern in a fixed font for better legibility)
              </Span>
              <Span>
                P -- A -- H -- N <br />
                A P L S I I G <br />Y -- I -- R
              </Span>
              <Span>
                And then read line by line: "PAHNAPLSIIGYIR" <br />
                Write the code that will take a string and make this conversion
                given a number of rows: <br />
                string convert(string s, int numRows);
              </Span>
              <Span>
                <b>Example 1:</b>
              </Span>
              <Span>
                Input: s = "PAYPALISHIRING", numRows = 3 <br />
                Output: "PAHNAPLSIIGYIR"
              </Span>
              <Span>
                <b>Example 3:</b>
              </Span>
              <Span>
                Input: s = "A", numRows = 1 <br />
                Output: "A"
              </Span>
              <Span>
                <b>Constraints</b>
              </Span>
              <p>
                1 &lt;= s.length &lt;= 1000 <br />
                s consists of English letters (lower-case and upper-case), ','
                and '.'. <br />1 &lt;= numRows &lt;= 1000
              </p>
              <CodeEditor
                options={{
                  title: `Q6. ZigZag Conversion`,
                  output: `PAHNAPLSIIGYIR`,
                  codes: {
                    Javascript: {
                      code: `/**
                      * @param {string} s
                      * @param {number} numRows
                      * @return {string}
                      */
                     var convert = function(s, numRows) {
                       if (numRows === 1 || s.length < numRows) {
                         return s;
                       }
                       let rows = Array.from(Array(numRows), () => []);
                       let currentRow = 0;
                       let reverse = false;
                       let result = "";
                     
                       for (let i = 0; i < s.length; i++) {
                         rows[currentRow].push(s[i]);
                         if (reverse === false) {
                           currentRow++;
                         } else {
                           currentRow--;
                         }
                     
                         if (currentRow === numRows - 1 || currentRow === 0) {
                           reverse = !reverse;
                         }
                       }
                     
                       rows.forEach((row) => {
                         result += row.join("");
                       });
                     
                       return result;
                     }
                     
                     convert("PAYPALISHIRING", 3);
                     `,
                    },
                    Java: {
                      code: `import java.util.ArrayList;
                      import java.util.Collections;
                      import java.util.List;
                      
                      class Main {
                      
                          public static String convert(String s,int numRows){
                              if(numRows==0||s.length()<numRows){
                                  return s;
                              }
                              int currentRow=0;
                              boolean reverse=false;
                              String result="";
                              List<ArrayList<Character>> rows = new ArrayList<ArrayList<Character>>();
                              for(int i=0;i<numRows;i++){
                                 rows.addAll(Collections.singleton(new ArrayList<Character>()));
                              }
                              
                              for (int i=0;i<s.length();i++){
                                  rows.get(currentRow).add(s.charAt(i));
                                  if(!reverse){
                                      currentRow++;
                                  }else{
                                      currentRow--;
                                  }
                                  if(currentRow == numRows -1 || currentRow ==0 ){
                                      reverse = !reverse;
                                  }
                              }
                      
                              for(int i=0;i<rows.size();i++){
                              String str="";
                              for(int j=0;j<rows.get(i).size();j++){
                                str += rows.get(i).get(j);    
                              }
                              result+= str;
                              }
                              
                              return result;
                          }
                      
                          public static void main(String[] args) {
                              System.out.println(convert("PAYPALISHIRING", 3));
                          }
                          
                      }`,
                    },
                    Python: {
                      code: `
def convert(s, numRows):
    if numRows == 1 or len(s) < numRows:
        return s

    rows = []
    currentRow = 0
    reverse = False
    result = ""

    for i in range(0, numRows):
        rows.insert(i, [])

    for i in range(0, len(s)):
        rows[currentRow].append(s[i])

        if reverse == False:
            currentRow += 1
        else:
            currentRow -= 1

        if currentRow == numRows - 1 or currentRow == 0:
            reverse = not reverse

    for i in rows:
        result += "".join(i)

    return result


print(convert("PAYPALISHIRING", 3))
# PAHNAPLSIIGYIR`,
                    },
                    "C++": {
                      code: `#include <iostream>
                      #include <string>
                      #include <algorithm>
                      #include <vector>
                      #include <numeric>      
                      
                      
                      using namespace std;
                      
                      string convert(string s,int numRows){
                        if(numRows==1||s.length()<numRows){
                          return s;
                        }
                      
                        vector<vector<char>> rows;
                        int currentRow=0;
                        bool reverse = false;
                        string result="";
                      
                        for(int i=0;i<numRows;i++){
                          vector<char> s;
                          rows.push_back(s);
                        }
                      
                        for(int i=0;i<s.length();i++){
                          rows[currentRow].push_back(s[i]);
                      
                          if(!reverse){
                              currentRow++;
                          }else{
                              currentRow--;
                          }
                      
                          if(currentRow == numRows -1 || currentRow ==0 ){
                            reverse = !reverse;
                          }
                        }
                        
                        for(auto i:rows){
                         result+= accumulate(
                          i.begin(),i.end(),string("")
                        );
                        }
                      
                        return result;
                      }
                      
                      int main() {
                        cout << convert("PAYPALISHIRING", 3)<<endl;
                        return 0;
                      }
                      // PAHNAPLSIIGYIR`,
                    },
                    Kotlin: {
                      code: `import java.util.*

                      fun convert(s:String, numRows:Int):String{
                      
                          if(numRows==0 || s.length <numRows){
                              return s;
                          }
                          var currentRow:Int=0;
                          var reverse:Boolean=false;
                          var result:String="";
                      
                          var rows= mutableListOf<MutableList<Char>>()
                      
                          for(i  in 0..numRows){
                              rows.addAll(Collections.singleton(mutableListOf()))
                          }
                      
                          for (element in s){
                              rows[currentRow].add(element)
                              if(!reverse){
                                  currentRow++;
                              }else{
                                  currentRow--;
                              }
                              if(currentRow == numRows -1 || currentRow ==0 ){
                                  reverse = !reverse;
                              }
                          }
                      
                          for (i in 0 until rows.size){
                              var str=""
                              for(j in 0 until rows[i].size){
                              str += rows[i][j];
                          }
                              result+= str;
                          }
                      
                          return result;
                      }
                      
                      fun main(){
                          println(convert("PAYPALISHIRING",3))
                      }`,
                    },
                  },
                }}
              />
            </>
          </>
        ),
      },
      q7: {
        title: "Q7. Reverse Integer",
        content: (
          <>
            <Span>
              <b>Q7. Reverse Integer</b>
            </Span>
            <Span>
              Given a signed 32-bit integer x, return x with its digits
              reversed. If reversing x causes the value to go outside the signed
              32-bit integer range [-231, 231 - 1], then return 0.
            </Span>
            <Span>
              <b>
                Assume the environment does not allow you to store 64-bit
                integers (signed or unsigned).
              </b>
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: x = 123 <br />
              Output: 321
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: x = -123 <br />
              Output: -321
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: x = 120 <br />
              Output: 21
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>-231 &lt;= x &lt;= 231 - 1</p>
            <CodeEditor
              options={{
                title: `Q7. Reverse Integer`,
                output: `-21`,
                codes: {
                  Javacript: {
                    code: `
                   var reverse = function(x) {
                       // Number.MAX_SAFE_INTEGER -> 2^53 - 1
                       let sign = x>0 ? 1 : -1
                       let y = Math.abs(x)
                       // while(y>0){
                       // ans = ans*10 + n%10;
                       // n = parseInt(n/10);
                       // }
                       const ans = parseInt(String(y).split("").reverse().join(""))
                       if(ans > 0x7FFFFFFF)
                       return 0
                       return sign * ans
                   };
                   
                   console.log(reverse(-12))`,
                  },
                  Java: {
                    code: `class Main {
                      static int reverse(int x){
                       long n=x;
                        long ans=0;
                        int sign =1;
                        if(x<0) {
                          n*=-1;
                          sign = -1;
                          };
                        while(n>0){
                          ans= ans*10 + n%10;
                          n/=10;
                        }
                        if(ans > Integer.MAX_VALUE){
                            return 0;
                        }     
                        return (int)(sign*ans);  }
                    
                      public static void main(String[] args) {
                        System.out.println(reverse(-12));
                      }
                    }`,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <bits/stdc++.h>
                    
                    using namespace std;
                    
                    class Solution{
                      public:
                      int static reverse(int x){
                       long n=x;
                        long ans=0;
                        int sign =1;
                        if(x<0) {
                          n*=-1;
                          sign = -1;
                          };
                        while(n>0){
                          ans= ans*10 + n%10;
                          n/=10;
                        }
                        if(ans > INT_MAX){
                            return 0;
                        }     
                        return (int)sign*ans;
                      }
                    };
                    
                    int main(){
                      cout<<Solution::reverse(-12)<<endl;
                      return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `class A{
                      companion object{
                          fun reverse(x:Int):Int{
                              var n:Long = x.toLong();
                              var ans:Long=0;
                              var sign:Int=1;
                              if(x<0){
                                  n*=-1;
                                  sign*=-1;
                              }
                              while(n>0){
                                  ans= ans*10 + n%10;
                                  n/=10;
                              }
                              if(ans > Integer.MAX_VALUE){
                                  return 0;
                              }
                              return (sign*ans).toInt();
                          }
                      }
                  }
                  
                  
                  fun main(){
                      println(A.reverse(-12))
                  }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q8: {
        title: "Q8. String to Integer (atoi)",
        content: (
          <>
            <Span>
              <b>Q8. String to Integer (atoi)</b>
            </Span>
            <Span>
              Implement the myAtoi(string s) function, which converts a string
              to a 32-bit signed integer (similar to C/C++'s atoi function).
            </Span>
            <Span>The algorithm for myAtoi(string s) is as follows:</Span>
            <Span>
              1. Read in and ignore any leading whitespace. <br />
              Check if the next character (if not already at the end of the
              string) is '-' or '+'. Read this character in if it is either.
              This determines if the final result is negative or positive
              respectively. Assume the result is positive if neither is present.
              <br />
              2. Read in next the characters until the next non-digit character
              or the end of the input is reached. The rest of the string is
              ignored.
              <br />
              3. Convert these digits into an integer (i.e. "123" -&lt; 123,
              "0032" -&lt; 32). If no digits were read, then the integer is 0.
              Change the sign as necessary (from step 2). <br />
              4. If the integer is out of the 32-bit signed integer range [-231,
              231 - 1], then clamp the integer so that it remains in the range.
              Specifically, integers less than -231 should be clamped to -231,
              and integers greater than 231 - 1 should be clamped to 231 - 1.
              Return the integer as the final result.
            </Span>
            <Span>
              <b>Note:</b>
            </Span>
            <Span>
              1. Only the space character ' ' is considered a whitespace
              character. <br />
              2.Do not ignore any characters other than the leading whitespace
              or the rest of the string after the digits.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: s = "42" <br />
              Output: 42 <br />
              Explanation: The underlined characters are what is read in, the
              caret is the current reader position. Step 1: "42" (no characters
              read because there is no leading whitespace) <br />
              ^ Step 2: "42" (no characters read because there is neither a '-'
              nor '+') <br />
              ^ Step 3: "42" ("42" is read in) <br />^ The parsed integer is 42.
              Since 42 is in the range [-231, 231 - 1], the final result is 42.
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: s = " -42" <br />
              Output: -42 <br />
              Explanation: <br />
              Step 1: " -42" (leading whitespace is read and ignored) <br />^
              Step 2: " -42" ('-' is read, so the result should be negative){" "}
              <br />
              ^ Step 3: " -42" ("42" is read in) <br />^ The parsed integer is
              -42. Since -42 is in the range [-231, 231 - 1], the final result
              is -42.
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: s = "4193 with words" <br />
              Output: 4193 <br />
              Explanation: <br />
              Step 1: "4193 with words" (no characters read because there is no
              leading whitespace) <br />
              ^ Step 2: "4193 with words" (no characters read because there is
              neither a '-' nor '+') <br />
              ^ Step 3: "4193 with words" ("4193" is read in; reading stops
              because the next character is a non-digit) <br />^ The parsed
              integer is 4193. Since 4193 is in the range [-231, 231 - 1], the
              final result is 4193.
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              1. 0 &lt;= s.length &lt;= 200 <br />
              2. s consists of English letters (lower-case and upper-case),
              digits (0-9), ' ', '+', '-', and '.'.
            </p>
            <CodeEditor
              options={{
                title: "Q8. String to Integer (atoi)",
                output: `42`,
                codes: {
                  Javacript: {
                    code: `/**
                    * @param {string} s
                    * @return {number}
                    */
                   var myAtoi = function(s){
                        let st = s.trim()
                        if(st == null || st.length ==0){
                          return 0
                        }
                        let res=0
                        let isNegative=false
                        let startIndex=0
                        
                        if(st[0]=='+' || st[0]=='-'){
                           startIndex+=1
                        }
                        if(st[0]=='-'){
                           isNegative=true
                        } 
                        for(let i=startIndex;i<st.length;i++){
                          if(st[i]<'0'||st[i]>'9'){
                            break;
                          }
                          let digit = parseInt(st[i])
                          res = res*10+digit
                        }
                        if(isNegative){
                          res= -1 * res
                        }
                        if(res > Math.pow(2,31) - 1)
                           return Math.pow(2,31)-1
                        if(res < Math.pow(-2, 31))
                           return Math.pow(-2,31)
                        return res
                   }
                   console.log(myAtoi(" 42"))`,
                  },
                  Java: {
                    code: `class ATOI {
                        public static int atoi(String str) {
                            str = str.trim();
                            if (str == null || str.length() == 0) {
                                return 0;
                            }
                            double result = 0;
                            boolean isNegative = false;
                            int startIndex = 0;
                            if (str.charAt(0) == '+' || str.charAt(0) == '-') {
                                startIndex++;
                            }
                            if (str.charAt(0) == '-') {
                                isNegative = true;
                            }
                            for (int i = startIndex; i < str.length(); i++) {
                                if (str.charAt(i) < '0' || str.charAt(i) > '9') {
                                    break;
                                }
                                int digitValue = (int) (str.charAt(i) - '0');
                                result = result * 10 + digitValue;
                            }
                    
                            if (isNegative) {
                                result = -result;
                            }
                            if (result > Integer.MAX_VALUE) {
                                return Integer.MAX_VALUE;
                            }
                            if (result < Integer.MIN_VALUE) {
                                return Integer.MIN_VALUE;
                            }
                    
                            return (int) result;
                        }
                    
                        public static void main(String... s) {
                            System.out.println(ATOI.atoi("42"));
                        }
                    
                    }
                    `,
                  },
                  Python: {
                    code: `
class ATOI:
    @staticmethod
    def atoi(s):
        st = s.strip()

        if (st is None or len(st) == 0):
            return 0

        res = 0
        isNegative = False
        startIndex = 0

        if st[0] == '+' or st[0] == '-':
            startIndex += 1
        if st[0] == '-':
            isNegative = True

        print(startIndex, isNegative)

        i = startIndex

        while i < len(st):
            if st[i] < '0' or st[i] > '9':
                break
            digit = (int)(st[i])
            res = res * 10 + digit
            i += 1

        if isNegative:
            res = -res

        if res > 2 ^ 31 - 1:
            return 2 ^ 31

        if res < -2 ^ 31 + 1:
            return -2 ^ 31

        return res


# import sys
# sys.maxsize

print(ATOI.atoi("-23"))`,
                  },
                  "C++": {
                    code: `#include <iostream>
                      #include <string>
                      #include <algorithm>
                      #include <bits/stdc++.h>
                      
                      using namespace std;
                      
                      class ATOI{
                      public:
                      
                        static string trim(const string &s){
                        auto start = s.begin();
                        while(start != s.end() && isspace(*start)){
                           start++;
                        }
                        auto end = s.end();
                        do{
                          end--;
                        }while(distance(start,end)>0 && isspace(*end));
                        return string(start,end+1);
                        }
                      
                        static int atoi(string s){
                              string str = trim(s);
                              double result = 0;
                              bool isNegative = false;
                              int startIndex = 0;
                              if (str[0] == '+' || str[0] == '-') {
                                  startIndex++;
                              }
                              if (str[0] == '-') {
                                  isNegative = true;
                              }
                              for (int i = startIndex; i < str.length(); i++) {
                                  if (str[i] < '0' || str[i] > '9') {
                                      break;
                                  }
                                  int digitValue = (int) (str[i] - '0');
                                  result = result * 10 + digitValue;
                              }
                      
                              if (isNegative) {
                                  result = -result;
                              }
                              if (result > INT_MAX) {
                                  return INT_MAX;
                              }
                              if (result < INT_MIN) {
                                  return INT_MIN;
                              }
                      
                              return (int) result;
                        }
                      
                      };
                      
                      int main() {
                        cout << ATOI::atoi(" 42 Hello World! ")<<endl;
                        return 0;
                      }`,
                  },
                  kotlin: {
                    code: `class ATOI{
                        companion object{
                            fun atoi(s:String):Int{
                                var res:Double=0.0
                                var str = s.trim()
                                var isNegative:Boolean = false
                                var startIndex:Int=0
                                if(str[0]=='+'||str[0]=='-'){
                                    startIndex++
                                }
                                if(str[0]=='-'){
                                    isNegative = true
                                }
                                for(i: Int in startIndex until str.length){
                                    if(str[i]<'0'||str[i]>'9'){
                                        break;
                                    }
                                    var digit:Int = (str[i] - '0').toInt()
                                    res = res *10 + digit
                                }
                                if(isNegative){
                                    res = -res
                                }
                                if(res > Int.MAX_VALUE){
                                    return Int.MAX_VALUE
                                }else if(res<Int.MIN_VALUE){
                                    return Int.MIN_VALUE
                                }
                                return res.toInt()
                            }
                        }
                    }
                    
                    fun main(){
                      print(ATOI.atoi(" 42"))
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q9: {
        title: "Q9. Palindrome Number",
        content: (
          <>
            <Span>
              <b>Q9. Palindrome Number</b>
            </Span>
            <Span>
              Given an integer x, return true if x is palindrome integer. An
              integer is a palindrome when it reads the same backward as
              forward. For example, 121 is a palindrome while 123 is not.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: x = 121 <br />
              Output: true <br />
              Explanation: 121 reads as 121 from left to right and from right to
              left. <br />
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: x = -121 <br />
              Output: false <br />
              Explanation: From left to right, it reads -121. From right to
              left, it becomes 121-. Therefore it is not a palindrome. <br />
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: x = 10 <br />
              Output: false
              <br />
              Explanation: Reads 01 from right to left. Therefore it is not a
              palindrome.
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>-231 &lt;= x &lt;= 231 - 1</p>
            <CodeEditor
              options={{
                output: `true`,
                title: "Q9. Palindrome Number",
                codes: {
                  Javacript: {
                    code: `/*
@param {number} x
@return {boolean}
*/

                   var isPalindrome = function(x){
                         var n=x
                         if(n<0){
                           return false
                         }
                         var rev=0
                         while(parseInt(n)>0){
                           rev=rev*10+parseInt(n)%10
                           n/=10
                         }
                         if(rev==x){
                           return true
                         }else{
                           return false
                         }
                       } 
                    
                   console.log(isPalindrome(121))`,
                  },
                  Java: {
                    code: `class p{
                      static boolean isPalindrome(int x){
                          int n=x;
                          if(x<0){
                              return false;
                          }
                          int rev=0;
                          while(n>0){
                              rev= rev*10 + n%10;
                              n/=10;
                          }
                          if(x==rev){
                              return true;
                          }else{
                              return false;
                          }
                      }
                  
                      public static void main(String[] args) {
                          System.out.println(isPalindrome(121));
                      }
                  }`,
                  },
                  Python: {
                    code: `
class Solution:
  @staticmethod
  def isPalindrome(x):
    n=x
    if x<0:
      return False
    rev=0
    while int(n)>0:
      rev = rev*10 + int(n)%10
      n/=10
    if x==rev:
      return True
    else:
      return False
  
print(Solution.isPalindrome(121))
                  `,
                  },
                  "C++": {
                    code: `#include <iostream>

                  using namespace std;
                  
                  class Solution {
                      public:
                       static bool isPalindrome(int x) {
                          int n=x;
                          if(x<0){
                            return false;
                          }
                          int rev=0;
                          while(n>0){
                            rev= rev*10 + n%10;
                            n/=10;
                          }
                          if(x==rev){
                            return true;
                          }else{
                            return false;
                          }
                      }
                  };
                  
                  int main() {
                    cout << boolalpha;
                    cout << Solution::isPalindrome(-121) <<endl;
                    return 0;
                  }`,
                  },
                  Kotlin: {
                    code: `class Solution{
                    companion object{
                        fun isPalindrome(x:Int):Boolean{
                            var n:Int=x
                            if(x<0)
                                return false
                            var rev:Int=0
                            while(n>0){
                                rev=rev*10+(n%10)
                                n/=10
                            }
                            return x==rev
                        }
                    }
                }
                
                fun main(){
                    print(Solution.isPalindrome(121))
                }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q10: {
        title: "Q10. Regular Expression Matching",
        content: (
          <>
            <Span>
              <b>Q10. Regular Expression Matching</b>
            </Span>
            <Span>
              Given an input string s and a pattern p, implement regular
              expression matching with support for '.' and '*' where:
              <br />
              '.' Matches any single character.​​​​ <br />
              '*' Matches zero or more of the preceding element. <br />
              The matching should cover the entire input string (not partial).
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: s = "aa", p = "a" Output: false Explanation: "a" does not
              match the entire string "aa".
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: s = "aa", p = "a*" Output: true Explanation: '*' means zero
              or more of the preceding element, 'a'. Therefore, by repeating 'a'
              once, it becomes "aa".
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: s = "ab", p = ".*" Output: true Explanation: ".*" means
              "zero or more (*) of any character (.)".
            </Span>
            <Span>
              <b>Constraints</b>
            </Span>
            <p>
              1 &lt;= s.length &lt;= 20 <br />
              1 &lt;= p.length &lt;= 30 <br />
              s contains only lowercase English letters. <br />
              p contains only lowercase English letters, '.', and '*'. <br />
              It is guaranteed for each appearance of the character '*', there
              will be a previous valid character to match.
            </p>
            <CodeEditor
              options={{
                title: "Q10. Regular Expression Matching",
                output: `true`,
                codes: {
                  Javascript: {
                    code: `/**
                    * @param {string} s
                    * @param {string} p
                    * @return {boolean}
                    */
                   var isMatch = function(s, p) {
                      const rows = s.length;
                      const columns = p.length;
                       if (rows == 0 && columns == 0) {
                         return true;
                       }
                       if (columns == 0) {
                         return false;
                       }
                       const dp = Array.from({ length: s.length + 1 }, () => [false]);
                       dp[0][0] = true;
                       for (let i = 1; i < columns + 1; i++) {
                         if (p[i - 1] === "*") {
                           dp[0][i] = dp[0][i - 2];
                         } else {
                           dp[0][i] = false;
                         }
                       }
                       for (let i = 1; i < rows + 1; i++) {
                         for (let j = 1; j < columns + 1; j++) {
                           if (p[j - 1] === "*") {
                             if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
                               dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                             } else {
                               dp[i][j] = dp[i][j - 2];
                             }
                           } else if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
                             dp[i][j] = dp[i - 1][j - 1];
                           } else {
                             dp[i][j] = false;
                           }
                         }
                       }
                       return dp[rows][columns]; 
                   };
                   
                   console.log(isMatch("aab", "c*a*b"));
                   `,
                  },
                  Java: {
                    code: ` 
                    // c	*	a	*	b
                    // 0	1	2	3	4	5
                    // 0	TRUE	FALSE	TRUE	FALSE	TRUE	FALSE
                    // a	1	FALSE	FALSE	FALSE	TRUE	TRUE	FALSE
                    // a	2	FALSE	FALSE	FALSE	FALSE	TRUE	FALSE
                    // b	3	FALSE	FALSE	FALSE	FALSE	FALSE	TRUE                    
                    class Main {
                    
                        public static boolean isMatch(String s,String p){
                          int rows = s.length();
                          int columns = p.length();
                          
                          if(rows==0&&columns==0){
                            return true;
                          }
                          if(columns==0){
                            return false;
                          }
                          boolean[][] dp=new boolean[rows+1][columns+1];
                          
                          dp[0][0]=true;
                      
                          for (int i = 2; i < columns + 1; i++) {
                                  if (p.charAt(i - 1) == '*') {
                                      dp[0][i] = dp[0][i - 2];
                                  }
                          }
                          
                          for (int i = 1; i < rows + 1; i++) {
                                  for (int j = 1; j < columns + 1; j++) {
                                      if (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) == '.') {
                                          dp[i][j] = dp[i - 1][j - 1];
                                      } else if (j > 1 && p.charAt(j - 1) == '*') {
                                          dp[i][j] = dp[i][j - 2];
                                          if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
                                              dp[i][j] = dp[i][j] | dp[i - 1][j];
                                          }
                                      }
                            }
                          }
                              return dp[rows][columns];
                      
                        }
                      
                        public static void main(String[] args) {
                          System.out.println(isMatch("aab","c*a*b"));
                        }
                      }         
                    `,
                  },
                  Python: {
                    code: `
class Solution:
  @staticmethod
  def isMatch(s: str, p: str) -> bool:
    rows, columns = (len(s), len(p))
    if rows == 0 and columns == 0:
        return True
    if columns == 0:
        return False
    dp = [[False for j in range(columns + 1)] for i in range(rows + 1)]
    dp[0][0] = True
    for i in range(2, columns + 1):
        if p[i - 1] == '*':
            dp[0][i] = dp[0][i - 2]
    for i in range(1, rows + 1):
        for j in range(1, columns + 1):
            if s[i - 1] == p[j - 1] or p[j - 1] == '.':
                dp[i][j] = dp[i - 1][j - 1]
            elif j > 1 and p[j - 1] == '*':
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    return dp[rows][columns]

print(Solution.isMatch("aab", "c*a*b"))`,
                  },
                  "C++": {
                    code: `#include <iostream>

                    using namespace std;
                    
                    class Solution
                    {
                    public:
                        static bool isMatch(string s, string p)
                        {
                            int rows = 0, columns = 0;
                            bool dp[rows][columns];
                            dp[0][0] = true;
                    
                            for (int i = 2; i < columns + 1; i++)
                            {
                                if (p[i - 1] == '*')
                                {
                                    dp[0][i] = dp[0][i - 2];
                                }
                            }
                    
                            for (int i = 1; i < rows + 1; i++)
                            {
                                for (int j = 1; j < columns + 1; j++)
                                {
                                    if (s[i - 1] == p[j - 1] || p[j - 1] == '.')
                                    {
                                        dp[i][j] = dp[i - 1][j - 1];
                                    }
                                    else if (j > 1 && p[j - 1] == '*')
                                    {
                                        dp[i][j] = dp[i][j - 2];
                                        if (p[j - 2] == '.' || p[j - 2] == s[i - 1])
                                        {
                                            dp[i][j] = dp[i][j] or dp[i - 1][j];
                                        }
                                    }
                                }
                            }
                    
                            return dp[rows][columns];
                        }
                    };
                    
                    int main()
                    {
                        cout << boolalpha;
                        cout << Solution::isMatch("aab", "c*a*b") << endl;
                    }`,
                  },
                  Kotlin: {
                    code: `class Solution{
                      companion object {
                          fun isMatch(s:String,p:String):Boolean{
                              val rows:Int=0
                              val columns:Int=0
                              val dp = Array(
                                  rows+1
                              ){
                                  BooleanArray(columns+1)
                              }
                              dp[0][0]=true
                              for(i in 2 until  columns+1){
                                  if(p[i-1]=='*'){
                                      dp[0][i]=dp[0][i-2]
                                  }
                              }
                              for(i in 1 until  rows+1){
                                  for(j in 1 until columns+1){
                                      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                                          dp[i][j] = dp[i - 1][j - 1]
                                      } else if (j > 1 && p[j - 1] === '*') {
                                          dp[i][j] = dp[i][j - 2]
                                          if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                                              dp[i][j] = dp[i][j] or dp[i - 1][j]
                                          }
                                      }
                                  }
                              }
                  
                              return dp[rows][columns]
                          }
                      }
                  }
                  
                  fun main(){
                    print(Solution.isMatch("aab","c*a*b"))
                  }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q11: {
        title: "Q11. Container With Most Medium Water",
        content: (
          <>
            <Span>
              <b>Q11. Container With Most Medium Water</b>
            </Span>
            <Span>
              You are given an integer array height of length n. There are n
              vertical lines drawn such that the two endpoints of the ith line
              are (i, 0) and (i, height[i]).
            </Span>
            <Span>
              Return the maximum amount of water a container can store. Notice
              that you may not slant the container.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Img src={LeetCodeQ11} left />
            <Span>
              Input: height = [1,8,6,2,5,4,8,3,7] <br />
              Output: 49 <br />
              Explanation: The above vertical lines are represented by array
              [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue
              section) the container can contain is 49.
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: height = [1,1]
              <br />
              Output: 1
            </Span>
            <Span>
              <b>Constraints</b>
            </Span>
            <p>
              n == height.length <br />
              2 &lt;= n &lt;= 105 <br />0 &lt;= height[i] &lt;= 104
            </p>
            <CodeEditor
              options={{
                title: "Q11. Container With Most Medium Water",
                output: `2`,
                codes: {
                  Javascript: {
                    code: `
                    /*
@param {number[]} height
@return {number}
*/
var maxArea = function(height){
let max=0,left=0;
let right=height.length-1
while(left<right){
max=Math.max(max,Math.min(height[left],height[right])*(right-left))
if(height[left]<height[right]){
  left++
}else{
  right--
}
}
return max
}       
console.log(maxArea([1,2,1]))`,
                  },
                  Java: {
                    code: `class Main {
 
                      public static int maxArea(int[] height) {
                            int left = 0, right = height.length -1;
                            int max = 0;
                            while (left < right) {
                                max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
                                if (height[left] < height[right]) {
                                    left ++;
                                }
                                else {
                                    right --;
                                }
                            }
                            return max;
                      }
                    
                      public static void main(String[] args) {
                        System.out.println(maxArea(new int[]{1,2,1}));
                       }
                    
                    }`,
                  },
                  Python: {
                    code: `class Solution:

  @staticmethod
  def maxArea(height)->int:
    max1=0
    min1=0
    left=0
    right=len(height)-1
    while left<right:
      max1 = max(max1, min(height[left], height[right]) * (right - left))
      if height[left]<height[right]:
        left+=1
      else:
        right-=1
    return max1

print(Solution.maxArea([1,2,1]))

                    `,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <algorithm> 
                    #include <vector>
                    
                    using namespace std;
                    
                    class Solution{
                      public:
                      static int maxArea(vector<int>& height){
                        int left{0};
                        int right= height.size()-1;
                        int max=0;
                        while (left < right) {
                          max = std::max(max,min(height[left], height[right]) * (right - left));
                          if (height[left] < height[right]) {
                            left ++;
                          }
                          else {
                            right --;
                          }
                        }
                        return max;
                      }
                    };
                    
                    int main(){
                      vector<int> arr{1,2,1};
                      cout<<Solution::maxArea(arr)<<endl;
                      return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `import kotlin.math.min

                    class Solution{
                        companion object{
                            fun maxArea(height: List<Int>):Int{
                              var max:Int=0
                              var left:Int=0
                              var right=height.size-1
                              while(left<right){
                                  max = kotlin.math.max(max, min(height[left], height[right]) * (right - left));
                                  if (height[left] < height[right]) {
                                      left ++;
                                  }
                                  else {
                                      right --;
                                  }
                              }
                              return max
                            }
                        }
                    }
                    
                    fun main(){
                        val arr= listOf<Int>(1,2,1)
                        print(Solution.maxArea(arr))
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q12: {
        title: "Q12. Integer To Roman",
        content: (
          <>
            <Span>
              <b>12. Integer to Roman</b>
            </Span>
            <Span>
              Roman numerals are represented by seven different symbols: I, V,
              X, L, C, D and M.
            </Span>
            <Span>
              Symbol -&lt; Value <br />
              I -&gt; 1 <br />
              V -&gt; 5 <br />
              X -&gt; 10 <br />
              L -&gt; 50 <br />
              C -&gt; 100 <br />
              D -&gt; 500 <br />M -&gt; 1000
            </Span>
            <Span>
              For example, 2 is written as II in Roman numeral, just two one's
              added together. 12 is written as XII, which is simply X + II. The
              number 27 is written as XXVII, which is XX + V + II.
            </Span>
            <Span>
              Roman numerals are usually written largest to smallest from left
              to right. However, the numeral for four is not IIII. Instead, the
              number four is written as IV. Because the one is before the five
              we subtract it making four. The same principle applies to the
              number nine, which is written as IX. There are six instances where
              subtraction is used:
            </Span>
            <Span>
              I can be placed before V (5) and X (10) to make 4 and 9. <br />X
              can be placed before L (50) and C (100) to make 40 and 90. <br />C
              can be placed before D (500) and M (1000) to make 400 and 900.{" "}
              <br />
              Given an integer, convert it to a roman numeral.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: num = 3 <br />
              Output: "III" <br />
              Explanation: 3 is represented as 3 ones.
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: num = 58 <br />
              Output: "LVIII" <br />
              Explanation: L = 50, V = 5, III = 3.
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: num = 1994 <br />
              Output: "MCMXCIV" <br />
              Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
            </Span>
            <Span>
              <b>Constraints</b>
            </Span>
            <p>1 &lt;= num &lt;= 3999</p>
            <CodeEditor
              options={{
                title: "Q12. Integer To Roman",
                output: `XII`,
                codes: {
                  Javascript: {
                    code: `var intToRoman = function(n){
                      let  num=n
                      const base=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
                      const chars=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
                      let result=""
                      for(let i=0;i<base.length;i++){
                        if(parseInt(num/base[i])>0){
                         for(let j=0;j<parseInt(num/base[i]);j++){
                           result+=chars[i]
                         }
                         num-= parseInt((num/base[i]))*base[i]
                        }
                      }
                      return result
                    }
                 
                console.log(intToRoman(12))`,
                  },
                  Java: {
                    code: `class Solution {
                      public String intToRoman(int num) {
                          int[] base = new int[]{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
                          String[] chars = new String[]{"M","CM","D","CD","C","XC","L","XL","X","IX", "V", "IV", "I"};
                          String result = "";
                          for (int i = 0; i < base.length; i++) {
                              if (num / base[i] > 0) {
                                  for (int j = 0; j < num/base[i]; j++) {
                                      result = result + chars[i];
                                  }
                                  num = num - (num / base[i]) * base[i];
                              }
                          }
                          return result;
                      }
                      
                  }`,
                  },
                  Python: {
                    code: `
class Solution:

  @staticmethod
  def maxArea(num:int)->str:
    base=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    chars=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    result = ""
    for i in range(len(base)):
      if int(num / base[i]) > 0 :
        for j in range(int(num/base[i])):
          result += chars[i]
        num -= int(num/base[i])*base[i]
    return result

print(Solution.maxArea(12))
                    `,
                  },
                  "C++": {
                    code: `#include <iostream>

                    using namespace std;
                    
                    class Solution{
                      public:
                      string intToRoman(int num){
                        int base[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
                        string chars[] = {"M","CM","D","CD","C","XC","L","XL","X","IX", "V", "IV", "I"};
                        string result="";
                        for (int i = 0; i < sizeof(base)/sizeof(base[0]) ; i ++) {
                                if (num / base[i] > 0) {
                                    for (int j = 0; j < num/base[i]; j ++) {
                                        result = result + chars[i];
                                    }
                                    num = num - (num / base[i]) * base[i];
                                }
                        }
                        return result;
                      }
                    };
                    
                    int main(){
                      Solution s1;
                      cout<<s1.intToRoman(44)<<endl;
                      return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `internal class Solution {
                      fun intToRoman(num: Int): String {
                          var num = num
                          val base = intArrayOf(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
                          val chars = arrayOf("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I")
                          var result = ""
                          for (i in base.indices) {
                              if (num / base[i] > 0) {
                                  for (j in 0 until num / base[i]) {
                                      result += chars[i]
                                  }
                                  num -= num / base[i] * base[i]
                              }
                          }
                          return result
                      }
                  }
                  
                  fun main(){
                      var s:Solution=Solution()
                      print(s.intToRoman(8))
                  }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q13: {
        title: "Q13. Roman To Integer",
        content: (
          <>
            <Span>
              <b>Q13. Roman To Integer</b>
            </Span>
            <Span>
              Roman numerals are represented by seven different symbols: I, V,
              X, L, C, D and M.
            </Span>
            <Span>
              Symbol -&lt; Value <br />
              I -&gt; 1 <br />
              V -&gt; 5 <br />
              X -&gt; 10 <br />
              L -&gt; 50 <br />
              C -&gt; 100 <br />
              D -&gt; 500 <br />M -&gt; 1000
            </Span>
            <Span>
              For example, 2 is written as II in Roman numeral, just two one's
              added together. 12 is written as XII, which is simply X + II. The
              number 27 is written as XXVII, which is XX + V + II.
              <br />
              Roman numerals are usually written largest to smallest from left
              to right. However, the numeral for four is not IIII. Instead, the
              number four is written as IV. Because the one is before the five
              we subtract it making four. The same principle applies to the
              number nine, which is written as IX. There are six instances where
              subtraction is used:
              <br />
              I can be placed before V (5) and X (10) to make 4 and 9. <br />X
              can be placed before L (50) and C (100) to make 40 and 90. <br />C
              can be placed before D (500) and M (1000) to make 400 and 900.{" "}
              <br />
              Given a roman numeral, convert it to an integer.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>Input: s = "III" Output: 3 Explanation: III = 3.</Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: s = "LVIII" Output: 58 Explanation: L = 50, V= 5, III = 3.
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: s = "MCMXCIV" Output: 1994 Explanation: M = 1000, CM = 900,
              XC = 90 and IV = 4.
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              1 &lt;= s.length &lt;= 15 <br />
              s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D',
              'M'). <br />
              It is guaranteed that s is a valid roman numeral in the range [1,
              3999].
            </p>
            <CodeEditor
              options={{
                title: "Q13. Roman To Integer",
                output: `4`,
                codes: {
                  Javascript: {
                    code: `var romanToInt = function(s){
                    let helper = {
                      'M':1000,
                      'D':500,
                      'C':100,
                      'L':50,
                      'X':10,
                      'V':5,
                      'I':1
                    }
                    var result =0
                    for(let i=0;i<s.length;i++){
                       if(i>0 && helper[s[i]] > helper[s[i-1]]){
                          result -= 2 * helper[s[i-1]]
                       }
                       result += helper[s[i]]
                    }
                    return result
                  }
                  
                  console.log(romanToInt("IV"))`,
                  },
                  Java: {
                    code: `import java.util.*;

                  class Main{
                  
                  public int romanToInt(String s){ 
                    HashMap<Character,Integer> helper = new HashMap<Character,Integer>();
                    initHelper(helper);
                    int result = 0;
                    for (int i = 0; i < s.length(); i ++){
                      if ( i > 0 && helper.get(s.charAt(i)) > helper.get(s.charAt(i-1))) {
                        result = result - 2 * helper.get(s.charAt(i-1));
                      }
                      result = result + helper.get(s.charAt(i));
                    }
                    return result;
                  }
                  
                  public void initHelper(HashMap<Character,Integer> helper){
                     helper.put('M',1000);
                     helper.put('D',500);
                     helper.put('C',100);
                     helper.put('L',50);
                     helper.put('X',10);
                     helper.put('V',5);
                     helper.put('I',1);
                  }
                  public static void main(String ...s){
                      Main m = new Main();
                      System.out.println(m.romanToInt("IV"));
                  } 
                  };
                  `,
                  },
                  Python: {
                    code: `
class Main:
  def romanToInt(self,s):
    helper = {
      'M':1000,
      'D':500,
      'C':100,
      'L':50,
      'X':10,
      'V':5,
      'I':1
    }
    result = 0
    for i in range(0,len(s)):
      if i > 0 and helper[s[i]] > helper[s[i-1]]:
        result -= 2 * helper[s[i-1]]
      result += helper[s[i]]
    return result 
    
m = Main()
print(m.romanToInt("IV"))`,
                  },
                  "C++": {
                    code: `#include <iostream>
                  #include <bits/stdc++.h>
                  
                  using namespace std;
                  
                  class Main{
                  
                  public:
                    int romanToInt(string s){
                         unordered_map<char,int> helper({
                           {'M',1000},
                           {'D',500},
                           {'C',100},
                           {'L',50},
                           {'X',10},
                           {'V',5},
                           {'I',1}
                         });
                         int result = 0;
                         for (int i = 0; i < s.length(); i++){
                            if ( i > 0 && helper[s[i]] > helper[s[i-1]]) {
                            result -= 2 * helper[s[i-1]];
                         }
                        result += helper[s[i]];
                        }
                        return result;
                    }
                  
                  };
                  
                  
                  int main(){
                    Main m;
                    cout<< m.romanToInt("IV") <<endl;
                    return 0;
                  }`,
                  },
                  Kotlin: {
                    code: `internal class Main {
                    fun romanToInt(s: String): Int {
                        val helper = HashMap<Char, Int>()
                        initHelper(helper)
                        var result = 0
                        for (i in s.indices) {
                            if (i > 0 && helper[s[i]]!! > helper[s[i - 1]]!!) {
                                result -= 2 * helper[s[i - 1]]!!
                            }
                            result += helper[s[i]]!!
                        }
                        return result
                    }
                
                    private fun initHelper(helper: HashMap<Char, Int>) {
                        helper['M'] = 1000
                        helper['D'] = 500
                        helper['C'] = 100
                        helper['L'] = 50
                        helper['X'] = 10
                        helper['V'] = 5
                        helper['I'] = 1
                    }
                
                    companion object {
                        @JvmStatic
                        fun main(s: Array<String>) {
                            val m = Main()
                            println(m.romanToInt("IV"))
                        }
                    }
                }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q14: {
        title: "Q14. Longest Common Prefix",
        content: (
          <>
            <Span>
              <b>Q14. Longest Common Prefix</b>
            </Span>
            <Span>
              Write a function to find the longest common prefix string amongst
              an array of strings. If there is no common prefix, return an empty
              string "".
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: strs = ["flower","flow","flight"] <br />
              Output: "fl"
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: strs = ["dog","racecar","car"] <br />
              Output: "" <br />
              Explanation: There is no common prefix among the input strings.
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              1 &lt;= strs.length &lt;= 200 <br />
              0 &lt;= strs[i].length &lt;= 200 <br />
              strs[i] consists of only lower-case English letters.
            </p>
            <CodeEditor
              options={{
                title: "Q14. Longest Common Prefix",
                output: `fl`,
                codes: {
                  Javascript: {
                    code: `/**
                  * @param {string[]} strs
                  * @return {string}
                  */
                 var longestCommonPrefix = function(strs) {
                     if (strs.length == 0) {
                       return "";
                     }
                     var prefix = strs[0];
                     for (let i = 0; i < strs.length; i++) {
                       for (let j = 0; j < prefix.length; j++) {
                         if (j == strs[i].length || prefix[j] != strs[i][j]) {
                           prefix = prefix.substr(0, j);
                           break;
                         }
                       }
                     }
                     return prefix;    
                 };
                 
                 console.log(longestCommonPrefix(["flower", "flow", "flight"]));
                 `,
                  },
                  Java: {
                    code: `import java.util.*;

                    class Main{
                    
                    public static String lcp(List<String> s){
                      if(s.size()==0){
                        return "";
                      }
                      String prefix = s.get(0);
                      for (int i = 0; i < s.size(); i++)
                      {
                          for (int j = 0; j < prefix.length();j++)
                          {
                              if (j == s.get(i).length() || prefix.charAt(j)!= s.get(i).charAt(j))
                              {
                                  prefix = prefix.substring(0, j);
                                  break;
                              }
                          }
                      }
                      return prefix;
                    }
                    
                    public static void main(String ...s){
                      System.out.println(lcp(Arrays.asList("flower", "flow", "flight")));
                    }
                    
                    }
                    `,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <vector>
                    
                    using namespace std;
                    
                    class Solution
                    {
                    public:
                        static string lcp(vector<string> s)
                        {
                            if (s.size() == 0)
                            {
                                return "";
                            }
                            string prefix = s[0];
                            for (int i = 0; i < s.size(); i++)
                            {
                                for (int j = 0; j < prefix.length(); j++)
                                {
                                    if (j == s[i].length() || prefix[j] != s[i][j])
                                    {
                                        prefix = prefix.substr(0, j);
                                        break;
                                    }
                                }
                            }
                            return prefix;
                        }
                    };
                    
                    int main()
                    {
                        Solution s;
                        vector<string> l{"flower", "flow", "flight"};
                        cout << s.lcp(l) << endl;
                        return 0;
                    }`,
                  },
                  Python: {
                    code: `
class Solution:

  @staticmethod
  def lcp(s):
    if len(s)==0:
      return ""
    prefix = s[0]
    for i in range(len(s)):
      for j in range(len(prefix)):
        if j == len(s[i]) or prefix[j] != s[i][j]:
          prefix = prefix[:j]
          break
    return prefix


print(Solution.lcp(["flower", "flow", "flight"]))
`,
                  },
                  Kotlin: {
                    code: `package com.programming

                    internal class Test{
                        companion object{
                            fun lcp(s: List<String>):String {
                                if(s.isEmpty()){
                                    return ""
                                }
                                var prefix:String = s[0]
                                for(i in s.indices){
                                    for(j in prefix.indices){
                                        if(j == s[i].length || prefix[j]!= s[i][j]){
                                            prefix = prefix.substring(0,j)
                                            break
                                        }
                                    }
                                }
                                return prefix
                            }
                        }
                    }
                    
                    fun main(){
                        print(Test.lcp(listOf<String>("flower", "flow", "flight")))
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q15: {
        title: "Q15. 3Sum",
        content: (
          <>
            <Span>
              <b>Q15. 3Sum</b>
            </Span>
            <Span>
              Given an integer array nums, return all the triplets [nums[i],
              nums[j], nums[k]] such that i != j, i != k, and j != k, and
              nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
              must not contain duplicate triplets.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: nums = [-1,0,1,2,-1,-4] <br />
              Output: [[-1,-1,2],[-1,0,1]]
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: nums = [] <br />
              Output: []
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              Input: nums = [0] <br />
              Output: []
            </Span>
            <Span>
              <b>Constraints</b>
            </Span>
            <p>
              0 &lt;= nums.length &lt;= 3000 <br />
              -105 &lt;= nums[i] &lt;= 105
            </p>
            <CodeEditor
              options={{
                title: "Q15. 3Sum",
                output: `[ [ -1, -1, 2 ], [ -1, 0, 1 ] ]`,
                codes: {
                  Javascript: {
                    code: `/**
                    * @param {number[]} nums
                    * @return {number[][]}
                    */
                   var threeSum = function(nums) {
                    var result=[]
                         nums.sort((a,b)=>a-b)
                         for(let i=0;i<nums.length;i++){
                           if(i==0||nums[i]!=nums[i-1]){
                             let start = i+1
                             let end = nums.length - 1
                             while(start<end){
                               let s = nums[i] + nums[start] + nums[end]
                               if(s==0){
                                   let temp = [nums[i],nums[start],nums[end]]
                                   result.push(temp)
                                   let startVal = nums[start]
                                   let endVal = nums[end]
                                   while(start < end && startVal == nums[start]){
                                      start+=1        
                                   }
                                   while(end > start && endVal == nums[end]){
                                     end-=1
                                   }
                               }else if(s<0){start+=1}
                               else{end-=1}
                             }
                           }
                         }
                         return result    
                   };
                   
                   console.log(threeSum([-1, 0, 1, 2, -1, -4]))
                   `,
                  },
                  Java: {
                    code: `import java.util.*;

                    class Main{
                      public static List<List<Integer>> threeSum(int[] nums) {
                            List<List<Integer>> result = new LinkedList<List<Integer>>();
                            Arrays.sort(nums);
                            for (int i = 0; i < nums.length; i++) {
                                if (i == 0 || nums[i] != nums[i-1]) {
                                    int start = i + 1, end = nums.length - 1;
                                    while (start < end) {
                                        int sum = nums[i] + nums[start] + nums[end];
                                        if (sum == 0){
                                            List<Integer> tmp = new LinkedList<Integer>();
                                            tmp.add(nums[i]);
                                            tmp.add(nums[start]);
                                            tmp.add(nums[end]);
                                            result.add(tmp);
                                            int startVal = nums[start];
                                            int endVal = nums[end];
                                            while (start < end && startVal == nums[start]) {
                                                start ++;
                                            }
                                            while (end > start && endVal == nums[end]) {
                                                end --;
                                            }
                                        }
                                        else if (sum < 0) {
                                            start ++;
                                        }
                                        else {
                                            end --;
                                        }
                                    }
                                }
                            }
                            return result;
                      }
                    
                      public static void main(String ...s){
                        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
                      }
                    
                    }
                    `,
                  },
                  Python: {
                    code: `
class Test:

  @staticmethod
  def threeSum(nums):
    result = []
    nums.sort()
    for i in range(len(nums)):
      if i == 0 or nums[i] != nums[i-1]:
        start = i+1
        end = len(nums) - 1
        while start < end :
          s = nums[i] + nums[start] + nums[end]
          if s == 0:
            temp = [nums[i],nums[start],nums[end]]
            result.append(temp)
            startVal = nums[start]
            endVal = nums[end]
            while start < end and startVal == nums[start]:
              start+=1
            while end > start and endVal == nums[end]:
              end-=1
          elif s < 0:
            start+=1
          else:
            end-=1
    return result  
            
print(Test.threeSum([-1, 0, 1, 2, -1, -4]))`,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <vector>
                    #include <algorithm>
                    
                    using namespace std;
                    
                    class Solution{
                      
                      public:
                      vector<vector<int>> threeSum(vector<int> nums){
                         vector<vector<int>> result;
                         sort(nums.begin(),nums.end());
                         for(int i=0;i<nums.size();i++){
                           if(i==0||nums[i]!=nums[i-1]){
                             int start = i+1;
                             int end = nums.size() - 1;
                             while(start<end){
                               int s = nums[i] + nums[start] + nums[end];
                               if(s==0){
                                 vector<int> temp;
                                 temp.insert(temp.end(),{nums[i],nums[start],nums[end]});
                                 result.push_back(temp);
                                 int startVal = nums[start];
                                 int endVal = nums[end];
                                 while(start < end && startVal == nums[start]){
                                       start++;   
                                 }
                                 while(end > start && endVal == nums[end]){
                                      end--;
                                 }
                               }else if(s<0){start++;}
                           else{end--;}
                             }
                           }
                         }
                         return result;
                      }
                    
                    };
                    
                    int main(){
                      Solution s;
                      vector<int> l{-1, 0, 1, 2, -1, -4};
                      for(auto v:s.threeSum(l)){
                        cout << "[ ";
                        for(auto i:v){
                          cout << i <<" , " ;
                        }
                        cout << " ]" << endl;
                      }
                      return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `package com.programming

                    import java.util.LinkedList
                    
                    import java.util.Arrays
                    
                    internal class Test{
                       companion object {
                           fun threeSum(nums: IntArray): List<List<Int>>? {
                               val result: MutableList<List<Int>> = LinkedList()
                               Arrays.sort(nums)
                               for (i in nums.indices) {
                                   if (i == 0 || nums[i] != nums[i - 1]) {
                                       var start = i + 1
                                       var end = nums.size - 1
                                       while (start < end) {
                                           val sum = nums[i] + nums[start] + nums[end]
                                           if (sum == 0) {
                                               val tmp: MutableList<Int> = LinkedList()
                                               tmp.add(nums[i])
                                               tmp.add(nums[start])
                                               tmp.add(nums[end])
                                               result.add(tmp)
                                               val startVal = nums[start]
                                               val endVal = nums[end]
                                               while (start < end && startVal == nums[start]) {
                                                   start++
                                               }
                                               while (end > start && endVal == nums[end]) {
                                                   end--
                                               }
                                           } else if (sum < 0) {
                                               start++
                                           } else {
                                               end--
                                           }
                                       }
                                   }
                               }
                               return result
                           }
                       }
                    }
                    
                    fun main(){
                        print(Test.threeSum(intArrayOf(-1, 0, 1, 2, -1, -4)))
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q16: {
        title: "Q16. 3SumClosest",
        content: (
          <>
            <Span>
              <b>Q16. 3SumClosest</b>
            </Span>
            <Span>
              Given an integer array nums of length n and an integer target,
              find three integers in nums such that the sum is closest to
              target. Return the sum of the three integers. You may assume that
              each input would have exactly one solution.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: nums = [-1,2,1,-4], target = 1 <br />
              Output: 2 <br />
              Explanation: The sum that is closest to the target is 2. (-1 + 2 +
              1 = 2).
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: nums = [0,0,0], target = 1 <br />
              Output: 0
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              3 &lt;= nums.length &lt;= 1000 <br />
              -1000 &lt;= nums[i] &lt;= 1000 <br />
              -104 &lt;= target &lt;= 104
            </p>
            <CodeEditor
              options={{
                title: "Q16. 3SumClosest",
                output: `3`,
                codes: {
                  Javascript: {
                    code: `/**
                    * @param {number[]} nums
                    * @param {number} target
                    * @return {number}
                    */
                   var threeSumClosest = function(nums, target) {
                         if(nums.length==0){
                           return 0
                         }
                         nums.sort((a,b)=>a-b)
                         let minimum = Number.MAX_VALUE
                         // Number.MIN_SAFE_INTEGER
                         var closest = 0 
                         for(let i=0;i<nums.length;i++){
                           if(i==0||nums[i]!=nums[i-1]){
                             let start = i+1
                             let end = nums.length - 1
                             while(start<end){
                               let s = nums[i] + nums[start] + nums[end]
                               if(Math.abs(s-target)<minimum){
                                 minimum = Math.abs(s-target)
                                 closest =s 
                               }
                               if(s<target){start+=1}
                               else{end-=1}
                               }
                             }
                           }
                             return closest
                   };
                   
                   console.log(threeSumClosest([-1, 0, 1, 2, -1, -4],8))`,
                    Java: {
                      code: `import java.util.*;

                      public class Main {
                          public static int threeSumClosest(int[] nums, int target) {
                              if (nums.length == 0){
                                  return 0;
                              }
                              Arrays.sort(nums);
                              int min = Integer.MAX_VALUE;
                              int closed = 0;
                              for (int i = 0; i < nums.length; i ++){
                                  if (i == 0 || nums[i] != nums[i-1]){
                                      int start = i + 1;
                                      int end = nums.length - 1;
                                      while (start < end){
                                          int sum = nums[i] + nums[start] + nums[end];
                                          if (Math.abs(sum - target) < min){
                                              min = Math.abs(sum - target);
                                              closed = sum;
                                          }
                                          if (sum < target){ 
                                              start ++; } 
                                          else{ 
                                              end --;
                                          }
                                      }
                                   }
                              }
                              return closed;
                          }
                      
                          public static void main(String ...s){
                            System.out.println(threeSumClosest(new int[]{-1,3,3},5));
                          }
                      
                      }`,
                    },
                    Python: {
                      code: `
import sys

class Test:

  @staticmethod
  def threeSumClosest(nums,target):
    if len(nums) == 0:
      return 0    
    nums.sort()
    # python 2 -> sys.maxint
    # python 3 > sys.maxsize
    minimum =  sys.maxsize
    closed = 0

    for i in range(len(nums)):
      if i == 0 or nums[i] != nums[i-1]:
        start = i+1
        end = len(nums) - 1
        while start < end :
          s = nums[i] + nums[start] + nums[end]
          if abs(s-target)<minimum:
            minimum = abs(s-target)
            closed = s
          if s < target:
            start+=1
          else:
            end-=1
    return closed
            
print(Test.threeSumClosest([-1, 0, 1, 2, -1, -4],8))`,
                    },
                    "C++": {
                      code: `#include <iostream>
                      #include <vector>
                      #include <algorithm>
                      #include <cstdlib>
                      #include <bits/stdc++.h>
                      
                      using namespace std;
                      
                      class Solution{
                        
                        public:
                        int threeSum(vector<int> nums,int target){
                           vector<vector<int>> result;
                           sort(nums.begin(),nums.end());
                           int closed = 0;
                           int minimum = INT_MAX;
                           if(nums.size()==0){
                             return 0;
                           }
                           for(int i=0;i<nums.size();i++){
                             if(i==0||nums[i]!=nums[i-1]){
                               int start = i+1;
                               int end = nums.size() - 1;
                               while(start<end){
                                 int s = nums[i] + nums[start] + nums[end];
                                 if(abs(s-target)<minimum){
                                   minimum = abs(s-target);
                                   closed = s;
                                 }
                             if(s<target){start++;}
                             else{end--;}
                               }
                             }
                           }
                      
                           return closed;
                        }
                      
                      };
                      
                      int main(){
                        Solution s;
                        vector<int> l{-1, 0, 1, 2, -1, -4};
                        cout << s.threeSum(l,8)<<endl;
                        return 0;
                      }`,
                    },
                    Kotlin: {
                      code: `import java.util.*
                      import kotlin.math.abs
                      
                      object Main {
                          fun threeSumClosest(nums: IntArray, target: Int): Int {
                              if (nums.isEmpty()) {
                                  return 0
                              }
                              Arrays.sort(nums)
                              var min = Int.MAX_VALUE
                              var closed = 0
                              for (i in nums.indices) {
                                  if (i == 0 || nums[i] != nums[i - 1]) {
                                      var start = i + 1
                                      var end = nums.size - 1
                                      while (start < end) {
                                          val sum = nums[i] + nums[start] + nums[end]
                                          if (abs(sum - target) < min) {
                                              min = abs(sum - target)
                                              closed = sum
                                          }
                                          if (sum < target) {
                                              start++
                                          } else {
                                              end--
                                          }
                                      }
                                  }
                              }
                              return closed
                          }
                      
                          @JvmStatic
                          fun main(s: Array<String>) {
                              println(threeSumClosest(intArrayOf(-1, 3, 3), 5))
                          }
                      }`,
                    },
                  },
                },
              }}
            />
          </>
        ),
      },
      q17: {
        title: "Q17. Letter Combinations Of A PhoneNumber",
        content: (
          <>
            <Span>
              <b>17. Letter Combinations of a Phone Number</b>
            </Span>
            <Span>
              Given a string containing digits from 2-9 inclusive, return all
              possible letter combinations that the number could represent.
              Return the answer in any order. A mapping of digit to letters
              (just like on the telephone buttons) is given below. Note that 1
              does not map to any letters.
            </Span>
            <Img left src={LeetcodeQ17} />
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: digits = "23" <br />
              Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              Input: digits = "" <br />
              Output: []
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              0 &lt;= digits.length &lt;= 4 <br />
              digits[i] is a digit in the range ['2', '9'].
            </p>
            <CodeEditor
              options={{
                title: "Q17. Letter Combinations Of A PhoneNumber",
                codes: {
                  Java: {
                    code: `import java.util.*;
                    class Main {
                        public List<String> letterCombinations(String digits) {
                            HashMap<Character, String> keyboard = new HashMap<Character, String>();
                            initKeyboard(keyboard);
                            List<String> result = new LinkedList<String>();
                            if (digits.length() == 0) {
                                return result;
                            }
                            compile(digits, "", 0, keyboard, result); 
                            return result;
                        }
                    
                        // public LinkedList<String> letterCombinations(String digits) {
                        //     HashMap<Character, String> keyboard = new HashMap<Character, String>();
                        //     initKeyboard(keyboard);
                        //     LinkedList<String> result = new LinkedList<String>();
                        //     if (digits.length() == 0) {
                        //         return result;
                        //     }
                        //     compile(digits, "", 0, keyboard, result); 
                        //     return result;
                        // }
                    
                        private void compile(String digits, String prefix, int start, HashMap<Character, String> keyboard, List<String> result) {
                            if (start == digits.length()) {
                                result.add(prefix);
                                return;
                            }
                            String cand = keyboard.get(digits.charAt(start));
                            for (int j = 0; j < cand.length(); j++) {
                                compile(digits, prefix + cand.charAt(j), start + 1, keyboard, result);
                            }
                        }
                        private void initKeyboard(HashMap<Character, String> keyboard) {
                            keyboard.put('2', "abc");
                            keyboard.put('3', "def");
                            keyboard.put('4', "ghi");
                            keyboard.put('5', "jkl");
                            keyboard.put('6', "mno");
                            keyboard.put('7', "pqrs");
                            keyboard.put('8', "tuv");
                            keyboard.put('9', "wxyz");
                        }
                    
                       public static void main(String ...s){
                            Main m = new Main();
                            System.out.println(m.letterCombinations("234").toString());
                       }
                    
                    }`,
                  },
                  Python: {
                    code: `
class Main:

def __initKeyboard(self,keyboard):
  keyboard['2'] = "abc"
  keyboard['3'] = "def"
  keyboard['4'] = "ghi"
  keyboard['5'] = "jkl"
  keyboard['6'] = "mno"
  keyboard['7'] = "pqrs"
  keyboard['8'] = "tuv"
  keyboard['9'] = "wxyz"

def comp(self,digits:str,prefix:str,start:int,keyboard,result):
  if start == len(digits):
    result.append(prefix)
    return
  cand = keyboard[digits[start]]
  for e in cand:
    self.comp(digits,prefix+e,start+1,keyboard,result)

def letterCombinations(self,digits:str):
  keyboard = {}
  self.__initKeyboard(keyboard)
  res=[]
  if len(digits)==0:
    return res
  self.comp(digits,"",0,keyboard,res)
  return res

m = Main()
print(m.letterCombinations("234"))
                    `,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <string>
                    #include <vector>
                    #include <bits/stdc++.h>
                    
                    using namespace std;
                    
                    class Main{
                      
                      public:
                      unordered_map<char,string> initKeyboard(unordered_map<char,string> keyboard){
                        keyboard['2'] = "abc";
                        keyboard['3'] = "def";
                        keyboard['4'] = "ghi";
                        keyboard['5'] = "jkl";
                        keyboard['6'] = "mno";
                        keyboard['7'] = "pqrs";
                        keyboard['8'] = "tuv";
                        keyboard['9'] = "wxyz";
                        return keyboard;
                      }
                    
                      void comp(string digits,string prefix,int start,unordered_map<char,string> keyboard,vector<string> 
                      *result){
                        if(start==digits.length()){
                          result->push_back(prefix);
                          return;
                        }
                        string cand = keyboard[digits[start]];
                        for(auto e:cand){
                          comp(digits,prefix+e,start+1,keyboard,result);
                        }
                      }
                      
                      vector<string> letterCombinations(string digits){
                        unordered_map<char,string> keyboard;
                        keyboard = initKeyboard(keyboard);
                        vector<string> res;
                        if(digits.length()==0){
                           return res;
                        }
                        this->comp(digits,"",0,keyboard,&res);
                        return res; 
                      }
                    
                    };
                    
                    int main(){
                      Main m;
                      for(auto i:m.letterCombinations("234")){
                        cout << i << endl;
                      }
                      return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `import java.util.*
                    import kotlin.collections.HashMap
                    
                    internal class Main {
                        fun letterCombinations(digits: String): List<String> {
                            val keyboard = HashMap<Char, String>()
                            initKeyboard(keyboard)
                            val result: MutableList<String> = LinkedList()
                            if (digits.isEmpty()) {
                                return result
                            }
                            compile(digits, "", 0, keyboard, result)
                            return result
                        }
                    
                        private fun compile(
                            digits: String,
                            prefix: String,
                            start: Int,
                            keyboard: HashMap<Char, String>,
                            result: MutableList<String>
                        ) {
                            if (start == digits.length) {
                                result.add(prefix)
                                return
                            }
                            val cand = keyboard[digits[start]]
                            for (element in cand!!) {
                                compile(digits, prefix + element, start + 1, keyboard, result)
                            }
                        }
                    
                        private fun initKeyboard(keyboard: HashMap<Char, String>) {
                            keyboard['2'] = "abc"
                            keyboard['3'] = "def"
                            keyboard['4'] = "ghi"
                            keyboard['5'] = "jkl"
                            keyboard['6'] = "mno"
                            keyboard['7'] = "pqrs"
                            keyboard['8'] = "tuv"
                            keyboard['9'] = "wxyz"
                        }
                    
                        companion object {
                            @JvmStatic
                            fun main(s: Array<String>) {
                                val m = Main()
                                println(m.letterCombinations("234").toString())
                            }
                        }
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q18: {
        title: "Q18. 4Sum",
        content: (
          <>
            <Span>
              <b>Q18. 4Sum</b>
            </Span>
            <Span>
              Given an array nums of n integers, return an array of all the
              unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
              <br />
              0 &lt;= a, b, c, d &lt; n <br />
              a, b, c, and d are distinct. <br />
              nums[a] + nums[b] + nums[c] + nums[d] == target <br />
              You may return the answer in any order.
            </Span>
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              Input: nums = [1,0,-1,0,-2,2], target = 0 <br />
              Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <p>
              Input: nums = [2,2,2,2,2], target = 8 <br />
              Output: [[2,2,2,2]]
            </p>
            <CodeEditor
              options={{
                title: "Q18. 4Sum",
                output: `[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]`,
                codes: {
                  Java: {
                    code: `import java.util.*;

                    class Main {
                        public List<List<Integer>> fourSum(int[] nums, int target) {
                            List<List<Integer>> result = new LinkedList<List<Integer>>();
                            if (nums.length < 4) {
                                return result;
                            }
                            Arrays.sort(nums);
                            int max = nums[nums.length -1];
                            for (int i = 0; i < nums.length; i++) {
                                if (i > 0 && nums[i] == nums[i-1]) {
                                    continue;
                                }
                                if (nums[i] + 3 * max < target) {
                                    continue;
                                }
                                if (nums[i] * 4 > target) {
                                    break;
                                }
                                for (int j = i + 1; j < nums.length; j++) {
                                    if (j > i + 1 && nums[j] == nums[j-1]) {
                                        continue;
                                    }
                                    int start = j + 1;
                                    int end = nums.length - 1;
                                    while (start < end) {
                                        int sum = nums[i] + nums[j] + nums[start] + nums[end];
                                        if (sum == target) {
                                            List<Integer> tmp = new LinkedList<Integer>();
                                            tmp.add(nums[i]);
                                            tmp.add(nums[j]);
                                            tmp.add(nums[start]);
                                            tmp.add(nums[end]);
                                            result.add(tmp);
                                            int startVal = nums[start];
                                            int endVal = nums[end];
                                            while (start < end && startVal == nums[start]) {
                                                start ++;
                                            }
                                            while (start < end && endVal == nums[end]) {
                                                end --;
                                            }
                                        }
                                        else if (sum < target) {
                                            start ++;
                                        }       
                                        else {
                                            end --;
                                        }
                                    }
                                }
                            }
                            return result;
                        }
                    
                        public static void main(String ...s){
                          Main m = new Main();
                          System.out.println(m.fourSum(new int[]{1,0,-1,0,-2,2},0).toString());
                        }
                    
                    }`,
                  },
                  Python: {
                    code: `class Main:
  @staticmethod
  def fourSum(nums,target:int):
    result = []
    if len(nums)<4:
      return result
    nums.sort()
    maximum = nums[-1]
    for i in range(len(nums)):
      if i > 0 and nums[i]==nums[i-1]:
        continue
      if nums[i] + 3 * maximum < target:
        continue
      if nums[i]*4 > target:
        break
      for j in range(i+1,len(nums)):
        if j > i+1 and nums[j]==nums[j-1]:
          continue
        start = j+1
        end= len(nums)-1
        while start < end :
          total = nums[i]+nums[j]+nums[start]+nums[end]
          if total == target :
            tmp = []
            tmp.append(nums[i])
            tmp.append(nums[j])
            tmp.append(nums[start])
            tmp.append(nums[end])
            result.append(tmp)
            startVal = nums[start]
            endVal = nums[end]
            while start < end and startVal == nums[start]:
              start += 1
            while start < end and endVal == nums[end]:
              end -= 1
          elif total < target:
            start+=1
          else :
            end -=1
    return result
print(Main.fourSum([1,0,-1,0,-2,2],0))
                    `,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <vector>
                    #include <algorithm>
                    
                    using namespace std;
                    
                    vector<vector<int>> fourSum(vector<int> nums, int target)
                    {
                        vector<vector<int>> result;
                        if (nums.size() == 0)
                        {
                            return result;
                        }
                        sort(nums.begin(), nums.end());
                        int max = nums[nums.size() - 1];
                        for (int i = 0; i < nums.size(); i++)
                        {
                            if (i > 0 && nums[i] == nums[i - 1])
                            {
                                continue;
                            }
                            if (nums[i] + 3 * max < target)
                            {
                                continue;
                            }
                            if (nums[i] * 4 > target)
                            {
                                break;
                            }
                            for (int j = i + 1; j < nums.size(); j++)
                            {
                                if (j > i + 1 && nums[j] == nums[j - 1])
                                {
                                    continue;
                                }
                                int start = j + 1;
                                int end = nums.size() - 1;
                                while (start < end)
                                {
                                    int sum = nums[i] + nums[j] + nums[start] + nums[end];
                                    if (sum == target)
                                    {
                                        vector<int> tmp;
                                        tmp.push_back(nums[i]);
                                        tmp.push_back(nums[j]);
                                        tmp.push_back(nums[start]);
                                        tmp.push_back(nums[end]);
                                        result.push_back(tmp);
                                        int startVal = nums[start];
                                        int endVal = nums[end];
                                        while (start < end && startVal == nums[start])
                                        {
                                            start++;
                                        }
                                        while (start < end && endVal == nums[end])
                                        {
                                            end--;
                                        }
                                    }
                                    else if (sum < target)
                                    {
                                        start++;
                                    }
                                    else
                                    {
                                        end--;
                                    }
                                }
                            }
                        }
                        return result;
                    }
                    
                    int main()
                    {
                        vector<int> v{1, 0, -1, 0, -2, 2};
                        for (auto i : fourSum(v, 0))
                        {
                            for (auto j : i)
                            {
                                cout << j << " ";
                            }
                            cout << endl;
                        };
                        return 0;
                    }`,
                  },
                  Kotlin: {
                    code: `import java.util.*

                    internal class Main {
                        fun fourSum(nums: IntArray, target: Int): List<List<Int>> {
                            val result: MutableList<List<Int>> = LinkedList()
                            if (nums.size < 4) {
                                return result
                            }
                            Arrays.sort(nums)
                            val max = nums[nums.size - 1]
                            for (i in nums.indices) {
                                if (i > 0 && nums[i] == nums[i - 1]) {
                                    continue
                                }
                                if (nums[i] + 3 * max < target) {
                                    continue
                                }
                                if (nums[i] * 4 > target) {
                                    break
                                }
                                for (j in i + 1 until nums.size) {
                                    if (j > i + 1 && nums[j] == nums[j - 1]) {
                                        continue
                                    }
                                    var start = j + 1
                                    var end = nums.size - 1
                                    while (start < end) {
                                        val sum = nums[i] + nums[j] + nums[start] + nums[end]
                                        if (sum == target) {
                                            val tmp: MutableList<Int> = LinkedList()
                                            tmp.add(nums[i])
                                            tmp.add(nums[j])
                                            tmp.add(nums[start])
                                            tmp.add(nums[end])
                                            result.add(tmp)
                                            val startVal = nums[start]
                                            val endVal = nums[end]
                                            while (start < end && startVal == nums[start]) {
                                                start++
                                            }
                                            while (start < end && endVal == nums[end]) {
                                                end--
                                            }
                                        } else if (sum < target) {
                                            start++
                                        } else {
                                            end--
                                        }
                                    }
                                }
                            }
                            return result
                        }
                    
                        companion object {
                            @JvmStatic
                            fun main(s: Array<String>) {
                                val m = Main()
                                println(m.fourSum(intArrayOf(1, 0, -1, 0, -2, 2), 0).toString())
                            }
                        }
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q19: {
        title: "Q19. Remove Nth Node From End of List",
        content: (
          <>
            <Span>
              <b>Q19. Remove Nth Node From End of List"</b>
            </Span>
            <Span>
              Given the head of a linked list, remove the nth node from the end
              of the list and return its head.
            </Span>
            <Img src={LeetcodeQ19} alt="img" left />
            <Span>
              <b>Example 1:</b>
            </Span>
            <Span>
              <b>Example 2:</b>
            </Span>
            <Span>
              <b>Example 3:</b>
            </Span>
            <Span>
              <b>Constraints:</b>
            </Span>
            <p>
              The number of nodes in the list is sz. <br />
              1 &lt;= sz &lt;= 30 <br />
              0 &lt;= Node.val &lt;= 100 <br />1 &lt;= n &lt;= sz
            </p>
            <CodeEditor
              options={{
                title: "Q19. Remove Nth Node From End of List",
                codes: {
                  Javascript: {
                    code: ``,
                  },
                  Java: {
                    code: `import java.util.List;
                    import java.util.stream.Collectors;
                    import java.util.*;
                    
                    class ListNode {
                         int val;
                         ListNode next;
                         ListNode() {}
                         ListNode(int val) { this.val = val; }
                         ListNode(int val, ListNode next) { this.val = val; this.next = next; }
                      }
                    
                    class Main {
                    
                        static ListNode root;
                    
                        public  static ListNode removeNthFromEnd(ListNode head, int n) {
                            int len = 0;
                            ListNode tmp = head;
                            while(tmp != null){
                                tmp = tmp.next;
                                len ++;
                            }
                            int toDe = len - n;
                            ListNode fake = new ListNode(-1);
                            ListNode parent = fake;
                            parent.next = head;
                            while (toDe > 0){
                                parent = parent.next;
                                toDe --;
                            }
                            parent.next = parent.next.next;
                            return fake.next;      
                        }
                    
                        public static void display(){
                          display(root);
                        }
                    
                        public static void display(ListNode temp){
                          while(temp.next != null){
                            System.out.print(String.valueOf(temp.val) + (temp.next != null ?" -> ":""));
                            temp =temp.next;
                          }
                          if(temp != root)
                          System.out.print(String.valueOf(temp.val));
                          System.out.print("\n");
                        }
                    
                        public static void main(String ...s){
                          int arr[] = {1,2,3,4,5};
                          List<Integer> list = Arrays.stream(arr).boxed().collect(Collectors.toList());
                          ListNode temp = new ListNode();
                            for(int i=0;i<list.size();i++){
                              if(list.size()==0){
                                 return;
                              }else if(i==0){
                                 root = new ListNode(list.get(i)); 
                              }else{
                                temp = root;
                                while(temp.next != null){
                                      temp = temp.next;      
                                }
                                temp.next = new ListNode(list.get(i));
                              } 
                            }
                          display(); 
                          ListNode res = removeNthFromEnd(root,2);
                          display(res);
                        }
                    }`,
                  },
                  Python: {
                    code: `class ListNode:
  
  def __init__(self,val=0):
    self.val=val
    self.next=None
  
class Main:

  def __init__(self):
    self.root = None

  def add(self,data):
    node = ListNode(data)
    if self.root is None:
      self.root = node
    else:
      temp = self.root
      while temp.next is not None:
        temp = temp.next
      temp.next = node
  
  def removeNthFromEnd(self,n):
    count = 0
    tmp = self.root
    while tmp is not None:
      tmp = tmp.next
      count+=1
    toDe = count - n
    parent = ListNode(0)
    parent.next = self.root
    second = parent
    while toDe > 0:
      second = second.next
      toDe -= 1
    second.next = second.next.next
    return parent.next
  
  def display(self):
    tmp = self.root
    while tmp is not None:
      print(tmp.val)
      tmp = tmp.next

arr = list(range(6))
m = Main()
for i in range(1,len(arr)):
  m.add(arr[i])
m.display()
y = m.removeNthFromEnd(2)
while y is not None:
  print(y.val)
  y = y.next
                    `,
                  },
                  "C++": {
                    code: `#include <iostream>
                    #include <bits/stdc++.h>
                    #include <vector>
                    
                    using namespace std;
                    
                    struct ListNode {
                       int val = 0;
                       ListNode *next;
                       ListNode() : val(0), next(nullptr) {}
                       ListNode(int x) : val(x), next(nullptr) {}
                       ListNode(int x, ListNode *next) : val(x), next(next) {}
                    };
                    
                    class Main{
                      
                      public:
                      ListNode *root;
                    
                    
                      void add(vector<int> v1){
                      vector<int> v(v1);
                      ListNode* temp= new ListNode();
                      for(auto i=0;i<v.size();i++){
                        if(v.size()==0)
                        return;
                        else if(i==0){
                         root = new ListNode(v[i]);
                        }else{
                         temp = root;
                         while(temp->next!=nullptr){
                          temp = temp -> next;
                         }
                         temp -> next = new ListNode(v[i]);
                        }
                      }
                      }
                    
                      ListNode* removeNthFromEnd(int n){
                        int len =0;
                        ListNode *tmp;
                        tmp = root;
                        while(tmp!=NULL){
                          tmp = tmp->next;
                          len++;
                        }
                        int toDe = len -n;
                        ListNode* fake = new ListNode(0); 
                        ListNode* parent = fake;
                        parent->next = root;
                        while(toDe>0){
                          parent = parent->next;
                          toDe--;
                        }
                        parent -> next = parent -> next -> next;
                        return fake->next;
                      }
                    
                      void display(){
                        ListNode *temp = new ListNode();
                        temp = root;
                        while(temp!= nullptr){
                          cout << temp -> val << endl;
                          temp = temp -> next;
                        }
                      }
                    
                    };
                    
                    
                    int main(){
                      vector<int> v(5);
                      iota(v.begin(),v.end(),1);
                      Main m;
                      m.add(v);
                      m.display();
                      cout << endl;
                      ListNode *m1=m.removeNthFromEnd(2);
                      while(m1!= nullptr){
                          cout << m1 -> val << endl;
                          m1 = m1 -> next;
                      }  
                      return 0;
                    }
                    `,
                  },
                  Kotlin: {
                    code: `import java.util.*
                    import java.util.stream.Collectors
                    
                    internal class ListNode {
                        var 'val' = 0
                        var next: ListNode? = null
                    
                        constructor() {}
                        constructor('val': Int) {
                            this.'val' = 'val'
                        }
                    
                        constructor('val': Int, next: ListNode?) {
                            this.'val' = 'val'
                            this.next = next
                        }
                    }
                    
                    internal object Main {
                        var root: ListNode? = null
                        fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {
                            var len = 0
                            var tmp = head
                            while (tmp != null) {
                                tmp = tmp.next
                                len++
                            }
                            var toDe = len - n
                            val fake = ListNode(-1)
                            var parent: ListNode? = fake
                            parent!!.next = head
                            while (toDe > 0) {
                                parent = parent!!.next
                                toDe--
                            }
                            parent!!.next = parent.next!!.next
                            return fake.next
                        }
                    
                        @JvmOverloads
                        fun display(temp: ListNode? = root) {
                            var temp = temp
                            while (temp!!.next != null) {
                                print(temp.'val'.toString() + if (temp.next != null) " -> " else "")
                                temp = temp.next
                            }
                            if (temp !== root) print(temp.'val'.toString())
                            print("\n")
                        }
                    
                        @JvmStatic
                        fun main(s: Array<String>) {
                            val arr = intArrayOf(1, 2, 3, 4, 5)
                            val list = Arrays.stream(arr).boxed().collect(Collectors.toList())
                            var temp: ListNode? = ListNode()
                            for (i in list.indices) {
                                if (list.size == 0) {
                                    return
                                } else if (i == 0) {
                                    root = ListNode(list[i])
                                } else {
                                    temp = root
                                    while (temp!!.next != null) {
                                        temp = temp.next
                                    }
                                    temp.next = ListNode(list[i])
                                }
                            }
                            display()
                            val res = removeNthFromEnd(root, 2)
                            display(res)
                        }
                    }`,
                  },
                },
              }}
            />
          </>
        ),
      },
      q20: {
        title: "Q20. Valid Parenthesis",
      },
      q21: {
        title: "Q21. Merge Two Sorted Lists",
      },
      q22: {
        title: "Q22. Generate Parentheses",
      },
      q23: {
        title: "Q23. Merge K Sorted Lists",
      },
      q24: {
        title: "Q24. Swap Nodes In Pairs",
      },
      q25: {
        title: "Q25. Reverse Nodes in k-Group",
      },
      q26: {
        title: "Q26. Remove Duplicates from Sorted Array.",
      },
      q27: {
        title: "Q27. Remove Element",
      },
      q28: {
        title: "Q28. Implement strStr()",
      },
      q29: {
        title: "Q29. Divide Two Integers",
      },
      q30: {
        title: "Q30. Substring with Concatenation of All Words",
      },
      q31: {
        title: "Q31. Next Permutation",
      },
      q32: {
        title: "Q32. Longest Valid Parentheses",
      },
      q33: {
        title: "Q33. Search in Rotated Sorted Array",
      },
      q34: {
        title: "Q34. Find First and Last Position of Element in Sorted Array",
      },
      q35: {
        title: "Q35. Search Insert Position",
      },
      q36: {
        title: "Q36. Valid Sudoku",
      },
      q37: {
        title: "Q37. Sudoku Solver",
      },
      q38: {
        title: "Q38: Count And Say",
      },
      q39: {
        title: "Q39. Combination Sum",
      },
      q40: {
        title: "Q40. Combination Sum 2",
      },
      q41: {
        title: "Q41. Missing Positive",
      },
      q42: {
        title: "Q42. Trapping Rain Water",
      },
      q43: {
        title: "Q43. Multiply Strings",
      },
      q44: {
        title: "Q44. Wildcard Matching",
      },
      q45: {
        title: "Q45. Jump Game 2",
      },
      q46: {
        title: "Q46. Permutations",
      },
      q47: {
        title: "Q47. Permutations 2",
      },
      q48: {
        title: "Q48. Rotate Image",
      },
      q49: {
        title: "Q49. Group Anagrams",
      },
      q50: {
        title: "Q50. Pow(x,n)",
      },
      q51: {
        title: "Q51. N-Queens",
      },
      q52: {
        title: "Q52. N-Queen’s 2",
      },
      q53: {
        title: "Q53. Maximum Subarray",
      },
      q54: {
        title: "Q54. Spiral Matrix",
      },
      q55: {
        title: "Q55. Jump Game",
      },
    },
  },
};

// at algorithms also include its characteristics
