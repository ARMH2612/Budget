import React, { useContext, useState } from 'react';
import {v4 as uuidV4} from 'uuid'

const BudgetContext = React.createContext()

export function useBudget(){
return useContext(BudgetContext)
}

export const BudgetProvider = ({children}) =>{
    const [budgets, setBudgets] = useState([])
    const [expences, setExpences] = useState([])
    
    function getBudgetExpences(budgetId){
        return expences.filter(exp =>exp.id === budgetId)
    }
    function addExpence({description, amount, budgetId}){
        setExpences(previousExpences=>{
            return [...previousExpences, {
                id: uuidV4(),
                description, amount, budgetId
            }]
        })
    }
    function addBudget({name, max}){
        setBudgets(previousBudgets=>{
            if(previousBudgets.find(budget => budget.name === name)){
                return previousBudgets
            }
            return [...previousBudgets, {
                id: uuidV4(),
                name , max
            }]
        })
    }
    function deleteExpence({id}){
        setExpences(previousExpences=>{
            return previousExpences.filter(exp => exp.id !== id)
        })
    }
    function deleteBudget({id}){
        setBudgets(previousBudgets=>{
            return previousBudgets.filter(budgets=>budgets.id !== id)
        })
    }
    return <BudgetContext.Provider value={{
        budgets,
        expences,
        getBudgetExpences,
        addExpence,
        addBudget,
        deleteExpence,
        deleteBudget
    }}>
        {children}
    </BudgetContext.Provider>
}