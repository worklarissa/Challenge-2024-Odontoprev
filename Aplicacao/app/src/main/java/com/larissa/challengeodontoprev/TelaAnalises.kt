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
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_tela_analises)

        val listaAnalises = findViewById<RecyclerView>(R.id.listaAnalises)
        listaAnalises.layoutManager = LinearLayoutManager(this)
        listaAnalises.setHasFixedSize(true)
    }
}

