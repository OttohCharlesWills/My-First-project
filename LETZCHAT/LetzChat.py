# from flask import Flask, render_template, request
# from twilio.rest import Client
# import smtplib
# import random
# import string

# app = Flask("__name__")

# # Twilio configuration
# TWILIO_ACCOUNT_SID = 'YOUR_TWILIO_ACCOUNT_SID'
# TWILIO_AUTH_TOKEN = 'YOUR_TWILIO_AUTH_TOKEN'
# TWILIO_PHONE_NUMBER = 'YOUR_TWILIO_PHONE_NUMBER'

# # Gmail configuration
# GMAIL_ADDRESS = 'YOUR_GMAIL_ADDRESS'
# GMAIL_PASSWORD = 'YOUR_GMAIL_PASSWORD'

# # Initialize Twilio client
# client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
# def send_sms_verification(phone_number):
#     verification_code = ''.join(random.choices(string.digits, k=6))
#     message = client.message.create(
#         body=f'Your verification code is: {verification_code}',
#         to=phone_number
#     )
#     return verification_code
# def send_email_verification(email):
#     verification_code = ''.join(random.choices(string.ascii_letter + string.digits,))

#     msg = f'Your verification code is: {verification_code}'
#     server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
#     server.login(GMAIL_ADDRESS, GMAIL_PASSWORD)
#     server.sendmail(GMAIL_ADDRESS, email, msg)
#     server.quit()

#     return verification_code
    
#     @app.route('/')
#     def index():

#     return render_template('LetzChat 4.html')

#     @app.route('/send_verification', methods=['POST'])
#     def send_verification():
#         phone_number = request.form['phone_number']
#         email = request.form['email']

#         sms_verification_code = send_sms_verification(phone_number)
#         email_verification_code = send_email_verification(email)

#         return f'''
#         <h2>Verification Codes Sent!</h2>
#         <p>SMS Verification Code: {sms_verification_code}</p>
#         <p>Email Verification Code: {email_verification_code}</p>
#         '''
#     if '__name__'=='__main__':
#         app.run(debug=True)

# Function to create a new account
def create_account():
    accounts = {}  # Dictionary to store accounts

    # Gather user information
    username = input("Enter username: ")
    password = input("Enter password: ")
    email = input("Enter email address: ")

    # Create account data
    account_details = {
        'username': username,
        'password': password,
        'email': email
    }

    # Check if the username already exists
    if username in accounts:
        print("Username already exists. Please choose another username.")
    else:
        # Store account details in the accounts dictionary
        accounts[username] = account_details
        print("Account created successfully!")

    return accounts

# Example usage
user_accounts = create_account()
