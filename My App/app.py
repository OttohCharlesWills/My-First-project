from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create_account', methods=['POST'])
def create_account():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        # Here, you can handle storing the user information in a database or any other required logic
        return f"Account created successfully for {username} with email {email}!"
    return 'Account creation failed.'

if __name__ == '__main__':
    app.run(debug=True)
