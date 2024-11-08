package com.larissa.challengeodontoprev

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class TelaAnalises : AppCompatActivity() {

    var listAnalises: ListView  = findViewById(R.id.listaAnalises);
    var  String[] itens = {
        "Análise 00001", "Análise 00002", "Análise 00003", "Análise 00004", "Análise 00004"
    }



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_tela_analises)

        ArrayAdapter<String> adapter = new ArrayAdapter<String>


    }
}

