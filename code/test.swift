import SwiftUI

struct ContentView: View {
    @State private var username: String = ""
    
    var body: some View {
        ZStack {
            Color(hex: 0x2E3A43) // Set the background color
            
            VStack {
                Text("Enter your username")
                    .font(.title)
                    .foregroundColor(.white)
                    .padding()
                
                TextField("Username", text: $username)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding()
                
                Button(action: {
                    // Perform some action when the button is pressed, e.g., print the username
                    print("Entered username: \(username)")
                }) {
                    Text("Enter")
                        .font(.title)
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                }
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

@main
struct Tvarus: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

extension Color {
    init(hex: Int) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xff) / 255.0,
            green: Double((hex >> 8) & 0xff) / 255.0,
            blue: Double(hex & 0xff) / 255.0,
            opacity: 1.0
        )
    }
}
