import streamlit as st
import pandas as pd
import seaborn as sns
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

# Load your dataset (replace this with your actual dataset loading method)
df = pd.read_csv(r'C:\Users\POULAMI DAS\OneDrive\Desktop\Multiverse_of_100-_data_science_project_series-main\Diabetes Prediction Using ML\backend\diabetes (1).csv')

# Set up Streamlit UI
st.title('Diabetes Checkup')
st.sidebar.header('Patient Data')
st.subheader('Training Data Stats')
st.write(df.describe())

# Split data into X and y
x = df.drop(['Outcome'], axis=1)
y = df['Outcome']

# Split into training and testing data
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)

# Function to get user input
def user_report():
    pregnancies = st.sidebar.slider('Pregnancies', 0, 17, 3)
    glucose = st.sidebar.slider('Glucose', 0, 200, 120)
    bp = st.sidebar.slider('Blood Pressure', 0, 122, 70)
    skinthickness = st.sidebar.slider('Skin Thickness', 0, 100, 20)
    insulin = st.sidebar.slider('Insulin', 0, 846, 79)
    bmi = st.sidebar.slider('BMI', 0, 67, 20)
    dpf = st.sidebar.slider('Diabetes Pedigree Function', 0.0, 2.4, 0.47)
    age = st.sidebar.slider('Age', 21, 88, 33)

    user_report_data = {
        'Age': age,
        'BMI': bmi,
        'BloodPressure': bp,
        'DiabetesPedigreeFunction': dpf,
        'Glucose': glucose,
        'Insulin': insulin,
        'Pregnancies': pregnancies,
        'SkinThickness': skinthickness
    }
    report_data = pd.DataFrame(user_report_data, index=[0])
    return report_data

# Get user data
user_data = user_report()
st.subheader('Patient Data')
st.write(user_data)

# Train a RandomForestClassifier model
rf = RandomForestClassifier(random_state=0)
rf.fit(x_train, y_train)

# Predict using user data
try:
    # Align user_data with x_train
    user_data_aligned = user_data[x_train.columns]

    # Predict using aligned user_data
    user_result = rf.predict(user_data_aligned)
    user_result_proba = rf.predict_proba(user_data_aligned)

    st.subheader('Prediction')
    if user_result[0] == 1:
        st.write('Diabetic')
    else:
        st.write('Non-Diabetic')

    st.subheader('Prediction Probability')
    st.write(user_result_proba)

    st.subheader('Visualized Patient Report')

    # Visualizations
    fig, axes = plt.subplots(nrows=3, ncols=3, figsize=(15, 15))

    # Age vs Pregnancies
    sns.scatterplot(x='Age', y='Pregnancies', data=df, hue='Outcome', ax=axes[0, 0])
    sns.scatterplot(x=user_data['Age'], y=user_data['Pregnancies'], color='red', marker='x', s=100, ax=axes[0, 0])
    axes[0, 0].set_title('Age vs Pregnancies')

    # Age vs Glucose
    sns.scatterplot(x='Age', y='Glucose', data=df, hue='Outcome', ax=axes[0, 1])
    sns.scatterplot(x=user_data['Age'], y=user_data['Glucose'], color='red', marker='x', s=100, ax=axes[0, 1])
    axes[0, 1].set_title('Age vs Glucose')

    # Age vs Blood Pressure
    sns.scatterplot(x='Age', y='BloodPressure', data=df, hue='Outcome', ax=axes[0, 2])
    sns.scatterplot(x=user_data['Age'], y=user_data['BloodPressure'], color='red', marker='x', s=100, ax=axes[0, 2])
    axes[0, 2].set_title('Age vs Blood Pressure')

    # Age vs Skin Thickness
    sns.scatterplot(x='Age', y='SkinThickness', data=df, hue='Outcome', ax=axes[1, 0])
    sns.scatterplot(x=user_data['Age'], y=user_data['SkinThickness'], color='red', marker='x', s=100, ax=axes[1, 0])
    axes[1, 0].set_title('Age vs Skin Thickness')

    # Age vs Insulin
    sns.scatterplot(x='Age', y='Insulin', data=df, hue='Outcome', ax=axes[1, 1])
    sns.scatterplot(x=user_data['Age'], y=user_data['Insulin'], color='red', marker='x', s=100, ax=axes[1, 1])
    axes[1, 1].set_title('Age vs Insulin')

    # Age vs BMI
    sns.scatterplot(x='Age', y='BMI', data=df, hue='Outcome', ax=axes[1, 2])
    sns.scatterplot(x=user_data['Age'], y=user_data['BMI'], color='red', marker='x', s=100, ax=axes[1, 2])
    axes[1, 2].set_title('Age vs BMI')

    # Age vs Diabetes Pedigree Function
    sns.scatterplot(x='Age', y='DiabetesPedigreeFunction', data=df, hue='Outcome', ax=axes[2, 0])
    sns.scatterplot(x=user_data['Age'], y=user_data['DiabetesPedigreeFunction'], color='red', marker='x', s=100, ax=axes[2, 0])
    axes[2, 0].set_title('Age vs Diabetes Pedigree Function')

    # Hide unused axes
    axes[2, 1].axis('off')
    axes[2, 2].axis('off')

    plt.tight_layout()
    st.pyplot(fig)

    st.subheader('Your Report')
    st.write('Accuracy: {:.2f}%'.format(accuracy_score(y_test, rf.predict(x_test)) * 100))

except ValueError as e:
    st.error(f"Error: {e}. Please adjust your input data.")
