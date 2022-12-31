import dash
from dash import html
from dash import dcc
import dash_bootstrap_components as dbc
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# navbar = dbc.NavbarSimple(
#     brand='Production Dashboard',
#     children=[
#         html.Img(src='url of image',
#                  height=20),
#         html.A('Data Source',
#                href='url of data source',
#                target='_blank',
#                style={'color': 'black'})
#     ],
#     color="azure",
#     fluid=True
# )

production = pd.read_csv('DataForPandasProject.csv')

avg_accepted = production['Accepted'].mean()
avg_rejected = production['Rejected'].mean()
count_short = production['Short'].count()


first_card = dbc.Card(
    dbc.CardBody([
        html.H4('Average Rejected'),
        html.H5(f'{round(avg_rejected, 1)}')
    ]),
    style={'textAlign': 'center', 'color': 'white'},
    color='lightblue',
),
second_card = dbc.Card(
    dbc.CardBody([
        html.H4('Count of Short'),
        html.H5(f'{round(count_short)}')
    ]),
    style={'textAlign': 'center', 'color': 'white'},
    color='blue',
),
third_card = dbc.Card(
    dbc.CardBody([
        html.H4('Average Accepted'),
        html.H5(f'{round(avg_accepted, 1)}')
    ]),
    style={'textAlign': 'center', 'color': 'white'},
    color='blue',
)

cards = dbc.Row(
    [
        dbc.Col(first_card),
        dbc.Col(second_card),
        dbc.Col(third_card)
    ]
)


groupOptions = [{'label': i, 'value': i} for i in production['Agent Group'].unique()]
manager_options = [{'label': i, 'value': i} for i in production['Manager'].unique()]
data_options = [{'label': 'Accepted', 'value': 'Accepted'},
                {'label': 'Rejected', 'value': 'Rejected'}]

app = dash.Dash()

app.layout = html.Div([
    # dbc.Row(navbar),
    dbc.Row(cards),
    dbc.Row([html.H1('Example Production Dashboard',
                     style={'textAlign': 'center',
                            'fontFamily': 'sans-serif',
                            'fontSize': '50px',
                            'color': 'blue',
                            'border': 'solid'}),
             html.P(['This dashboard shows sum of accepted calls.',
                     html.Br(),
                     html.A('Example hyperlink to Data Source',
                            href='https://blank.blank/',
                            target="_blank")],
                    style={'margin': '25px'}),

             dcc.RadioItems(id='manager-radio',
                            options=manager_options,
                            value="Manager1"),
             dcc.Dropdown(id='agentDropdown',
                          style={'width': '50%',
                                 'margin-top': '15px'}),
             dcc.RadioItems(id='data-radio',
                            options=data_options,
                            value='Accepted'),
             dcc.Graph(id='productionGraph'),
             html.Div(id='average-div')])
])


@app.callback(
    Output('agentDropdown', 'options'),
    Output('agentDropdown', 'value'),
    Input('manager-radio', 'value')
)
def update_dropdown(selected_manager):
    filtered_production = production[production['Manager'] == selected_manager]
    agent_options = [{'label': i, 'value': i} for i in filtered_production['Agent Name'].unique()]
    return agent_options, agent_options[0]['value']


@app.callback(
    Output('productionGraph', 'figure'),
    Output('average-div', 'children'),
    Input('agentDropdown', 'value'),
    Input('data-radio', 'value')

)
def update_graph(selected_agent, selected_data):
    filtered_production = production[production['Agent Name'] == selected_agent]
    hist_fig = px.histogram(filtered_production,
                            x='Date', y=selected_data,
                            title=f"{selected_data} for {selected_agent}")
    selected_average = filtered_production[selected_data].mean()
    return hist_fig, f"The average {selected_data} for {selected_agent} is " \
                     f"{selected_average}"


if __name__ == '__main__':
    app.run_server(debug=True)
